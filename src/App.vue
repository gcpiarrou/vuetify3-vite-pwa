<template>
	<v-app :theme="isDark?'dark':'light'" style="height:100vh;overflow-y:auto">
		<AppBar v-if="width>=1024"></AppBar>
		<Drawer></Drawer>
		<ReloadPWA></ReloadPWA>
		<v-main>
			<Router></Router>
		</v-main>
	</v-app>
</template>

<script setup>
	import { defineAsyncComponent } from "vue";
	import { useAppTheme }    from "Helpers/composables/useAppTheme";
    import { useWindowSize } from '@vueuse/core'


    const { isDark }    = useAppTheme()
    const { width } = useWindowSize()

	const AppBar			= defineAsyncComponent(() => import("Components/navigation/AppBar.vue"));
	const Drawer			= defineAsyncComponent(() => import("Components/navigation/Drawer.vue"));
	const ReloadPWA			= defineAsyncComponent(() => import("Components/pwa/ReloadPWA.vue"));
	const Router			= defineAsyncComponent(() => import("Views/Router.vue"));
	const BottomNavigation	= defineAsyncComponent(() => import("Components/navigation/BottomNavigation.vue"));


</script>