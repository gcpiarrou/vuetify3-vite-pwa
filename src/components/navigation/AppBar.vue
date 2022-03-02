<template>
    <v-app-bar color="primary" app>
        <v-app-bar-nav-icon variant="text" @click="toggleDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Test</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn variant="text" :icon="isDark?'fas fa-sun':'fas fa-moon'" @click="toggleIsDark"></v-btn>
            <v-btn variant="text" icon="fas fa-ellipsis-v"></v-btn>
            
    </v-app-bar>
</template>

<script setup>

    import { useDrawer }    from "Helpers/composables/useDrawer";
    import { useAppTheme }    from "Helpers/composables/useAppTheme";
    const { toggleDrawer }    = useDrawer();
    const { isDark, toggleIsDark }    = useAppTheme();

</script>