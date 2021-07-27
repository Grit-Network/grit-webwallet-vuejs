<template>
    <div class="transaction-filter">
        <Select v-model="selectedSigner" size="large" prefix="ios-home" @input="onSignerChange">
            <Icon slot="prefix" type="ios-people" size="0" />
            <OptionGroup label="Multisig accounts">
                <Option v-for="item in signers" :key="item.address.plain()" :value="item.address.plain()">
                    {{ item.multisig ? $t('label_postfix_multisig') : '' }}
                    {{ item.label }}
                </Option>
            </OptionGroup>
        </Select>
    </div>
</template>
<script lang="ts">
// @ts-ignore
import { SignerFilterTs } from './SignerFilterTs';
export default class SignerFilter extends SignerFilterTs {}
</script>

