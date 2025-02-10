<template>
  <div class="mt-4">
    <!-- Hero Section -->
    <section
      class="flex justify-center items-center h-[50vh] bg-gradient-to-br from-[#025049] to-[#161f44] text-white text-center"
    >
      <div class="max-w-[600px]">
        <h1 ref="title" class="text-4xl mb-4">Welcome to My home page</h1>
        <div ref="subtitle" class="text-xl mb-8">
          Wanna check my portfolio ?
        </div>
        <div
          ref="cta"
          class="px-40 py-3 font-bold text-lg text-[#20161F] flex grid-flow-col border-black rounded-sm gap-4 border-none cursor-pointer transition-colors duration-300"
        >
          <NuxtLink to="https://lidethonelign.com/" target="_blank">
            <svg
              height="100px"
              width="100px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 511.995 511.995"
              xml:space="preserve"
              class="transform hover:scale-150 hover:rotate-4 transition duration-300 ease-in-out"
            >
              <circle
                style="fill: #006775"
                cx="255.997"
                cy="255.997"
                r="255.997"
              />
              <path
                style="fill: #055661"
                d="M293.428,509.223l-175.147-178.7l284.987-173.924l108.509,108.509
	c-4.443,124.502-97.735,226.346-218.349,244.005L293.428,509.223L293.428,509.223z"
              />
              <path
                style="fill: #ffda45"
                d="M123.724,141.938h260.331c9.108,0,16.548,7.442,16.548,16.548v153.488
	c0,9.108-7.442,16.548-16.548,16.548h-39.316l-29.099,36.428l-29.099-36.428H123.724c-9.108,0-16.548-7.442-16.548-16.548V158.487
	C107.176,149.38,114.617,141.938,123.724,141.938z"
              />
              <path
                style="fill: #00cc96"
                d="M159.708,245.338h1.999l11.883-6.442l1.888-7.553c-2.777-2.888-5.776-7.664-8.441-13.66
	c-0.222,0-0.444,0-0.666,0c-3.11,0-6.22-3.443-6.886-7.664c-0.555-3.332,0.555-6.109,2.555-7.219
	c-2.666-13.549-4.443-34.318,18.881-39.427c13.994-3.11,18.992,7.664,19.547,8.885c8.441-4.776,13.883,2.332,15.215,6.109
	c2.555,6.775,1.666,19.436,0.444,25.1c1.444,1.333,2.11,3.776,1.666,6.553c-0.666,4.11-3.665,7.553-6.775,7.664
	c-2.444,5.442-5.887,10.107-9.219,13.549l1.888,7.553h0.111l11.55,6.442h2.221c15.215,0,27.655,11.994,27.655,26.544v21.546H131.943
	v-21.546c0-14.66,12.439-26.544,27.655-26.544L159.708,245.338z"
              />
              <path
                style="fill: #ffffff"
                d="M258.11,180.255h111.841v10.439H258.11V180.255z M258.11,242.783h55.975v10.439H258.11V242.783z
	 M258.11,221.904h111.841v10.439H258.11V221.904z M258.11,201.024h111.841v10.439H258.11V201.024z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section
      class="flex flex-col gap-4 md:flex-row justify-around py-16 px-8 bg-white text-[#333] dark:bg-[#20161F] dark:text-white"
    >
      <div
        ref="feature1"
        class="max-w-[300px] text-center border-b md:border-none md:border-r md:border-[#ddd] pb-4 md:pb-0"
      >
        <h2 class="text-2xl mb-4">Easy User Signup</h2>
        <p class="text-base">
          Sign up in a flash with a custom method or just use your Google or
          GitHub account.
        </p>
      </div>
      <div
        ref="feature2"
        class="max-w-[300px] text-center border-b md:border-none md:border-r md:border-[#ddd] pb-4 md:pb-0"
      >
        <h2 class="text-2xl mb-4">Simple Role Management</h2>
        <p class="text-base">
          Keep things organized with role-based access. Only the right people
          get access to the right things, thanks to Nuxt's middleware.
        </p>
      </div>
      <div ref="feature3" class="max-w-[300px] text-center pb-4 md:pb-0">
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
