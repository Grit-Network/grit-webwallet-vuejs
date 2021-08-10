<template>
    <div>
        <div
            class="sidebar-background"
            :class="{ active: $store.state.navigation.sidebarExpand }"
            @click="$store.dispatch('navigation/toggleSidebar', false)"
        ></div>
        <div class="sidebar" :class="{ expand: $store.state.navigation.sidebarExpand }">
            <div
                v-for="(route, index) in $router.getRoutes()"
                :key="index"
                :class="[
                    'sidebar-item',
                    $route.matched.map(({ path }) => path).includes(route.path) ? 'active' : '',
                    !currentProfile ? 'un_click' : '',
                ]"
                @click="onPageNavigate(route)"
            >
                <inline-svg :src="route.meta.icon" class="sidebar-item-icon" />
                <!-- <div class="navigator-icon-container">
                <img :src="route.meta.icon" class="navigator-icon" />
            </div> -->

                <!-- <div class="navigator-text-container"> -->
                <div class="sidebar-title">
                    {{ $t(route.meta.title) }}
                </div>
                <!-- </div> -->
            </div>
            <!-- <div class="network-container">
            <PeerSelector />
        </div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { PageNavigatorTs } from './PageNavigatorTs';
import { Component } from 'vue-property-decorator';
import PeerSelector from '@/components/PeerSelector/PeerSelector.vue';
// @ts-ignore
@Component({
    components: { PeerSelector },
})
export default class PageNavigator extends PageNavigatorTs {}
</script>

<style scoped>
.sidebar {
    position: fixed;
    left: 0;
    top: 60px;
    display: flex;
    flex-direction: column;
    background-color: var(--clr-primary);
    height: calc(100vh - 60px);
    row-gap: 20px;
    padding: 0 20px;
    padding-top: 30px;
    width: 60px;
    overflow: hidden;
    z-index: 100;
    transition: 0.3s;
}

.sidebar.expand {
    width: 260px;
    box-shadow: 0 7px 20px 2px rgba(0, 0, 0, 0.25);
}

.sidebar-background {
    display: none;
    position: fixed;
    left: 0;
    top: 60px;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 99;
}

.sidebar-background.active {
    display: block;
}

.sidebar-item {
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 500;
    height: 40px;
    /* padding: 5px; */
    color: var(--clr-gray);
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
}

/deep/.sidebar-item path,
/deep/.sidebar-item .a {
    fill: var(--clr-gray);
    transition: 0.3s;
}

.sidebar-item.active,
.sidebar-item:hover {
    color: var(--clr-blue);
}

/deep/.sidebar-item.active .sidebar-item-icon path,
/deep/.sidebar-item:hover .sidebar-item-icon path,
/deep/.sidebar-item.active .sidebar-item-icon circle,
/deep/.sidebar-item:hover .sidebar-item-icon circle {
    fill: var(--clr-blue);
}

.sidebar-item-icon {
    position: relative;
    width: 18px;
    z-index: 10;
}

.sidebar-title {
    position: absolute;
    left: 40px;
}

@media screen and (min-width: 650px) {
    .sidebar {
        position: unset;
        height: auto;
    }

    .sidebar.expand {
        width: 200px;
        box-shadow: unset;
    }

    .sidebar-background,
    .sidebar-background.active {
        display: none;
    }
}

@media screen and (min-width: 960px) {
    .sidebar.expand {
        width: 290px;
    }
}
</style>
