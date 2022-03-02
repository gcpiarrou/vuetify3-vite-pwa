<template>

	<div class="text-center">
		<v-dialog :model-value="offlineReady || needRefresh">

			<v-card>
				<v-card-text>
					<h3 v-if="offlineReady"> The app is ready to work offline.</h3>
					<h3 v-else> New version available, touch Update to get the latest.</h3>
					<v-btn v-if="needRefresh" @click="updateServiceWorker()" color="success">Update</v-btn>
				</v-card-text>
				<v-card-actions>
					<v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
					<v-btn color="danger" block @click="dialog = false">Close Dialog</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>

</template>

<script lang="ts">

	import { defineComponent } from "vue";
	import {
		useRegisterSW
	} from "virtual:pwa-register/vue";
	const {
		updateServiceWorker
	} = useRegisterSW();
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