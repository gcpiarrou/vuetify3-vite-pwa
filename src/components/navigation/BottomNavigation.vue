<template>
    <v-app-bar position="bottom" v-if="width<1024">
        <div class="d-flex justify-space-around" style="width:100%">
            <slot> </slot>
        </div>
    </v-app-bar>
</template>

<script setup>
    import { useWindowSize } from '@vueuse/core'
    const { width } = useWindowSize()
</script>