<template>

    <div class="d-flex flex-column align-center">
        <div class="d-flex flex-column">
            <v-btn class="ma-2" @click="vibrate">Vibrate 200ms</v-btn>
            <v-btn class="ma-2" @click="vibrateWithPattern">Vibrate with pattern</v-btn>
            <v-btn class="ma-2" @click="requestNotificationPermission">Request notification permission</v-btn>
            <v-btn class="ma-2" @click="nonPersistentNotification" v-if="!isMobile">Non persistent notification</v-btn>
            <v-btn class="ma-2" @click="persistentNotification">Persistent notification</v-btn>
            <v-btn class="ma-2" @click="share">Share</v-btn>
            <v-btn class="ma-2" @click="intent">Intent</v-btn>
        </div>
        

        <span>Notification permissions: {{notificationPermission}}</span>
    </div>    

</template>


<script setup>
    import { useWindowWidth } from "Helpers/composables/useWindowWidth";
    import { useMobile } from "Helpers/composables/useMobile";
    import { ref } from "@vue/reactivity";
    import { onMounted } from "@vue/runtime-core";

    const { windowWidth } = useWindowWidth();
    const { isMobile } = useMobile();

    const vibrate = () => navigator.vibrate(200);
    const vibrateWithPattern = () => navigator.vibrate([100,50,100,50,200]);

    const requestNotificationPermission = () => {
        if (!('Notification' in window)) {
            alert('Notification API not supported!');
            return;
        }
        
        Notification.requestPermission();
    };

    const notificationPermission = ref(Notification.permission);
    
    const nonPersistentNotification = () => {
        new Notification("Hi there - non-persistent!")
    };

    const serviceWorker = ref(null);

    onMounted(async () =>   {
                                let sw = await navigator.serviceWorker.getRegistration();
                                serviceWorker.value = sw;
                            })
    

    const persistentNotification = () => {
        if(notificationPermission.value === 'granted'){
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification('Vibration Sample', {
                body: 'Buzz! Buzz!',
                icon: './img/icons/favicon-32x32.png',
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: 'vibration-sample'
                });
            });
        }else{
            try {
                navigator.serviceWorker.getRegistration()
                .then((reg) => reg.showNotification("Hi there - persistent!"))
                .catch((err) => alert('Service Worker registration error: ' + err));
            } catch (err) {
                alert('Notification API error: ' + err);
            }
        }
    }

    const share = () => {
        if (!("share" in navigator)) {
            alert('Web Share API not supported.');
            return;
        }

        navigator.share({
            title: 'Vue 3 Tailwind Vite Project',
            text: 'A public testing playground',
            url: 'https://gcpiarrou.github.io/vue3-tailwind-vite-project/'
            })
            .then(() => console.log('Successful share'))
            .catch(error => console.log('Error sharing:', error));
    }

    const intent = () => {
        if (!("Intent" in window)) {
            alert('Web Intents API not supported.');
            return;
        }

        var intent = new Intent('https://gcpiarrou.github.io/vue3-tailwind-vite-project/');
        navigator.startActivity(intent, function () {
            console.log('Successful share')
        }, function (error) {
            console.log('Error sharing:', error);
        });
    }


</script>