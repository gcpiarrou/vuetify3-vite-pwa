import { computed } from "vue";
import { useWindowWidth } from "Helpers/composables/useWindowWidth";

export const useMobile = () => {

    // Data initialization
    const { windowWidth } = useWindowWidth();

    return {
        isMobile : computed(()=> windowWidth.value < 1280),
    };
}
