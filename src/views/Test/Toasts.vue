<template>

    <v-container fluid>
        <div class="d-flex flex-column align-center">
            <v-col cols="12" class="text-center">

                <v-text-field label="Toast text" v-model="text" hide-details variant="outlined" ></v-text-field>

                <v-btn class="ma-2 text-white" @click="defaultToast(text)"    color="#1976d2">Default Toast</v-btn>
                <v-btn class="ma-2 text-white" @click="successToast(text)"    color="#4caf50">Success Toast</v-btn>
                <v-btn class="ma-2 text-white" @click="infoToast(text)"       color="#2196f3">Info Toast</v-btn>
                <v-btn class="ma-2 text-white" @click="warningToast(text)"    color="#ffc107">Warning Toast</v-btn>
                <v-btn class="ma-2 text-white" @click="errorToast(text)"      color="#ff5252">Error Toast</v-btn>

            </v-col>
        </div>    
    </v-container>
</template>

<script setup>
    import { ref } from "@vue/reactivity";
    import { useToast } from "vue-toastification";

    const text = ref("This is the toast text");
    const toast = useToast();

    const successToast  = (text) => { toast.success(text); }
    const infoToast     = (text) => { toast.info(text); }
    const errorToast    = (text) => { toast.error(text); }
    const defaultToast  = (text) => { toast(text); }
    const warningToast  = (text) => { toast.warning(text); }
</script>