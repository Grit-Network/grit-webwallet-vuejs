<template>
    <div class="content">
        <div>
            <FormTransferTransaction
                :hide-encryption="true"
                :hide-signer="true"
                :hide-submit="true"
                origin="dashboard_invoice"
                @onTransactionsChange="onInvoiceChange"
            >
                <div class="pt-1.5">
                    <div>
                        <QRCodeDisplay
                            :qr-code="transactionQR"
                            alt="transaction_qr_code"
                            show-download="true"
                            :download-name="'invoiceqr_' + recipient"
                        />
                    </div>

                    <div class="description-container">
                        <div id="address_text" class="uppercase">{{ $t('recipient') }}: {{ recipient }}</div>

                        <div class="flex gap-x-0.5 mt-1">
                            <span class="uppercase">{{ $t('mosaic') }}:</span>
                            <div v-if="balanceEntries.length">
                                <div v-for="({ mosaicHex, name, amount }, index) in balanceEntries" :key="index">
                                    <!-- <span>{{ amount }}</span> -->
                                    <span>{{ name }}</span>
                                    <span :hidden="name">{{ mosaicHex }}</span>
                                </div>
                            </div>
                            <span v-else>{{ 'N/A' }}</span>
                        </div>

                        <div class="mt-1">
                            <span class="uppercase">{{ $t('message') }}:</span>
                            <span>{{ currentTransaction && currentTransaction.message ? currentTransaction.message.payload : '' }}</span>
                        </div>
                    </div>
                </div>
            </FormTransferTransaction>
        </div>
    </div>
</template>

<script lang="ts">
import { DashboardInvoicePageTs } from './DashboardInvoicePageTs';
export default class DashboardInvoicePage extends DashboardInvoicePageTs {}
</script>
<style lang="less" scoped>
// @import './DashboardInvoicePage.less';
</style>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
}
</style>
