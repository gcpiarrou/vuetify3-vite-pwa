<template>

<v-alert border="start" border-color="deep-purple accent-4" elevation="2" class="my-4">
    The window width is {{ windowWidth }} px
</v-alert>

<v-alert border="start" border-color="deep-purple accent-4" elevation="2" class="my-4">
    This window is {{ isMobile?'':'not' }} mobile
</v-alert>

</template>

<script setup>
    import { useWindowWidth } from "Helpers/composables/useWindowWidth";
    import { useMobile } from "Helpers/composables/useMobile";
    import { ref } from "@vue/reactivity";

    const { windowWidth } = useWindowWidth();
    const { isMobile } = useMobile();
    const dialog = ref(true);
</script>