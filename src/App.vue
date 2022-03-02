<template>
	<v-app>
			
		<AppBar></AppBar>
		<Drawer></Drawer>
		<ReloadPWA></ReloadPWA>
		<v-main>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup>
	import AppBar from 'Components/navigation/AppBar.vue';
	import Drawer from 'Components/navigation/Drawer.vue';
	import ReloadPWA from 'Components/pwa/ReloadPWA.vue';
</script>
	components: { ReloadPWA },