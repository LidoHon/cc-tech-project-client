<template>
  <div class="mt-4">
    <!-- Hero Section -->
    <section
      class="flex justify-center items-center h-[50vh] bg-gradient-to-br from-[#025049] to-[#161f44] text-white text-center"
    >
      <div class="max-w-[600px]">
        <h1 ref="title" class="text-4xl mb-4">Welcome to My home page</h1>
        <p ref="subtitle" class="text-xl mb-8">Alittle bit of animation with</p>
        <button
          ref="cta"
          class="px-8 py-3 font-bold text-lg text-[#4a6cf7] bg-white border-none rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#f0f0f0]"
        >
          GSAP
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section
      class="flex justify-around py-16 px-8 bg-white text-[#333] dark:bg-[#1D232A] dark:text-white"
    >
      <div ref="feature1" class="max-w-[300px] text-center">
        <h2 class="text-2xl mb-4">Easy User Signup</h2>
        <p class="text-base">
          Sign up in a flash with a custom method or just use your Google or
          GitHub account.
        </p>
      </div>
      <div ref="feature2" class="max-w-[300px] text-center">
        <h2 class="text-2xl mb-4">Simple Role Management</h2>
        <p class="text-base">
          Keep things organized with role-based access. Only the right people
          get access to the right things, thanks to Nuxt's middleware.
        </p>
      </div>
      <div ref="feature3" class="max-w-[300px] text-center">
        <h2 class="text-2xl mb-4">Admin Dashboard</h2>
        <p class="text-base">
          Admins, take charge! Manage users and roles easily with our
          user-friendly dashboard. All the tools you need in one place.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    // Hero Section Animations
    gsap.from(this.$refs.title, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power2.out",
    });
    gsap.from(this.$refs.subtitle, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
    });
    gsap.from(this.$refs.cta, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      delay: 1,
    });

    // Features Section Animations
    gsap.from(this.$refs.feature1, {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power2.out",
      delay: 1.5,
    });
    gsap.from(this.$refs.feature2, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
      delay: 2,
    });
    gsap.from(this.$refs.feature3, {
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power2.out",
      delay: 2.5,
    });
  },
};
</script>
