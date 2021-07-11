<template>
    <TransactionList v-if="!!accountAddress" :address="accountAddress" pagination-type="scroll" />
</template>

<script lang="ts">
// @ts-ignore
import { DashboardHomePageTs } from './DashboardHomePageTs';
export default class DashboardHomePage extends DashboardHomePageTs {}
</script>
<style lang="less" scoped>
// @import './DashboardHomePage.less';
</style>
