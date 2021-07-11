<template>
    <div class="sidebar">
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
            <div>{{ $t(route.meta.title) }}</div>
            <!-- </div> -->
        </div>
        <!-- <div class="network-container">
            <PeerSelector />
        </div> -->
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
<style lang="less" scoped>
// @import './PageNavigator.less';
</style>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    width: 260px;
}

.sidebar-item {
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 5px;
    color: var(--clr-gray);
    font-size: 14px;
    cursor: pointer;
    margin: 10px 20px;
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
    margin-right: 15px;
    width: 18px;
}
</style>
