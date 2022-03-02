<template>

	<div class="text-center">
		<v-dialog :model-value="offlineReady || needRefresh" style="max-width:30em">
			<v-card>
				<v-card-text>
					<h3 v-if="offlineReady"> The app is ready to work offline.</h3>
					<h3 v-else><p>New version available</p> <p>Touch Update to upgrade the software</p></h3>
				</v-card-text>
				<v-card-actions class="flex-column">
					<v-btn v-if="needRefresh" @click="updateServiceWorker()" color="success" class="my-2">Update</v-btn>
					<v-btn @click="close" class="my-2">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>

</template>

<script lang="ts">

	import { defineComponent } from "vue";
	import { useRegisterSW } from "virtual:pwa-register/vue";
	const { updateServiceWorker } = useRegisterSW();
	export default defineComponent({
		name: "ReloadPWA",
		setup() {
			const {
				offlineReady,
				needRefresh,
				updateServiceWorker
			} = useRegisterSW();
			const close = async () => {
				offlineReady.value = false;
				needRefresh.value = false;
			};
			return {
				offlineReady,
				needRefresh,
				updateServiceWorker,
				close
			};
		},
		methods: {
			async close() {
				this.offlineReady.value = false;
				this.needRefresh.value = false;
			},
			async updateServiceWorker() {
				await updateServiceWorker();
			},
		},
	});
</script>