<template>
    <div class="content">
        <FormTransferTransaction :recipient="recipient" :show-transaction-actions="true" />
    </div>
</template>

<script lang="ts">
// @ts-ignore
import { DashboardTransferPageTs } from './DashboardTransferPageTs';
export default class DashboardTransferPage extends DashboardTransferPageTs {}
</script>
<style lang="less" scoped>
// @import './DashboardTransferPage.less';
</style>

<style scoped>
.content {
    padding: 30px 20px;
}
</style>
