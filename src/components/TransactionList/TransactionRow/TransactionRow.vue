<template>
    <div class="tr" @click="$emit('click', transaction)">
        <!-- FIRST COLUMN -->
        <!-- <div class="td">
            <img :src="getIcon()" class="icon-cell-image" />
        </div> -->

        <!-- SECOND COLUMN -->
        <div class="td">
            <ActionDisplay :transaction="transaction" :is-optin-payout-transaction="isOptinPayoutTransaction" />
        </div>

        <!-- THIRD COLUMN -->
        <div class="td">
            <MosaicAmountDisplay
                v-if="getAmount() !== undefined"
                :id="getAmountMosaicId()"
                :absolute-amount="getAmount()"
                :color="getAmountColor()"
                :show-ticker="isAmountShowTicker()"
            />
            <span v-else>N/A</span>
        </div>

        <!-- FOURTH COLUMN -->
        <div class="td">
            {{ getHeight() }}
        </div>

        <!-- FIFTH COLUMN -->
        <div class="td">
            <!--
            <span class="hash-cell-transaction-hash">
                <a class="url_text" target="_blank" :href="explorerUrl">
                    {{ formatters.miniHash(transaction.transactionInfo.hash) }}
                </a>
            </span>
            -->
            <!-- @TODO: Should be transaction time instead of deadline -->
            {{ date }}
        </div>
    </div>
</template>

<script lang="ts">
// @ts-ignore
import { TransactionRowTs } from './TransactionRowTs';

export default class TransactionRow extends TransactionRowTs {}
</script>


<style scoped>
.tr {
    display: table-row;
}

.td {
    display: table-cell;
    padding: 10px 14px;
}

.td:nth-child(even) {
    background-color: var(--clr-gray-dark);
}
</style>