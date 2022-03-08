<template>
    <v-container fluid>
        <div class="d-flex flex-column align-center">
            <v-col cols="12">
                <v-alert border="start" border-color="info" elevation="2" class="mb-4">
                    The window is {{ width }} x {{height}}px
                </v-alert>

                <v-alert border="start" border-color="info" elevation="2" class="my-4">
                    This screen is {{ isLargeScreen?'':'not' }} large
                </v-alert>

                <v-alert border="start" border-color="info" elevation="2" class="mt-4">
                    The preferred theme is {{ isPreferredDark?'':'not' }} dark
                </v-alert>
            </v-col>
            
        </div>
    </v-container>
</template>

<script setup>
    import { useWindowSize } from '@vueuse/core'
    import { useMediaQuery } from '@vueuse/core'

    const { width, height } = useWindowSize()
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')
    const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
</script>