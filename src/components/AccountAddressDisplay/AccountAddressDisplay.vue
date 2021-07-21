<template>
    <div class="contents">
        <span class="text-gray">{{ $t('account_address') }}:</span>
        <div class="flex justify-between">
            {{ prettyAddress }}
            <ButtonCopyToClipboard v-model="address" type="icon-gray" class="flex-shrink-0" />
        </div>
    </div>
</template>

<script lang="ts">
import { AccountAddressDisplayTs } from './AccountAddressDisplayTs';
export default class AccountAddressDisplay extends AccountAddressDisplayTs {}
</script>

<style lang="less" scoped>
// @import '../../views/resources/css/variables.less';
// .accountAddress {
//     display: grid;
//     grid-auto-flow: column;
//     grid-auto-columns: max-content;
// }
</style>
