<template>
    <div class="panel flex flex-col flex-wrap sm:flex-row gap-[25px] p-1.5 justify-around items-center flex-grow">
        <div>
            <div class="title">{{ $t('chain_height') }}</div>
            <div class="value">{{ currentHeight }}</div>
        </div>
        <div>
            <div class="title">{{ $t('transactions') }}</div>
            <div class="value">{{ countTransactions }}</div>
        </div>
        <div>
            <div class="title">{{ $t('peers_number') }}</div>
            <div class="value">{{ countNodes }}</div>
        </div>
    </div>
    <!-- <div class="top_network_info">
        <div class="top_account_info">
            harvesting is conditional
            <div v-if="isHarvestingEnabled" class="xym-outline account-info-tile">
                <div class="title">
                    <span class="title_txt">{{ $t('harvesting') }}</span>
                </div>
                <img :src="officialIcons.harvest" />
                <div class="txt_info">
                    <button
                        class="centered-button button-style validation-button submit-button"
                        @click="isHarvestingWizardDisplayed = !isHarvestingWizardDisplayed"
                    >
                        {{ $t('show_wizard') }}
                    </button>
                </div>
            </div>

            <div v-else class="xym-outline account-info-tile">
                <div class="title">
                    <span class="title_txt">{{ $t('accounts') }}</span>
                </div>
                <img src="@/views/resources/img/monitor/peer_number.png" />
                <span class="txt_info">
                    {{ countAccounts }}
                </span>
            </div>
            end conditional

            <div class="account-info-tile">
                <div class="title">
                    <span class="title_txt">{{ $t('chain_height') }}</span>
                </div>
                <span class="txt_info">
                    {{ currentHeight }}
                </span>
            </div>

            <div class="account-info-tile">
                <div class="title">
                    <span class="title_txt">{{ $t('transactions') }}</span>
                </div>
                <span class="txt_info speed"> {{ countTransactions }} </span>
            </div>

            <div class="account-info-tile">
                <div class="title">
                    <span class="title_txt">{{ $t('peers_number') }}</span>
                </div>
                <span class="txt_info">
                    {{ countNodes }}
                </span>
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
import { NetworkStatisticsPanelTs } from './NetworkStatisticsPanelTs';
export default class NetworkStatisticsPanel extends NetworkStatisticsPanelTs {}
</script>
<style lang="less" scoped>
// @import './NetworkStatisticsPanel.less';
</style>

<style scoped>
.title {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--clr-gray);
    margin-bottom: 10px;
    white-space: nowrap;
}

.value {
    font-size: 31px;
    font-weight: 600;
    color: var(--clr-blue);
}

.panel {
    min-height: 170px;
}

@media screen and (min-width: 1300px) {
    .title {
        font-size: 20px;
    }

    .value {
        font-size: 40px;
    }
}
</style>