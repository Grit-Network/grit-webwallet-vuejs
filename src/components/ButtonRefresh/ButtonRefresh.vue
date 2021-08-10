<template>
    <Tooltip :content="$t('refresh')" placement="top" :transfer="true">
        <inline-svg :src="require('@/assets/icons/refresh.svg')" @click="$emit('click')" class="cursor-pointer" />
        <!-- <Icon type="md-refresh" class="button-refresh" @click="$emit('click')" /> -->
    </Tooltip>
</template>
<script lang="ts">
import { ButtonRefreshTs } from './ButtonRefreshTs';
export default class ButtonRefresh extends ButtonRefreshTs {}
</script>


<style scoped>
.ivu-tooltip {
    width: unset;
}
</style>