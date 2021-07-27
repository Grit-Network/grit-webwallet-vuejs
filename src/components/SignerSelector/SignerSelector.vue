<template>
    <FormRow class-name="emphasis" :no-label="noLabel">
        <template v-slot:label>
            <span v-if="!noLabel">{{ $t(label) }}</span>
        </template>
        <template v-slot:inputs>
            <Select v-model="chosenSigner" :placeholder="$t('address')" class="mt-[3px]" :disabled="disabled">
                <Option v-for="item in signers" :key="item.address.plain()" :value="item.address.plain()">
                    {{ item.label }}
                    {{ item.multisig ? $t('label_postfix_multisig') : '' }}
                </Option>
            </Select>
            <!-- <div v-if="signers && signers.length > 1" class="inputs-container select-container">
                <Select v-model="chosenSigner" :placeholder="$t('address')" class="select-size select-style" :disabled="disabled">
                    <Option v-for="item in signers" :key="item.address.plain()" :value="item.address.plain()">
                        {{ item.label }}
                        {{ item.multisig ? $t('label_postfix_multisig') : '' }}
                    </Option>
                </Select>
            </div> -->
            <!-- <span v-else class="signer-selector-single-signer-container">
                {{ signers[0] ? signers[0].label : '' }}
                {{ signers[0] && signers[0].multisig ? $t('label_postfix_multisig') : '' }}
            </span> -->
        </template>
    </FormRow>
</template>

<script lang="ts">
import { SignerSelectorTs } from './SignerSelectorTs';
export default class SignerSelector extends SignerSelectorTs {}
</script>
