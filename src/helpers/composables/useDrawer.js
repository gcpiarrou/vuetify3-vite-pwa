import { useStore } from 'vuex'
import { computed } from "vue";
import { useRouter, useRoute } from '@/vue-router'

export function useDrawer(){
    const store                 = useStore();

    const route                 = useRoute();
    const router                = useRouter();

    const parentRoute           = computed(() => route.matched[0]);
    const childrenRoutes        = computed(() => {
            let lastMatched = route.matched[route.matched.length-1];
            return lastMatched.children;
        }
    );
    const routesWithMeta = computed(() => router.options.routes.filter(x=>x.meta));

    function secondaryDrawerRoutes(mainRoute){
        if (!mainRoute) return {};
        return mainRoute.filter(x=>x.meta.visibleInDrawer);
    }

    const drawerIsOpen = computed({
        get: () => store.state.drawer.isOpen,
        set: (val) => {
            setDrawer(val)
        }
    });
    
    const openDrawer =  () => store.commit('openDrawer');
    const closeDrawer =  () => store.commit('closeDrawer');
    const toggleDrawer =  () => store.commit('toggleDrawer');
    const setDrawer = (val) => store.commit('setDrawer',val);

    return {
        drawerIsOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        parentRoute, 
        secondaryDrawerRoutes, 
        childrenRoutes, 
        routesWithMeta
    }
}
