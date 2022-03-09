<template>
        <div class="d-flex flex-columns flex-wrap ma-0">

            <v-btn 
                icon="fas fa-arrow-left" 
                text-color="white" 
                color="rgba(255, 255, 255, 0)" 
                elevation="0" 
                position="fixed" 
                top 
                left 
                style="z-index:10"
                @click="router.back()"
            ></v-btn>

            <v-col v-if="editable" cols="12" sm="12" class="d-flex flex-wrap">
                <v-col cols="12" xs="12" sm="12" md="8">
                    
                    <div class="d-flex justify-space-between">                    
                        <v-text-field v-model="recipe.name" label="Recipe name" variant="outlined" hide-details="auto"></v-text-field>
                    </div>

                    <div class="my-4">

                        <v-expansion-panels>
                            <v-expansion-panel
                                v-for="(step,i) in recipe.steps" :key="i"
                            >
                                <v-expansion-panel-title>
                                    {{step.name}}
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div class="d-flex flex-wrap">
                                    
                                        <v-col cols="12" class="d-flex flex-wrap align-center justify-space-around">
                                            <v-rating
                                                v-model="step.heat"
                                                v-if="step.heat"
                                                empty-icon="fas fa-minus"
                                                full-icon="fas fa-fire-alt"
                                                hover
                                                size="x-small"
                                            ></v-rating>
                                            <v-btn v-if="step.heat" color="warning" @click="step.heat=0" size="small">
                                                <v-icon>fas fa-minus</v-icon> <v-icon>fas fa-fire-alt</v-icon> 
                                            </v-btn>
                                            <v-btn v-if="!step.heat" class="d-flex align-center" color="success" @click="step.heat=1" size="small">
                                                <v-icon>fas fa-plus</v-icon> <v-icon>fas fa-fire-alt</v-icon> 
                                            </v-btn>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field v-model="step.name" class="mt-3" label="Step name" variant="outlined" hide-details="auto"></v-text-field>
                                        </v-col>
                                        
                                        <v-col cols="12">
                                            <v-textarea
                                                variant="outlined"
                                                label="Step body"
                                                v-model="step.body"
                                                hide-details="auto"
                                            ></v-textarea>
                                        </v-col>

                                        <v-col class="text-right">
                                            <OnLongPress as="button" class="ml-2 button small" @trigger="deleteStep(i)" @click="showDeleteStepMessage">
                                                <v-btn color="warning"><v-icon>fas fa-trash</v-icon></v-btn>
                                            </OnLongPress>
                                        </v-col>
                                        
                                        
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <div class="mt-4 text-center" v-if="false">
                            <v-btn color="success" @click="addStep">Add new step</v-btn>
                        </div>
                        
                    </div>

                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4">
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                Image
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-file-input class="my-2" @input="onFileInput" label="Change image" filled prepend-icon="fas fa-camera" variant="outlined" hide-details="auto"></v-file-input>
                                <v-img :src="recipe.img" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover></v-img>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                Delete recipe
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="text-center">
                                <h4>Pressing this button will delete this recipe. This action cannot be undone.</h4>
                                <OnLongPress as="button" class="ml-2 button small" @trigger="deleteRecipe" @click="showDeleteRecipeMessage">
                                    <v-btn color="warning"><v-icon>fas fa-trash</v-icon></v-btn>
                                </OnLongPress>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-col>

            
            <v-col v-else cols="12" sm="12" class="pa-0">
                <v-img :src="recipe.img" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" width="100vw" height="300px" cover>
                    <v-card-title class="text-white text-h4" v-text="recipe.name"></v-card-title>
                </v-img>

                <v-container style="margin:inherit">
                    <div class="mb-4 px-4" style="width:100%">
                        <div v-for="(step,i) in recipe.steps" :key="i">
                            <v-divider class="my-3"></v-divider>
                            <div class="d-flex justify-space-between align-center">
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
                            <p style="white-space: break-spaces;">{{step.body}}</p>
                        </div>
                    </div>
                </v-container>

                

                
                
            </v-col>

            <v-fab-transition v-if="false">
                    <v-btn
                        v-show="!editable"
                        class="rounded-pill ma-5"
                        style="position:fixed;z-index:10;bottom:64px"
                        bottom
                        right
                        fab
                        color="info" @click="editable = true"
                    >
                        <v-icon>fas fa-edit</v-icon>
                    </v-btn>
            </v-fab-transition>

            <v-fab-transition v-if="false">
                <v-btn
                    v-show="editable"
                    class="rounded-pill ma-5"
                    style="position:fixed;z-index:10;bottom:64px"
                    bottom
                    right
                    fab
                    color="success" @click="editable = false"
                >
                    <v-icon>fas fa-save</v-icon>
                </v-btn>
            </v-fab-transition>

            <v-dialog v-model="newStepDialog">
                <v-card>
                    <v-card-title primary-title>
                        New step
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Step name"
                            variant="outlined"
                            v-model="newStep.name"
                        ></v-text-field>
                        <v-textarea
                            variant="outlined"
                            label="Step body"
                            v-model="newStep.body"
                            hide-details="auto"
                            density="compact"
                            auto-grow
                            rows="2"
                        ></v-textarea>
                        <div class="my-2 d-flex align-center justify-center">
                            <v-rating
                                v-model="newStep.heat"
                                v-if="newStep.heat"
                                empty-icon="fas fa-minus"
                                full-icon="fas fa-fire-alt"
                                hover
                                size="x-small"
                            ></v-rating>
                            <v-btn v-if="newStep.heat" color="warning" @click="newStep.heat=0" size="small">
                                <v-icon>fas fa-trash</v-icon> <v-icon>fas fa-fire-alt</v-icon> 
                            </v-btn>
                            <v-btn v-if="!newStep.heat" class="d-flex align-center" color="success" @click="newStep.heat=1" size="small">
                                <v-icon>fas fa-plus</v-icon> <v-icon>fas fa-fire-alt</v-icon> 
                            </v-btn>
                        </div>
                        
                    </v-card-text>
                    <v-card-actions class="d-flex flex-wrap justify-space-between">
                        <v-btn variant="text" @click="newStepDialog = false">Close</v-btn>
                        <v-btn color="success" @click="addStep">Add step</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <bottom-navigation>
                <template v-slot>
                    <v-btn text-color="success" icon="fas fa-plus" @click="newStepDialog=true"></v-btn>
                    <v-btn :text-color="editable?'success':'info'" :icon="editable?'fas fa-save':'fas fa-edit'" @click="editable = !editable"></v-btn>
                </template>
            </bottom-navigation>

            
        </div>
