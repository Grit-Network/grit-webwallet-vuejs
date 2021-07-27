<template>
    <div class="flex flex-col flex-grow">
        <Table
            :loading="isFetchingHarvestedBlocks"
            :columns="columns"
            :data="blockList"
            :no-data-text="$t('no_harvested_blocks_yet')"
            class="table"
        />
        <div class="mt-2 mx-auto">
            <Pagination page-size="pageSize" :current="pageInfo.pageNumber" :last-page="pageInfo.isLastPage" @targetPage="onPageChange" />
        </div>
    </div>
</template>

<script lang="ts">
import HarvestedBlocksListTs from './HarvestedBlocksListTs';
export default class HarvestedBlocksList extends HarvestedBlocksListTs {}
</script>

<style lang="less" scoped>
// @import './HarvestedBlocksList.less';
</style>
