<template>
    <div v-if="currentAccounts.length" class="switch_account">
        <!-- <Select
            v-model="currentAccountIdentifier"
            :class="{ 'select-size select-style': defaultFormStyle, 'min-width': enableMinWidth }"
            style="max-height: 2rem"
            @input="$emit('on-change')"
        > -->
        <Select v-model="currentAccountIdentifier" @input="$emit('on-change')">
            <!-- <img v-if="showIcon" slot="prefix" class="navbar-icon" src="@/views/resources/img/navbar/account.svg" /> -->
            <inline-svg slot="prefix" :src="require('@/assets/icons/wallet.svg')" class="ml-1 navbar-item-icon" />

            <!-- Adding :transfer="true" breaks the style and moves the dropdown to the document root -->
            <Option v-for="{ id, name } in currentAccounts" :key="id" :value="id">
                {{ truncate(name) }}
            </Option>
        </Select>
    </div>
</template>

<script lang="ts">
import { AccountSelectorFieldTs } from './AccountSelectorFieldTs';
export default class AccountSelectorField extends AccountSelectorFieldTs {}
</script>
<style lang="less" scoped>
// @import './AccountSelectorField.less';
</style>


<style scoped>
/deep/.ivu-icon.ivu-select-arrow {
    display: none;
}

/deep/.ivu-select-selection-focused .ivu-select-arrow,
.ivu-select-selection:hover .ivu-select-arrow {
    display: none;
}

/deep/.ivu-select .ivu-select-selection {
    border: none;
    background-color: transparent;
}

/deep/.ivu-select .ivu-select-selection .ivu-select-selected-value {
    color: var(--clr-gray);
}

/deep/.ivu-select:hover .ivu-select-selection .ivu-select-selected-value {
    color: var(--clr-blue);
}

/deep/.ivu-select:hover .navbar-item-icon path {
    fill: var(--clr-blue);
}
</style>