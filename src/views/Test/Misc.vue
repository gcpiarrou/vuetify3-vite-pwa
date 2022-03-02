<template>

    <div class="d-flex flex-column align-center">
        <div>
            <h4 class="mt-5">Vibration</h4>
            <v-btn class="ma-2" @click="vibrate">Vibrate 200ms</v-btn>
            <v-btn class="ma-2" @click="vibrateWithPattern">Vibrate with pattern</v-btn>
            
            <h4 class="mt-5">Sharing</h4>
            <v-btn class="ma-2" @click="startShare">Share</v-btn>

            <h4 class="mt-5">TTS</h4>
            <v-btn class="ma-2" @click="play">Play TTS</v-btn>
        </div>
    </div>    

</template>


<script setup>
    import { ref } from "@vue/reactivity";
    import { useVibrate, useShare, useSpeechSynthesis } from '@vueuse/core';


    const { vibrate } = useVibrate({ pattern: [200] });
    const { vibrateWithPattern } = useVibrate({ pattern: [100,50,100,50,200] });
    const { share } = useShare()

    

    function startShare() {
        share({
            title: 'Hello',
            text: 'Hello my friend!',
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