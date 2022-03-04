<template>

	<v-container fluid>
		<v-row dense>
			<v-col cols="12" class="text-center">
				<v-btn color="success" @click="newRecipe">New recipe</v-btn>
			</v-col>
			<v-col v-for="item in recipes" :key="item.id" cols="12" xs="12" sm="6" md="4" lg="3">
				<v-card>
					<v-img :src="item.img" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
						<v-card-title class="text-white" v-text="item.name"></v-card-title>
					</v-img>

					<v-card-actions>
						<v-spacer></v-spacer>

						<v-btn size="small" color="surface-variant" variant="text" icon="fas fa-heart"></v-btn>

						<v-btn size="small" color="surface-variant" variant="text" icon="fas fa-bookmark"></v-btn>

						<v-btn color="info" :to="{name:'cooking-show', params:{id:item.id}}">Read</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>

</template>

<script setup>
	import { useStorage } from '@vueuse/core'
    import { v4 as uuidv4 } from "uuid";
	import {useRecipeImages} from 'Helpers/images/useRecipeImages';

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