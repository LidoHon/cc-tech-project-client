<script setup>
import { useRouter } from "vue-router";

useSeoMeta({
  title: "cc-project | Unauthorized",
  description: "The project app meta.",
});

definePageMeta({
  layout: false,
});
const router = useRouter();

// Redirect the user back to the previous page
const goBack = () => {
  const previousRoute = window.sessionStorage.getItem("previousRoute");
  if (previousRoute) {
    router.push(previousRoute);
    window.sessionStorage.removeItem("previousRoute");
  } else {
    router.push("/");
  }
};

// Redirect the user to the home page
const goHome = () => {
  router.push("/");
};
</script>
<template>
  <div
    class="unauthorized-page h-screen flex flex-col items-center justify-center text-center p-[50px] text-red-950 border-1 dark:bg-[#20161F]"
  >
    <!-- SVG for restricted area -->
    <svg
      fill="#73C7C7"
      height="150px"
      width="150px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 128"
      xml:space="preserve"
      class="transform hover:scale-150 hover:rotate-4 transition duration-300 ease-in-out"
    >
      <g id="Layer_1">
        <path
          d="M111.5,80.3c-1.8-0.9-3-2.7-3-4.9V25c0-2.5-2-4.5-4.5-4.5c-0.3,0-0.6,0-0.9,0.1v34.4c0,1-0.8,1.8-1.8,1.8s-1.8-0.8-1.8-1.8
		V17.7c0-2.5-2-4.5-4.5-4.5c-2.5,0-4.5,2-4.5,4.5v3.2c0.4,0.3,0.9,0.6,1.2,1c1.5,1.5,2.4,3.6,2.4,5.8v27.2c0,1-0.8,1.8-1.8,1.8
		c-1,0-1.8-0.8-1.8-1.8V27.7c0-2.5-2-4.5-4.5-4.5s-4.5,2-4.5,4.5v39c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8V54
		c0-2.5-2-4.5-4.5-4.5c-2.5,0-4.5,2-4.5,4.5v24.5c0,6.3,3.6,11.8,8.8,14.5l45.7,21.8v-29L111.5,80.3z"
        />
      </g>
      <g id="H1">
        <circle cx="35.4" cy="30.7" r="8" />
        <path
          d="M62.1,64.7l-13.5-6.3L44.7,48l0,0c-1.5-3.6-4.8-6.4-8.9-7.1l-3.2-0.5c-3.4-0.6-6.7,0.3-9.2,2.2l-11.5,8l0,0
		c-0.8,0.5-1.3,1.3-1.5,2.3V53l0,0L7.5,69c-0.3,1.9,0.9,3.7,2.8,4s3.7-0.9,4-2.8L17,55.6c0,0,6.7-4.6,6.8-4.6l-4.5,25.5l-3.2,18.6
		L5.3,110.4c-1.5,2.2-1,5.3,1.2,6.9s5.3,1,6.9-1.2l11.4-16.2c0.5-0.6,0.7-1.3,0.8-2l0,0l2.6-14.6l8.7,12.4L40,114
		c0.5,2.7,3,4.5,5.7,4c2.7-0.5,4.5-3,4-5.7l-3.5-19.6c-0.2-0.8-0.5-1.4-0.9-2l0,0l-10-14.5l3.9-22.6l0,0l3.1,8.4l0,0
		c0.3,0.9,0.9,1.6,1.9,2h0.1l0,0l14.8,6.9c1.8,0.8,3.8,0.1,4.6-1.7C64.6,67.6,63.8,65.5,62.1,64.7z"
        />
      </g>
    </svg>
    <h1 class="text-4xl font-bold text-black mb-4 dark:text-white">
      Hold Your Horses,This is a Restricted Area
    </h1>
    <p class="text-2xl font-semibold text-gray-800 mb-8 dark:text-white">
      You do not have permission to view this page.
    </p>

    <div class="flex space-x-4">
      <!-- Go Back to Previous Page Button -->
      <button
        @click="goBack"
        class="px-6 py-3 bg-black rounded-full text-white hover:bg-gray-700 focus:outline-none"
      >
        Go Back
      </button>
      <!-- Go to Home Button -->
      <button
        @click="goHome"
        class="px-6 py-3 bg-black rounded-full text-white hover:bg-gray-700 focus:outline-none"
      >
        Go to Home
      </button>
    </div>
  </div>
</template>
