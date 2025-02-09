// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/apollo",
    "@pinia/nuxt",
    "@primevue/nuxt-module",

    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
    "@pinia/nuxt",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "http://localhost:8083/v1/graphql",
        tokenStorage: "localStorage",
        authHeader: "Authorization",
        authType: "Bearer",
        tokenName: "authToken",
        httpLinkOptions: {
          headers: {
            "x-hasura-admin-secret": "myadminsecretkey",
          },
        },
      },
    },
  },
  build: {
    transpile: [/@nuxtjs[\\/]composition-api/],
  },
});
