<template>
    <div class="panel flex-grow">
        <div v-if="!isEditionMode">
            <div class="title">
                {{ $t('assets') }}
                <!-- <img
                    slot="extra"
                    class="asset_list pointer"
                    src="@/views/resources/img/monitor/monitorAssetListPurple.svg"
                    @click="isEditionMode = true"
                /> -->
            </div>
            <div class="rows px-1">
                <div v-for="(entry, index) in filteredBalanceEntries" :key="index" class="row">
                    <img v-if="entry.id.equals(networkMosaic)" src="@/assets/images/logo-favicon.png" alt />
                    <img v-else src="@/assets/images/logo-favicon.png" />

                    <div class="flex-grow">{{ entry.name !== '' ? entry.name : entry.id.toHex() }}</div>
                    <div class="pl-0.5 min-w-0 truncate">
                        <MosaicAmountDisplay :id="entry.id" :absolute-amount="entry.amount" :size="'normal'" />
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="searchMosaic secondary_page_animate">
            <img
                src="@/views/resources/img/monitor/monitorLeftArrow.png"
                class="asset_setting_tit pointer"
                alt
                @click="isEditionMode = false"
            />
            <div class="mosaicList">
                <div class="toggle_all_checked">
                    <span @click="toggleMosaicDisplay()">
                        <img
                            class="toggle-mosaic-display-icon"
                            :src="areAllMosaicsShown() ? dashboardImages.selected : dashboardImages.unselected"
                        />
                        {{ areAllMosaicsShown() ? $t('uncheck_all') : $t('select_all') }}
                    </span>
                </div>
                <div class="mosaic-data-list">
                    <div
                        v-for="(entry, index) in allBalanceEntries"
                        :key="index"
                        :class="['mosaic_data', index === 0 ? 'padding_top_0' : '']"
                        class="mosaic_data pointer"
                        @click="toggleMosaicDisplay(entry.id)"
                    >
                        <span class="namege_img">
                            <img
                                class="small_icon"
                                :src="isMosaicHidden(entry.id) ? dashboardImages.unselected : dashboardImages.selected"
                            />
                            <img v-if="entry.id.equals(networkMosaic)" src="@/views/resources/img/symbol/XYMCoin.png" class="mosaicIcon" />
                            <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="mosaicIcon grayed-xym-logo" />
                        </span>
                        <span class="mosaic_name">
                            {{ entry.name }}
                        </span>
                        <span class="mosaic_value">
                            <MosaicAmountDisplay :id="entry.id" :absolute-amount="entry.amount" :size="'normal'" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="mosaics-list-container">
        <Tabs v-if="!isEditionMode" size="small">
            <TabPane :label="$t('assets')" name="name1">
                <div class="mosaicList secondary_page_animate">
                    <div v-for="(entry, index) in filteredBalanceEntries" :key="index" class="mosaic_data">
                        <span class="img_container">
                            <img v-if="entry.id.equals(networkMosaic)" src="@/views/resources/img/symbol/XYMCoin.png" alt />
                            <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="grayed-xym-logo" />
                        </span>
                        <span class="mosaic_name">{{ entry.name !== '' ? entry.name : entry.id.toHex() }}</span>
                        <span class="mosaic_value">
                            <MosaicAmountDisplay :id="entry.id" :absolute-amount="entry.amount" :size="'normal'" />
                        </span>
                    </div>
                </div>
            </TabPane>
            <img
                slot="extra"
                class="asset_list pointer"
                src="@/views/resources/img/monitor/monitorAssetListPurple.svg"
                @click="isEditionMode = true"
            />
        </Tabs>
        <div v-else class="searchMosaic secondary_page_animate">
            <img
                src="@/views/resources/img/monitor/monitorLeftArrow.png"
                class="asset_setting_tit pointer"
                alt
                @click="isEditionMode = false"
            />
            <div class="mosaicList">
                <div class="toggle_all_checked">
                    <span @click="toggleMosaicDisplay()">
                        <img
                            class="toggle-mosaic-display-icon"
                            :src="areAllMosaicsShown() ? dashboardImages.selected : dashboardImages.unselected"
                        />
                        {{ areAllMosaicsShown() ? $t('uncheck_all') : $t('select_all') }}
                    </span>
                </div>
                <div class="mosaic-data-list">
                    <div
                        v-for="(entry, index) in allBalanceEntries"
                        :key="index"
                        :class="['mosaic_data', index === 0 ? 'padding_top_0' : '']"
                        class="mosaic_data pointer"
                        @click="toggleMosaicDisplay(entry.id)"
                    >
                        <span class="namege_img">
                            <img
                                class="small_icon"
                                :src="isMosaicHidden(entry.id) ? dashboardImages.unselected : dashboardImages.selected"
                            />
                            <img v-if="entry.id.equals(networkMosaic)" src="@/views/resources/img/symbol/XYMCoin.png" class="mosaicIcon" />
                            <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="mosaicIcon grayed-xym-logo" />
                        </span>
                        <span class="mosaic_name">
                            {{ entry.name }}
                        </span>
                        <span class="mosaic_value">
                            <MosaicAmountDisplay :id="entry.id" :absolute-amount="entry.amount" :size="'normal'" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
import { MosaicBalanceListTs } from './MosaicBalanceListTs';
export default class MosaicBalanceList extends MosaicBalanceListTs {}
</script>
<style lang="less" scoped>
// @import './MosaicBalanceList.less';
</style>

<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
    padding: 14px 23px;
    text-transform: uppercase;
}

.title img {
    width: 20px;
    cursor: pointer;
}

.rows {
    display: flex;
    flex-direction: column;
    color: var(--clr-gray);
}

.row {
    display: flex;
    /* grid-template-columns: 50px 1fr min-content; */
    align-items: center;
    height: 43px;
}

.row:nth-child(even) {
    background-color: var(--clr-gray-dark);
}

.row img {
    width: 30px;
    margin-left: auto;
    padding-right: 10px;
}

@media screen and(min-width: 1300px) {
    .title {
        font-size: 20px;
    }
}
</style>