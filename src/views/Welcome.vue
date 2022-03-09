<template>
  <v-container class="py-6 py-lg-12 text-center">
    <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">Welcome</h1>
    <h2 class="text-h6 text-sm-h5 secondary--text mt-4 w-full w-md-8-12 w-xl-half mx-auto">This project was made using Vuetify 3 Alpha, Vite, Vue Router, Vuex and Composition API.</h2>
    <div class="mt-4 d-flex flex-wrap justify-center">
      <v-col sm="12" md="8" lg="6" xl="4">
          <v-btn @click="toggleIsDark" block class="mb-2"><v-icon class="mr-2">{{isDark?'fas fa-sun':'fas fa-moon'}}</v-icon> Toggle theme</v-btn>
          <v-btn to="/cooking/index" block class="mb-2"><v-icon class="mr-2">fas fa-fire</v-icon>Go to Cooking app</v-btn>
          <v-btn to="/testing/toast-test" block class="mb-2"><v-icon class="mr-2">fas fa-bread-slice</v-icon>Go to Toasts testing</v-btn>
          <v-btn to="/testing/notification-test" block class="mb-2"><v-icon class="mr-2">fas fa-bell</v-icon>Go to Notifications testing</v-btn>
          <v-btn to="/testing/window-data" block class="mb-2"><v-icon class="mr-2">fas fa-desktop</v-icon>Go to Window data testing</v-btn>
          <v-btn to="/testing/misc-test" block class="mb-2"><v-icon class="mr-2">fas fa-briefcase</v-icon>Go to Misc testing</v-btn>
      </v-col>
      
    </div>
  </v-container>
</template>

<script setup>
    import { useAppTheme }    from "Helpers/composables/useAppTheme";
    const { isDark, toggleIsDark }    = useAppTheme();

</script>
