<template>
    <FormRow>
        <template v-slot:label>
            <div class="mt-0.5 mb-[3px]">{{ $t(label) }}</div>
        </template>
        <template v-slot:inputs>
            <ValidationProvider v-slot="{ errors }" vid="supply" :name="$t(label)" :rules="validationRules.supply" tag="div">
                <ErrorTooltip :errors="errors">
                    <input v-model="chosenValue" class="form-input" type="number" />
                </ErrorTooltip>
            </ValidationProvider>
        </template>
    </FormRow>
</template>

<script lang="ts">
import { SupplyInputTs } from './SupplyInputTs';
export default class SupplyInput extends SupplyInputTs {}
</script>
