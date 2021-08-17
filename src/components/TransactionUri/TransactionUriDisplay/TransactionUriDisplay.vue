<template>
    <div class="transaction-uri">
        <div class="flex items-center gap-x-0.5 min-w-0">
            <Poptip
                :title="$t('transaction_uri')"
                trigger="hover"
                word-wrap
                width="600"
                :content="$t('transaction_uri_explanation')"
                placement="top-start"
            >
                <div class="info-icon">
                    <!-- <Icon type="md-link" /> -->
                    <inline-svg :src="require('@/assets/icons/link-variant.svg')"></inline-svg>
                </div>
            </Poptip>

            <LongTextDisplay :text="transactionURI" :pop-tip-title="$t('transaction_uri')" pop-tip-width="600" right-part-size="10" />
        </div>

        <ButtonCopyToClipboard :value="transactionURI" type="icon-gray" />
    </div>
</template>

<script lang="ts">
import TransactionUriDisplayTs from './TransactionUriDisplayTs';

export default class TransactionUriDisplay extends TransactionUriDisplayTs {}
</script>

<style lang="less" scoped>
// @import './TransactionUriDisplay.less';
</style>

<style scoped>
.transaction-uri {
    display: grid;
    grid-template-columns: 1fr min-content;
    column-gap: 15px;
    max-width: 100%;
    align-items: center;
}
</style>
