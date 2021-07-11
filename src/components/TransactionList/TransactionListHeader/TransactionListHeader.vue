<template>
    <div class="thead">
        <!-- <div class="header"></div> -->
        <div class="header">
            {{ $t('from_to_action') }}
        </div>
        <div class="header">
            {{ $t('amount_asset') }}
        </div>
        <div class="header">
            {{ $t('confirmations_height') }}
        </div>
        <div class="header">
            {{ $t('hash_date') }}
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TransactionListHeader extends Vue {}
</script>

<style lang="less" scoped>
// @import './TransactionListHeader.less';
</style>

<style scoped>
.header {
    display: table-cell;
    color: var(--clr-gray);
    font-weight: 500;
    border-bottom: 1.5px solid #707070;
    padding: 10px 14px;
}

.thead {
    display: table-header-group;
}
</style>
