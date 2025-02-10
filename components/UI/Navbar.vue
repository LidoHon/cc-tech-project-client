<script setup>
import { ref, computed } from "vue";
import { useToast } from "vue-toast-notification";

const searchQuery = ref("");

const toast = useToast();
const auth = authStore();
const router = useRouter();

onMounted(async () => {
  await auth.getProfile();
});

const id = auth.userId;
const isAuthenticated = computed(() => auth.isAuthed);
const isAdmin = computed(() => auth.isAdmin);
console.log("the user is authenticated?", isAuthenticated);
const user = computed(() => auth.user);

const handleLogout = async () => {
  const result = await auth.logout();
  if (result) {
    toast.success("you have logged out successfully");
    router.push("/");
  } else {
    toast.error("unable to logout");
  }
};
</script>
<template>
  <div v-if="isAuthenticated" class="sticky top-0 z-10">
    <div
      class="navbar bg-base-100 container mx-auto rounded-xl border-1 border-cyan-200 border-b shadow-md custom-navbar dark:bg-slate-600 mt-2"
    >
      <div class="flex-1">
        <a class="btn btn-ghost text-xl text-black">Wellcome</a>
      </div>

      <!-- Show search and profile if user is logged in -->
      <div v-if="user">
        <div class="flex-row flex gap-2 mt-2">
          <!-- Dashboard Button for Admins -->
          <NuxtLink to="/" class="hidden md:block btn btn-ghost text-xl">
            Home
          </NuxtLink>
          <NuxtLink
            v-if="isAdmin"
            to="/admin/dashboard"
            class="hidden md:block btn btn-ghost text-xl"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink
            v-if="isAdmin"
            to="/admin/create-user"
            class="hidden md:block btn btn-ghost text-xl"
          >
            Create user
          </NuxtLink>
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  :src="auth.$state.user.profile"
                  :alt="`${auth.$state.user.username}'s profile`"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NuxtLink :to="`/profile`" class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </NuxtLink>
              </li>
              <!-- Admin Dashboard in Dropdown -->
              <li v-if="isAdmin">
                <NuxtLink :to="`/admin/dashboard`"> Admin Dashboard </NuxtLink>
              </li>
              <li v-if="isAdmin">
                <NuxtLink :to="`/admin/create-user`">
                  create new user
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="`/`" class="justify-between"> Home </NuxtLink>
              </li>
              <li><button @click="handleLogout">Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 2000px;
  padding: 1rem;
}
</style>
