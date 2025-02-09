<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoading = ref(false);
const useAuthStore = authStore();

const props = defineProps({
  action: {
    type: String,
    required: true,
    validator: (value) => ["Sign in", "Sign up"].includes(value),
  },
});

const handleClick = () => {
  isLoading.value = true;
  window.open(
    `${import.meta.env.VITE_GO_SERVER_ENDPOINT}/auth/github?provider=github`,
    "_self"
  );
};

// Extract token from URL and store it
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  console.log("url params", urlParams);
  const dataParam = urlParams.get("data");
  console.log("data params", dataParam);

  if (dataParam) {
    try {
      const parsedData = JSON.parse(decodeURIComponent(dataParam));
      const { token, refreshToken, role, id, message } = parsedData;

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("authRole", role);
        localStorage.setItem("authUserId", id);

        if (role === "admin") {
          localStorage.setItem("isAdmin", "true");
        }

        // store it in pinia
        useAuthStore.setUserId(id);
        useAuthStore.$state.userId = id;
        useAuthStore.$state.authToken = token;
        useAuthStore.$state.refreshToken = refreshToken;
        useAuthStore.$state.authRole = role;
        useAuthStore.$state.isAuthed = true;
        useAuthStore.$state.isEmailVerified = true;
        useAuthStore.$state.successMessage =
          message || "You have logged in successfully through google!";
        console.log(
          "user idddddddddddddddddddddddd",
          useAuthStore.$state.userId
        );
        if (role === "admin") {
          useAuthStore.isAdmin = true;
        }

        router.push("/");
      }
    } catch (error) {
      console.error("Failed to parse auth data:", error);
    }
  }
});
</script>

<template>
  <button
    @click="handleClick"
    :disabled="isLoading"
    class="w-full flex items-center justify-center mt-2 text-gray-600 transition-colors duration-300 transform border rounded-full hover:bg-cyan-200 hover:ring-blue-500 hover:border-blue-500"
  >
    <div class="w-full relative flex" v-if="!isLoading">
      <div class="px-2 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.46 9.46 0 0 1 12 6.84c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.77c0 .27.16.58.67.48A10.005 10.005 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
          />
        </svg>
      </div>

      <span class="w-5/6 px-4 py-3 font-bold text-center"
        >{{ props.action }} with Github</span
      >
    </div>
    <div class="w-full h-10 flex items-center justify-center gap-2" v-else>
      <UILoading />
    </div>
  </button>
</template>
