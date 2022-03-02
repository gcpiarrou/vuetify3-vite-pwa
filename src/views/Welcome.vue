<template>
  <v-container class="py-6 py-lg-12 text-center">
    <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">Welcome</h1>
    <h2 class="text-h6 text-sm-h5 secondary--text mt-4 w-full w-md-8-12 w-xl-half mx-auto">This project was made using Vuetify 3 Alpha, Vite, Vue Router, Vuex and Composition API.</h2>
    <div class="mt-4 d-flex justify-center">
      <v-btn @click="toggleIsDark"><v-icon class="mr-2">{{isDark?'fas fa-sun':'fas fa-moon'}}</v-icon> Toggle theme</v-btn>
    </div>
  </v-container>
</template>

<script setup>
    import { useAppTheme }    from "Helpers/composables/useAppTheme";
    const { isDark, toggleIsDark }    = useAppTheme();

</script>
