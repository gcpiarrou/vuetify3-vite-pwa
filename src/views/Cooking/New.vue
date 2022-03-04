<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="3">
                <v-text-field v-model="recipe.name" :counter="10" :rules="[v => !!v || 'Name is required']" label="Name" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="3">
                <v-file-input  @input="onFileInput" label="Image" filled prepend-icon="fas fa-camera"></v-file-input>
            </v-col>
        </v-row>
    </v-form>

    <v-btn color="success" @click="addRecipe">Add recipe</v-btn>

    <v-row class="mt-4">
        <v-col cols="12" sm="12" md="6" lg="3">
            <h4>Image preview</h4>
            <v-img :src="fileBase64.base64" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover></v-img>
        </v-col>
    </v-row>

    
</template>

<script setup lang="ts">
    import { v4 as uuidv4 } from "uuid";
    import { useStorage, useBase64 } from '@vueuse/core'
    import { ref } from '@vue/reactivity';
    import { useRouter } from 'vue-router';
    const router = useRouter()

    const file = ref();
    const fileBase64 = ref({base64:null});

    


    var recipes = useStorage('recipes', [])
    var recipe = ref({
        name: "",
        steps: [{}]
    });
    var valid = ref(true);


    const onFileInput = (e: Event) => {
        file.value = (e.target as HTMLInputElement).files![0];
        fileBase64.value = useBase64(file);
    }



    const addRecipe = () => {
        if (!valid) {
            console.log('error');
            return;
        }

        recipe.value = {
            id: uuidv4(),
            img: fileBase64.value.base64,
            ...recipe.value,
        }

        recipes.value.push(recipe.value);
        router.push({ name: 'cooking-show', params: { id: recipe.value.id } })

    }

    const deleteRecipe = (index) => {
        recipes.value.splice(index, 1);
    }
</script>