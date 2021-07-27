<template>
    <div class="select-container">
        <div class="label-and-select">
            <div v-if="showFeeLabel" class="mb-0.5">{{ $t('fee') }}</div>
            <Select
                v-if="!displayOnly"
                v-model="chosenMaxFee"
                :placeholder="$t('fee')"
                class="select-size select-style"
                :placement="placement"
                :transfer="true"
                @input="$emit('on-change')"
            >
                <Option v-for="{ maxFee, label } in feesCalculated" :key="maxFee" :value="maxFee">
                    {{ label }}
                </Option>
            </Select>
            <div v-else>
                {{ fees.find((i) => i.maxFee == chosenMaxFee).label }}
            </div>
        </div>
        <div v-if="showLowFeeWarning && !displayOnly" style="color: red" class="mt-0.5">
            <Icon type="ios-warning-outline" />
            {{ $t('low_fee_warning_message') }}
        </div>
        <div v-else-if="transactionFees.minFeeMultiplier && !displayOnly" class="mt-0.5 italic text-blue">
            {{ $t('minimal_fee_transaction') + transactionFees.minFeeMultiplier.toString() }}
        </div>
    </div>
</template>

<script lang="ts">
import { MaxFeeSelectorTs } from './MaxFeeSelectorTs';
export default class MaxFeeSelector extends MaxFeeSelectorTs {}
</script>

<style lang="less" scoped>
// @import './MaxFeeSelector.less';
</style>