</template>

<script setup lang="ts">
    import { ref } from '@vue/reactivity';
    import { useStorage, useBase64, debouncedWatch } from '@vueuse/core';
    import { useRoute, useRouter } from 'vue-router';
    import { OnLongPress } from '@vueuse/components';
    import { useToast } from "vue-toastification";
    
    import { defineAsyncComponent } from "vue";
    const BottomNavigation	= defineAsyncComponent(() => import("Components/navigation/BottomNavigation.vue"));


    const toast = useToast();
    const file = ref();
    const fileBase64 = ref({base64:null});

    const route = useRoute();
    const router = useRouter();

	var recipes = useStorage('recipes', []);
    const editable = ref(false);
    const newStep = ref({name:'',body:''});
    const newStepDialog = ref(false);
    const recipe = ref();

    recipe.value = recipes.value.filter(x=> x.id==route.params.id)[0];

    const addStep = () =>{
        recipe.value.steps = [...recipe.value.steps, newStep.value];
        newStep.value={name:null,body:null};
        newStepDialog.value=false;
    }
    const onFileInput = (e: Event) => {
        file.value = (e.target as HTMLInputElement).files![0];
        fileBase64.value = useBase64(file);
        
    }

    debouncedWatch(
        fileBase64,
        () => { recipe.value.img = fileBase64.value.base64 },
        { debounce: 1000 }
    )

    const deleteStep = (index) => {
        recipe.value.steps.splice(index, 1);
    }

    const showDeleteStepMessage = () => {
        toast.info('Press the button for 1 second to delete the step');
    }

    const showDeleteRecipeMessage = () => {
        toast.info('Press the button for 1 second to delete the recipe');
    }

    const deleteRecipe = () => {
        recipes.value = recipes.value.filter(x=>x.id!=recipe.value.id);
        router.push({ name: 'cooking-index' })
    }

</script>