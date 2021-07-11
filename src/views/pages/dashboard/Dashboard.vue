<template>
    <div class="dashboard">
        <div class="flex">
            <div
                :class="[
                    {
                        top_account_address: true,
                        radius: true,
                        grayed: isCosignatoryMode,
                        purpled: !isCosignatoryMode,
                        'xym-outline': true,
                    },
                    'address-panel',
                ]"
            >
                <img src="@/assets/images/logo-favicon-white.png" class="address-panel-image" />

                <div class="address-panel-content">
                    <div class="uppercase font-semibold">{{ $t('address') }}</div>
                    <div class="flex justify-between items-center mb-1">
                        <div>{{ currentSignerAddress.pretty() }}</div>
                        <div class="flex-shrink-0 ml-1">
                            <ButtonCopyToClipboard :value="currentSignerAddress.plain()" type="icon-white" />
                        </div>
                    </div>
                    <div class="flex-grow" />
                    <div class="font-semibold">GRIT BALANCE</div>
                    <MosaicAmountDisplay :absolute-amount="absoluteBalance" :size="'biggest'" class="font-bold" />
                </div>
            </div>

            <NetworkStatisticsPanel />
        </div>

        <div class="flex flex-grow mt-1.5">
            <div class="assets">
                <Spin v-if="!balanceMosaics.length" size="large" fix class="absolute" />
                <MosaicBalanceList />
            </div>

            <div class="flex flex-grow panel ml-1.5 right-bottom-panel">
                <NavigationTabs direction="horizontal" :parent-route-name="parentRouteName" />
                <div class="navigation-content">
                    <router-view :key="$route.fullPath" />
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="dashboard-container">
        <ProfileBalancesPanel />
        <div class="dashboard-right-outer-container">
            <div class="dashboard-right-container">
                <NetworkStatisticsPanel />
                <div class="right-bottom-container">
                    <NavigationTabs direction="horizontal" :parent-route-name="parentRouteName" />
                    <div class="radius bottom_router_view">
                        <router-view :key="$route.fullPath" />
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
// @ts-ignore
import { DashboardTs } from './DashboardTs';
export default class Dashboard extends DashboardTs {}
</script>
<style lang="less" scoped>
// @import './Dashboard.less';
</style>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.address-panel {
    display: flex;
    align-items: flex-end;
    background-image: linear-gradient(0deg, #0032bd 0%, #0d7ee1 81%, #0f87e5 100%);
    border-radius: 4px;
    box-shadow: 0px 0px 15px #00000080;
    width: 38%;
    max-width: 600px;
}

.address-panel-image {
    width: 22%;
}

.address-panel-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 15px 25px;
    padding-bottom: 0;
}

.assets {
    display: flex;
    flex-direction: column;
    width: 26%;
}

.navigation-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.right-bottom-panel {
    min-height: 500px;
}
</style>
