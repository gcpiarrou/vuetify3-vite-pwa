<template>

    <div class="d-flex flex-column align-center">
        <v-col cols="12">
            <h4 class="mt-5">Vibration</h4>
            <v-btn class="ma-2" @click="vibrate(200)">Vibrate 200ms</v-btn>
            <v-btn class="ma-2" @click="vibrateWithPattern()">Vibrate with pattern</v-btn>
            
            <h4 class="mt-5">Sharing</h4>
            <v-btn class="ma-2" @click="startShare">Share</v-btn>

            <h4 class="mt-5">TTS</h4>
            <v-btn class="ma-2" @click="play">Play TTS</v-btn>
        </v-col>
    </div>    

</template>


<script setup>
    import { ref } from "@vue/reactivity";
    import { useVibrate, useShare, useSpeechSynthesis } from '@vueuse/core';


    const vibrate = (time) => {
        const  { vibrate }  = useVibrate({ pattern: [200] });
        vibrate();
    }

    const vibrateWithPattern = () => {
        const  { vibrate }  = useVibrate({ pattern: [100,50,100,50,200] });
        vibrate();
    }

    const { share } = useShare();

    function startShare() {
        share({
            title: 'Hi, check this app!',
            text: "It's really nice",
            url: location.href,
        })
    }

    

    const lang = ref('en-US')
    const text = ref('Hi there! This is a text to speech test!')
    const speech = useSpeechSynthesis(text, {
        lang,
    })

    const play = () => {
        if (speech.status.value === 'pause') {
            console.log('resume')
            window.speechSynthesis.resume()
        }
        else {
            speech.speak()
        }
    }



</script>