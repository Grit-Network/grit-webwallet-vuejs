<template>
    <div>
        <slot name="table-section" />
    </div>
</template>

<script lang="ts">
// external dependencies
import { Component, Vue } from 'vue-property-decorator';
// child components
import NavigationTabs from '@/components/NavigationTabs/NavigationTabs.vue';
@Component({ components: { NavigationTabs } })
export default class AssetListPageWrap extends Vue {}
</script>

<style lang="less" scoped>
@import './AssetListPageWrap.less';
</style>
