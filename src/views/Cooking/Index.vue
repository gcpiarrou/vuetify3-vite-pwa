<template>

	<v-container fluid>
		<v-row dense>
			<v-col v-for="item in recipes" :key="item.id" cols="12" xs="12" sm="6" md="4" lg="3">
				<RecipeCard :item="item"></RecipeCard>
			</v-col>
		</v-row>
	</v-container>

	<v-fab-transition>
                <v-btn
                    class="rounded-pill ma-5"
                    style="position:fixed;z-index:10"
                    bottom
                    right
                    color="success"
					@click="newRecipe"
                >
                    <v-icon>fas fa-plus</v-icon>
                </v-btn>
            </v-fab-transition>

</template>

<script setup>
	import { useStorage } from '@vueuse/core'
    import { v4 as uuidv4 } from "uuid";
	import {useRecipeImages} from 'Helpers/images/useRecipeImages';
	import RecipeCard from 'Components/cooking/RecipeCard.vue';

	var recipes = useStorage('recipes', []);

	const {defaultImage} = useRecipeImages();

	const newRecipe = () =>{

		recipes.value = [
			...recipes.value,
			{
				id: uuidv4(),
				name:'New recipe',
				img: defaultImage,
				steps:[]
			}
		]
	}

</script>