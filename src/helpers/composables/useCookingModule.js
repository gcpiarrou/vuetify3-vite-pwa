import { v4 as uuidv4 } from "uuid";
import { useRecipeImages } 	from 'Helpers/images/useRecipeImages';
import { useStorage } 		from '@vueuse/core'

export function useCookingModule(){
    
    const recipes = useStorage('recipes', []);
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

    return {
        recipes,
        newRecipe
    }
}
