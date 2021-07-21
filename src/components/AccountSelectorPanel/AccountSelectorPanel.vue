<template>
    <div class="account-selector">
        <div v-if="seedAccounts.length > 0" class="title">Seed accounts</div>

        <div class="flex flex-col">
            <div v-for="item in seedAccounts" :key="item.id" class="account-container">
                <div @click="currentAccountIdentifier = item.id" :class="{ active: isActiveAccount(item) }" class="account">
                    <img src="@/assets/images/logo-favicon.png" class="account-image" alt />
                    <div class="account-title">{{ item.name }}</div>
                    <div class="account-amount">
                        <MosaicAmountDisplay :absolute-amount="balances[item.address]" />
                    </div>
                </div>

                <AccountDetailsPage v-if="isActiveAccount(item)" />
                <!-- <div class="mosaic_data">
                <span class="img_container">
                    <img v-if="isActiveAccount(item)" src="@/views/resources/img/symbol/XYMCoin.png" alt />
                    <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="grayed-xym-logo" />
                </span>
                <span class="mosaic_name">{{ item.name }}</span>

                <span class="mosaic_value">
                    <span :class="['amount', 'overflow_ellipsis', 'green']">
                        <MosaicAmountDisplay :absolute-amount="balances[item.address]" />
                    </span>
                </span>
            </div> -->
            </div>
        </div>

        <div v-if="optInAccounts.length > 0" class="account-type-title">Opt In accounts</div>
        <div
            v-for="item in optInAccounts"
            :key="item.id"
            :class="['account-tile', isActiveAccount(item) ? 'active-background' : 'inactive-background', 'pointer']"
            @click="currentAccountIdentifier = item.id"
        >
            <div class="mosaic_data">
                <span class="img_container">
                    <img v-if="isActiveAccount(item)" src="@/views/resources/img/symbol/XYMCoin.png" alt />
                    <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="grayed-xym-logo" />
                </span>
                <span class="mosaic_name">{{ item.name }}</span>

                <span class="mosaic_value">
                    <span :class="['amount', 'overflow_ellipsis', 'green']">
                        <MosaicAmountDisplay :absolute-amount="balances[item.address]" />
                    </span>
                </span>
            </div>
        </div>
        <div v-if="ledgerAccount.length > 0" class="account-type-title">Ledger accounts</div>
        <div
            v-for="item in ledgerAccount"
            :key="item.id"
            :class="['account-tile', isActiveAccount(item) ? 'active-background' : 'inactive-background', 'pointer']"
            @click="currentAccountIdentifier = item.id"
        >
            <div class="mosaic_data">
                <span class="img_container">
                    <img v-if="isActiveAccount(item)" src="@/views/resources/img/symbol/XYMCoin.png" alt />
                    <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="grayed-xym-logo" />
                </span>
                <span class="mosaic_name">{{ item.name }}</span>

                <span class="mosaic_value">
                    <span :class="['amount', 'overflow_ellipsis', 'green']">
                        <MosaicAmountDisplay :absolute-amount="balances[item.address]" />
                    </span>
                </span>
            </div>
        </div>
        <div v-if="ledgerOptInAccount.length > 0" class="account-type-title">Ledger Opt In accounts</div>
        <div
            v-for="item in ledgerOptInAccount"
            :key="item.id"
            :class="['account-tile', isActiveAccount(item) ? 'active-background' : 'inactive-background', 'pointer']"
            @click="currentAccountIdentifier = item.id"
        >
            <div class="mosaic_data">
                <span class="img_container">
                    <img v-if="isActiveAccount(item)" src="@/views/resources/img/symbol/XYMCoin.png" alt />
                    <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="grayed-xym-logo" />
                </span>
                <span class="mosaic_name">{{ item.name }}</span>

                <span class="mosaic_value">
                    <span :class="['amount', 'overflow_ellipsis', 'green']">
                        <MosaicAmountDisplay :absolute-amount="balances[item.address]" />
                    </span>
                </span>
            </div>
        </div>
        <div v-if="pkAccounts.length > 0" class="account-type-title">Private key accounts</div>
        <div
            v-for="item in pkAccounts"
            :key="item.id"
            :class="['account-tile', isActiveAccount(item) ? 'active-background' : 'inactive-background', 'pointer']"
            @click="currentAccountIdentifier = item.id"
        >
            <div class="mosaic_data">
                <span class="img_container">
                    <img v-if="isActiveAccount(item)" src="@/views/resources/img/symbol/XYMCoin.png" alt />
                    <img v-else src="@/views/resources/img/symbol/XYMCoin.png" class="grayed-xym-logo" />
                </span>
                <span class="mosaic_name">{{ item.name }}</span>

                <span class="mosaic_value">
                    <span :class="['amount', 'overflow_ellipsis', 'green']">
                        <MosaicAmountDisplay :absolute-amount="balances[item.address]" />
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { AccountSelectorPanelTs } from './AccountSelectorPanelTs';
// import './AccountSelectorPanel.less';

export default class AccountSelectorPanel extends AccountSelectorPanelTs {}
</script>

<style scoped>
.title {
    font-size: 15px;
    font-weight: 500;
    padding: 17px 23px;
}

.account {
    display: flex;
    align-items: center;
    padding: 10px 23px;
    cursor: pointer;
}

.account.active {
    background-color: var(--clr-gray-dark);
}

.account-image {
    width: 16px;
    margin-right: 10px;
}

.account-title {
    flex-grow: 1;
    font-weight: 500;
}
</style>
