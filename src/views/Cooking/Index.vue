<template>

	<v-container fluid>
		<v-row dense>
			<v-col v-for="item in recipes" :key="item.id" cols="12" xs="12" sm="6" md="4" lg="3">
				<RecipeCard :item="item"></RecipeCard>
			</v-col>
		</v-row>
	</v-container>

	<bottom-navigation>
		<template v-slot>
            <v-btn icon="fas fa-home" to="/"></v-btn>
            <v-btn icon="fas fa-plus" @click="newRecipe"></v-btn>
		</template>
	</bottom-navigation>
	
</template>

<script setup>
	import RecipeCard from 'Components/cooking/RecipeCard.vue';

	import { defineAsyncComponent } from "vue";
	const BottomNavigation	= defineAsyncComponent(() => import("Components/navigation/BottomNavigation.vue"));

	import { useCookingModule } from 'Helpers/composables/useCookingModule.js';
	const {recipes, newRecipe} = useCookingModule();

</script>