<template>
	<v-app :theme="isDark?'dark':'light'" style="height:100vh;overflow-y:auto">
		<AppBar></AppBar>
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

    const { isDark }    = useAppTheme();
	const AppBar	= defineAsyncComponent(() => import("Components/navigation/AppBar.vue"));
	const Drawer	= defineAsyncComponent(() => import("Components/navigation/Drawer.vue"));
	const ReloadPWA	= defineAsyncComponent(() => import("Components/pwa/ReloadPWA.vue"));
	const Router	= defineAsyncComponent(() => import("Views/Router.vue"));

</script>