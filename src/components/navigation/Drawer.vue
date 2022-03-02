<template>
    <v-navigation-drawer v-model="drawerIsOpen" app>
        <v-list density="compact" v-for="mainRoute in routesWithMeta" :key="mainRoute.path">
            <v-list-subheader>{{mainRoute.meta.parentText}}</v-list-subheader>
            <v-list-item :to="mainRoute.path" v-if="mainRoute.meta.visibleInDrawer">
                <v-list-item-avatar class="d-flex justify-center px-2">
                    <v-icon :icon="mainRoute.meta.icon" class="text-center"></v-icon>
                </v-list-item-avatar>
                <v-list-item-title v-text="mainRoute.meta.text" class="pl-2"></v-list-item-title>
            </v-list-item>
            <v-list-item
                v-for="secondaryRoute in secondaryDrawerRoutes(mainRoute.children)"
                :key="secondaryRoute.path"
                :to="mainRoute.path+secondaryRoute.path"
            >
                <v-list-item-avatar class="d-flex justify-center px-2">
                    <v-icon :icon="secondaryRoute.meta.icon" class="text-center"></v-icon>
                </v-list-item-avatar>
                <v-list-item-title v-text="secondaryRoute.meta.text" class="pl-2"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
    import { useDrawer }    from "Helpers/composables/useDrawer";
    const { drawerIsOpen, routesWithMeta, secondaryDrawerRoutes}    = useDrawer();
</script>