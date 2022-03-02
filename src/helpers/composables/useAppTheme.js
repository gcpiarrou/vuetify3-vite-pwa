import { computed } from "vue";
import { useStore } from 'vuex'




export function useAppTheme(){
    
    const store = useStore();
    const isDark           = computed(() => store.state.app.isDark);
    const setTheme = (val) => store.commit('setTheme',val);

    const toggleIsDark = () => {
        setTheme(!isDark.value);
    }

    return {
        isDark,
        toggleIsDark
    }
}
