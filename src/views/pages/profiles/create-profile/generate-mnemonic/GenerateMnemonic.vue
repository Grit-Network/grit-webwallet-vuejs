<template>
    <div class="text-center w-9/12 lg:w-6/12">
        <img src="@/assets/images/logo-favicon.png" class="logo" />
        <Progress stroke-color="var(--clr-blue)" :percent="percent" />
    </div>
</template>

<script lang="ts">
import GenerateMnemonicTs from './GenerateMnemonicTs';
export default class GenerateMnemonic extends GenerateMnemonicTs {}
</script>
<style lang="less" scoped>
// @import './GenerateMnemonic.less';
</style>

<style scoped>
.logo {
    width: 166px;
    margin: 0 auto;
    margin-bottom: 68px;
}
</style>
