<template>
    <div class="flex justify-end gap-x-1 p-1">
        <TransactionStatusFilter />
        <div v-if="signers.length > 1" class="transaction-list-filter-container">
            <SignerFilter :signers="signers" @signer-change="onSignerSelectorChange" />
        </div>
        <div>
            <ButtonRefresh @click="refresh" />
        </div>
        <div>
            <Tooltip :content="$t('export_transactions')" placement="top" :transfer="true">
                <inline-svg :src="require('@/assets/icons/file-export.svg')" @click="downloadTransactions" class="cursor-pointer" />
            </Tooltip>
        </div>
    </div>
</template>

<script lang="ts">
// @ts-ignore
import { TransactionListFiltersTs } from './TransactionListFiltersTs';

export default class TransactionListFilters extends TransactionListFiltersTs {}
</script>

<style lang="less" scoped>
// @import './TransactionListFilters.less';
</style>
