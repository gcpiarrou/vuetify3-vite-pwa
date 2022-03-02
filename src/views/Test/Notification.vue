<template>
    <div class="d-flex flex-column align-center">
        <div>

            <v-text-field label="Notification title" v-model="text" hide-details variant="outlined" ></v-text-field>

            <v-btn class="ma-2" @click="persistentNotification" v-if="notificationPermission==='granted'">Persistent notification</v-btn>
            <v-btn class="ma-2" @click="showNotifcation">Show notification</v-btn>
        </div>
    </div>    
</template>

<script setup>

    import { ref } from "@vue/reactivity";
    import { onMounted } from "@vue/runtime-core";
    import { useWebNotification } from '@vueuse/core';

    const text = ref("This is the notification title");

    

    const showNotifcation = () => {
        let { isSupported, show } =  useWebNotification({
            title: text.value,
            dir: 'auto',
            lang: 'en',
            renotify: true,
            tag: 'test',
        });

        if (isSupported) {
            show();
        }else{
            alert('Web notifications unavailable');
        }
    }

    const serviceWorker = ref(null);

    onMounted(async () =>   {
        let sw = await navigator.serviceWorker.getRegistration();
        serviceWorker.value = sw;
    })
    
    const notificationPermission = ref(Notification.permission);

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
</script>