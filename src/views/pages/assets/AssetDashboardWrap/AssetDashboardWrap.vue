<template>
    <div class="panel h-full relative">
        <NavigationTabs direction="horizontal" :parent-route-name="parentRouteName" />

        <!-- <div class="flex justify-between p-1">
            <div class="flex gap-x-1.5">
                <router-link to="/mosaicList" tag="div" active-class="active" class="tab-link">OWNED MOSAICS</router-link>
                <router-link to="/createMosaic" tag="div" active-class="active" class="tab-link">CREATE NEW MOSAICS</router-link>
            </div>
        </div> -->

        <router-view />
    </div>
    <!-- <div class="dashboard-outer-container">
        <div class="dashboard-inner-container">
            <div class="header-container">
            </div>
            <div class="bottom-container">
                
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
// external dependencies
import { Component, Prop, Vue } from 'vue-property-decorator';
// child components
import NavigationTabs from '@/components/NavigationTabs/NavigationTabs.vue';

@Component({ components: { NavigationTabs } })
export default class AssetDashboardWrap extends Vue {
    @Prop({ default: 'mosaics' }) parentRouteName: string;
}
</script>

<style lang="less" scoped>
// @import './AssetDashboardWrap.less';
</style>

<style scoped>
</style>
