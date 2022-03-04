<template>
    <div>
        <v-row class="flex-column-reverse flex-sm-row">
            <v-col cols="12" xs="12" sm="8" md="8">
                <div class="d-flex justify-space-between">
                    <v-text-field v-model="recipe.name" v-if="editable" class="mr-3" label="Recipe name" variant="outlined" hide-details="auto"></v-text-field>
                    <h1 v-else>{{recipe.name}}</h1>
                    <v-btn color="info" @click="editable = true" v-if="!editable">Edit</v-btn>
                    <v-btn color="success" @click="editable = false" v-if="editable">Stop editing</v-btn>
                </div>

                <div v-if="!editable" class="my-4">
                    <div v-for="(step,i) in recipe.steps" :key="i">
                        <v-divider class="my-3"></v-divider>
                        <div class="d-flex justify-space-between">
                            <h3>{{step.name}}</h3>
                            <v-rating
                                v-model="step.heat"
                                v-if="step.heat"
                                empty-icon="fas fa-minus"
                                full-icon="fas fa-fire-alt"
                                readonly
                                hover
                                size="x-small"
                            ></v-rating>
                        </div>
                        <p>{{step.body}}</p>
                    </div>
                </div>

                <div v-if="editable" class="my-4">
                    <div v-for="(step,i) in recipe.steps" :key="i">
                        <v-divider class="my-3"></v-divider>
                        <v-row>
                            
                            <v-col cols="12" sm="6" lg="8">
                                <v-text-field v-model="step.name" class="mt-3" label="Step name" variant="outlined" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" lg="4" class="d-flex flex-wrap align-center justify-space-around">
                                <v-rating
                                    v-model="step.heat"
                                    empty-icon="fas fa-minus"
                                    full-icon="fas fa-fire-alt"
                                    hover
                                    size="x-small"
                                ></v-rating>
                                <v-btn color="warning" @click="step.heat=0" size="small">Delete heat data</v-btn>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="step.body" class="mt-3" label="Step body" variant="outlined" hide-details="auto"></v-text-field>
                            </v-col>
                            
                        </v-row>

                        
                    </div>
                    
                </div>
                
                <div v-if="editable" class="mt-4 text-center">
                    <v-btn color="success" @click="addStep">Add new step</v-btn>
                </div>


            </v-col>
            <v-col cols="12" xs="12" sm="4" md="4">
                <v-img :src="recipe.img" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover></v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import { ref } from '@vue/reactivity';
    import { useStorage } from '@vueuse/core';
    import { useRoute } from 'vue-router';

    const route = useRoute()
	var recipes = useStorage('recipes', []);
    const editable = ref(false);
    const newStep = ref({name:'',body:''});
    const recipe = ref();

    recipe.value = recipes.value.filter(x=> x.id==route.params.id)[0];

    const addStep = () =>{
        recipe.value.steps = [...recipe.value.steps, {name:'',body:''}]
    }

</script>