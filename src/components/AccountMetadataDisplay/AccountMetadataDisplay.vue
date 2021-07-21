<template>
    <div class="flex items-center justify-end">
        <div class="flex items-center flex-shrink-0">
            <span class="text-gray">{{ $t('metadata') }}:</span>
            <Select v-model="chosenValue" class="w-7">
                <Option v-for="metadataModel in metadataList" :key="metadataModel.metadataId" :value="metadataModel.metadataId">
                    {{ `${metadataModel.scopedMetadataKey} : ${metadataModel.value}` }}
                </Option>
            </Select>
        </div>

        <div class="flex flex-shrink-0 ml-1.5">
            <inline-svg :src="require('@/assets/icons/plus-circle.svg')" @click="$emit('on-view-metadata')" />
            <div class="text-gray ml-0.5">Add metadata</div>
        </div>
        <div class="flex flex-shrink-0 ml-1.5">
            <inline-svg :src="require('@/assets/icons/alert.svg')" @click="emitMetadataValue" />
            <div class="text-gray ml-0.5">Account restrictions</div>

            <!-- <img src="@/views/resources/img/icons/View.svg" class="metadata-detail-button" @click="$emit('on-view-metadata')" /> -->
            <!-- <img src="@/views/resources/img/icons/settings.png" class="metadata-detail-button" @click="emitMetadataValue" /> -->
        </div>
    </div>
</template>

<script lang="ts">
import { AccountMetadataDisplayTs } from './AccountMetadataDisplayTs';
export default class AccountMetadataDisplay extends AccountMetadataDisplayTs {}
</script>

<style lang="less" scoped>
@import './AccountMetadataDisplay.less';
</style>
