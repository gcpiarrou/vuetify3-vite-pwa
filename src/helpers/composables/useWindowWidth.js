    import throttle from "lodash/throttle";
    import { useEventListener } from 'Helpers/composables/useEventListener.js';
    import { ref } from 'vue';

    export function useWindowWidth(){

        // Data initialization
        const windowWidth = ref(window.innerWidth);

        // Methods
        const calculateWindowWidth = () => {
            windowWidth.value = window.innerWidth;
        };

        const calculateWindowWidthThrottled = throttle(calculateWindowWidth, 200);

        // Computed
        useEventListener(window, 'resize', calculateWindowWidthThrottled);
        
        // Data export
        
        return {windowWidth};
    }
