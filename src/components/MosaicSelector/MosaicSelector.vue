<template>
    <ValidationProvider v-slot="{ errors }" vid="selectedMosaic" :name="$t(label)" :rules="'required'" tag="div" class="select-container">
        <ErrorTooltip :errors="errors">
            <Select v-model="selectedMosaic" v-focus :disabled="disabled">
                <Option v-for="m in displayedMosaics" :key="m.mosaicIdHex" :value="m.mosaicIdHex">
                    {{ m.name || m.mosaicIdHex }}
                </Option>
            </Select>
        </ErrorTooltip>
    </ValidationProvider>
</template>

<script lang="ts">
import { MosaicSelectorTs } from './MosaicSelectorTs';

export default class MosaicSelector extends MosaicSelectorTs {}
</script>

<style scoped>
/deep/.ivu-select-single .ivu-select-selection {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
}
</style>
