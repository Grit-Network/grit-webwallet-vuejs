<template>
    <FormRow>
        <template v-slot:label
            ><div class="mt-0.5">{{ $t(label) }}:</div>
        </template>
        <template v-slot:inputs>
            <ValidationProvider v-slot="{ errors }" vid="form_label_duration" :name="$t(label)" :rules="validationRule" tag="div">
                <ErrorTooltip :errors="errors">
                    <div class="relative">
                        <input v-model="chosenValue" class="form-input" type="number" />
                        <span v-if="showRelativeTime" class="relative-time">
                            {{ $t('estimated_period_of_validity') }}:&nbsp;{{ relativeTime }}
                        </span>
                    </div>
                </ErrorTooltip>
            </ValidationProvider>
        </template>
    </FormRow>
</template>

<script lang="ts">
import { DurationInputTs } from './DurationInputTs';
export default class DurationInput extends DurationInputTs {}
</script>
<style lang="less" scoped>
// @import './DurationInput.less';
</style>

<style scoped>
.relative-time {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 12px;
    color: var(--clr-gray);
    pointer-events: none;
}
</style>