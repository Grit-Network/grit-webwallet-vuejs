<template>
    <div class="flex flex-col flex-grow">
        <!-- <Table
            :loading="isFetchingHarvestedBlocks"
            :columns="columns"
            :data="blockList"
            :no-data-text="$t('no_harvested_blocks_yet')"
            class="table"
        /> -->
        <table class="table">
            <thead>
                <tr>
                    <th>{{ this.$t('block') }}</th>
                    <th>{{ this.$t('fees_earned') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="blockList.length === 0">
                    <td colspan="2" class="text-center">No data found</td>
                </tr>

                <template v-else>
                    <tr v-for="(block, index) in blockList" :key="index">
                        <td>{{ block.blockNo }}</td>
                        <td>{{ block.fee }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
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
