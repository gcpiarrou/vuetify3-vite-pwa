<template>

    <div class="d-flex flex-column align-center">
        <div>
            <h4 class="mt-5">Vibration</h4>
            <v-btn class="ma-2" @click="vibrate">Vibrate 200ms</v-btn>
            <v-btn class="ma-2" @click="vibrateWithPattern">Vibrate with pattern</v-btn>
            
            <h4 class="mt-5">Notification</h4>
            <v-btn class="ma-2" @click="persistentNotification" v-if="notificationPermission==='granted'">Persistent notification</v-btn>
            <v-btn class="ma-2" @click="showNotifcation">Show notification</v-btn>
            
            <h4 class="mt-5">Sharing</h4>
            <v-btn class="ma-2" @click="startShare">Share</v-btn>

            <h4 class="mt-5">Toasts</h4>
            <v-btn class="ma-2" @click="successToast">Success Toast</v-btn>
            <v-btn class="ma-2" @click="infoToast">Info Toast</v-btn>
            <v-btn class="ma-2" @click="errorToast">Error Toast</v-btn>
            <v-btn class="ma-2" @click="defaultToast">Default Toast</v-btn>
            <v-btn class="ma-2" @click="warningToast">Warning Toast</v-btn>
        </div>
        

    </div>    

</template>


<script setup>
    import { ref } from "@vue/reactivity";
    import { onMounted } from "@vue/runtime-core";
    import { useToast } from "vue-toastification";
    import { useVibrate, useShare, useWebNotification } from '@vueuse/core';

    const toast = useToast();

    const { vibrate } = useVibrate({ pattern: [200] });
    const { vibrateWithPattern } = useVibrate({ pattern: [100,50,100,50,200] });
    const { share } = useShare()

    const { isSupported, show, } =  useWebNotification({
                                        title: 'Hello, VueUse world!',
                                        dir: 'auto',
                                        lang: 'es',
                                        renotify: true,
                                        tag: 'test',
                                    })

    const showNotifcation = () => {
        if (isSupported) {
            show()
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

    function startShare() {
        share({
            title: 'Hello',
            text: 'Hello my friend!',
            url: location.href,
        })
    }

    const successToast  = () => { toast.success("This is a success toast"); }
    const infoToast     = () => { toast.info("This is an info toast"); }
    const errorToast    = () => { toast.error("This is a error toast"); }
    const defaultToast  = () => { toast("This is a default toast"); }
    const warningToast  = () => { toast.warning("This is a warning toast"); }



</script>