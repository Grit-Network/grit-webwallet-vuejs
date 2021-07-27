<template>
    <FormRow>
        <template v-slot:label>
            <div class="mb-[3px]">{{ $t(label) }}</div>
        </template>
        <template v-slot:inputs>
            <div class="row-approval-and-removal-input inputs-container">
                <div class="select-container">
                    <Select v-model="chosenValue" class="select-size select-style" type="number">
                        <Option v-for="{ newDelta, value } in deltaOptions" :key="value" :value="value">
                            {{ newDelta }}
                        </Option>
                    </Select>
                </div>
                <div class="text-blue italic">
                    {{ $t(description) }}
                </div>
            </div>
        </template>
    </FormRow>
</template>

<script lang="ts">
import { ApprovalAndRemovalInputTs } from './ApprovalAndRemovalInputTs';

export default class ApprovalAndRemovalInput extends ApprovalAndRemovalInputTs {}
</script>
