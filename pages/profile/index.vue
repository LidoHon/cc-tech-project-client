<script setup>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import { useToast } from "vue-toast-notification";
import * as yup from "yup";

useSeoMeta({
  title: "cc-project | Profile Page",
  description: "The project app meta.",
});

const toast = useToast();
const getExtension = (filename) => {
  const extension = filename.split(".");
  return extension[1];
};
const MAX_FILE_SIZE = 2097152;
const useAuthStore = authStore();

const profileError = ref({
  userName: "",
  phone: "",
  profile: "",
});
const nameregex = /^([^\x00-\x7F]|[\a-zA-Z_\ \.\+\-]){2,20}$/;
const phoneregex = /^(^\+251|^251|^0)?(9|7)\d{8}$/;
const errorMessages = {
  userName: {
    invalid_username: "Invalid user name",
  },
  phone: {
    invalid_phone: "Invalid phone address",
  },
};

const schema = yup.object({
  userName: yup
    .string()
    .required()
    .matches(nameregex, errorMessages.userName.invalid_username),
  phone: yup
    .string()
    .required()
    .matches(phoneregex, errorMessages.phone.invalid_phone),
  profile: yup
    .mixed()
    .test({
      message: "Please provide supported file type",
      test: (file, context) => {
        let isValid;
        if (file) {
          isValid = [
            "jpg",
            "gif",
            "png",
            "jpeg",
            "svg",
            "webp",
            "jpeg",
          ].includes(getExtension(file?.name));
        } else {
          isValid = true;
        }
        if (!isValid) {
          context?.createError();
        }
        return isValid;
      },
    })
    .test({
      message: "File is too big, cant exit 2Mb",
      test: (file) => {
        let isValid;
        if (file) {
          isValid = file?.size < MAX_FILE_SIZE;
        } else {
          isValid = true;
        }
        return isValid;
      },
    }),
});

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    image.value.name = file.name;
    image.value.type = file.type;
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.match(/base64,(.*)$/)[1];
      image.value.base64String = base64String;
    };
    reader.readAsDataURL(file);
    reader.onerror = (error) => {
      console.log("there is some error in image uploading: ", error);
      reject(error);
    };
  }
};
onMounted(async () => {
  await useAuthStore.getProfile();
});

const image = ref({
  name: "",
  type: "",
  base64String: "",
});

const handleUpdateProfle = async (value) => {
  useAuthStore.changeOnLoad(true);
  let payload;
  if (
    image.value.name !== "" ||
    image.value.type !== "" ||
    image.value.base64String !== ""
  ) {
    payload = {
      userName: value.userName,
      phone: value.phone,
      imageName: image.value.name,
      imageType: image.value.type,
      imageString: image.value.base64String,
    };
  } else {
    payload = {
      userName: value.userName,
      phone: value.phone,
    };
  }
  const result = await useAuthStore.updateProfile(payload);
  useAuthStore.changeOnLoad(false);
  if (result) {
    await useAuthStore.getProfile();
    if (
      useAuthStore.$state.successMessage &&
      useAuthStore.$state.successMessage.length > 0
    ) {
      const message = useAuthStore.$state.successMessage;
      useAuthStore.setSuccessMessage("");
      toast.success(message);
    } else {
      toast.success("Your profile updated successfully!");
    }
    showProfileUpdate.value = false;
  } else {
    if (
      useAuthStore.$state.errorMessage &&
      useAuthStore.$state.errorMessage.length > 0
    ) {
      const message = useAuthStore.$state.errorMessage;
      useAuthStore.setErrorMessage("");
      toast.error(message);
    } else {
      toast.error("Something wrong! please try again.");
    }
  }
};

// Reactive state for toggling sections
const showProfileUpdate = ref(false);

const toggleProfileUpdate = () => {
  showProfileUpdate.value = !showProfileUpdate.value;
};
</script>

<template>
  <div class="min-h-50vh container mx-auto bg-gray-100 p-6 dark:bg-[#20161F]">
    <!-- Header Section -->
    <div class="flex items-center space-x-4">
      <div class="avatar online">
        <div class="w-24 rounded-full">
          <img
            :src="useAuthStore.$state.user.profile"
            :alt="`${useAuthStore.$state.user.username}'s profile`"
            class="transform hover:scale-150 hover:rotate-2 transition duration-300 ease-in-out rounded-full w-24 h-24 object-cover border border-gray-300"
          />
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold dark:text-gray-200">
          {{ useAuthStore.$state.user.username }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          {{ useAuthStore.$state.user.email }}
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          {{ useAuthStore.$state.user.phone }}
        </p>
        <p class="text-green-600">{{ useAuthStore.$state.user.role }}</p>

        <p class="">
          Joined in:
          <span class="text-green-600">
            {{
              new Date(useAuthStore.$state.user.created_at).toDateString()
            }}</span
          >
        </p>
      </div>
      <button
        @click="toggleProfileUpdate"
        class="ml-auto px-4 py-2 bg-cyan-200 rounded-full text-black hover:bg-blue-100"
      >
        Update Profile
      </button>
    </div>

    <!-- Profile Update Section -->
    <transition name="slide">
      <div
        v-if="showProfileUpdate"
        class="mt-6 bg-white dark:bg-[#20161F] shadow rounded-lg p-6"
      >
        <h2 class="text-lg font-bold mb-4">Update Profile</h2>
        <Form
          @submit="handleUpdateProfle"
          :validation-schema="schema"
          v-slot="{ errors }"
          class="space-y-4"
        >
          <div>
            <UIInput
              name="userName"
              type="text"
              placeholder="enter username"
              label="User Name"
              :is-required="true"
              :edit-mode="true"
              :value="
                useAuthStore.$state.user.username
                  ? useAuthStore.$state.username
                  : ''
              "
              :error-message="
                errors.userName
                  ? errors.userName
                  : profileError.userName
                  ? profileError.userName
                  : ''
              "
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <UIInput
              name="phone"
              placeholder="Insert your new phonenumber"
              label="Phone Number"
              :is-required="true"
              :edit-mode="true"
              :value="
                useAuthStore.$state.user.phone
                  ? useAuthStore.$state.user.phone
                  : ''
              "
              type="text"
              :error-message="
                errors.phone
                  ? errors.phone
                  : profileError.phone
                  ? profileError.phone
                  : ''
              "
            />
          </div>
          <!-- <div class="w-full flex flex-col sm:mb-3 justify-center gap-2">
            <label
              for=""
              class="lock pl-3 ml-px text-sm font-medium text-gray-100"
              >Profile
            </label>
            <UIImage
              name="profile"
              @image-changed="handleFileChange"
              :error-message="
                errors.profile
                  ? errors.profile
                  : profileError.profile
                  ? profileError.profile
                  : ''
              "
            />
          </div> -->
          <div class="mt-6">
            <button
              class="w-full px-6 py-3 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-cyan-800 rounded-full hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              <span v-if="useAuthStore.$state.onLoad == false">
                Update Profile
              </span>
              <div class="w-full flex items-center justify-center gap-2" v-else>
                <UILoading />
              </div>
            </button>
          </div>
        </Form>
      </div>
    </transition>
  </div>
</template>

<style>
/* Add sliding animation for the profile update section */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
