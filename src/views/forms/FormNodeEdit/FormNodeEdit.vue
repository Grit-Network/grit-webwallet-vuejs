<template>
    <div class="form">
        <PeerSelector :is-embedded="true"></PeerSelector>

        <ValidationObserver ref="observer" v-slot="{ handleSubmit }" slim>
            <div class="mb-[5px]">{{ $t('node_url') }}</div>
            <ValidationProvider v-slot="{ errors }" vid="nodeUrl" :name="$t('node_url')" :rules="validationRules.url" tag="div">
                <ErrorTooltip :errors="errors">
                    <AutoComplete
                        v-model="formItems.nodeUrl"
                        :data="customNodeData"
                        :placeholder="$t('input_here')"
                        class="input"
                        @on-select="getInfoFromUrl"
                        @on-change="handleInput"
                    ></AutoComplete>
                </ErrorTooltip>
            </ValidationProvider>

            <div class="mt-1 mb-[5px]">
                {{ $t('network_type') }}
            </div>

            <div class="relative">
                <input
                    v-model="formItems.networkType"
                    class="form-input text-black"
                    :placeholder="$t('automatically_generated_by_node_url')"
                    disabled
                />
                <div class="absolute right-1 top-1/2 transform -translate-y-1/2">
                    <Icon v-if="isGettingNodeInfo" type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
                </div>
            </div>

            <div class="mt-1 mb-[5px]">
                {{ $t('about_generation_hash') }}
            </div>

            <div class="relative">
                <input
                    v-model="formItems.networkHash"
                    class="form-input text-black"
                    :placeholder="$t('automatically_generated_by_node_url')"
                    disabled
                />
                <div class="absolute right-1 top-1/2 transform -translate-y-1/2">
                    <Icon v-if="isGettingNodeInfo" type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
                </div>
            </div>
            <div>
                <!-- <FormRow>
                    <template v-slot:label> : </template>
                    <template v-slot:inputs>
                        
                    </template>
                </FormRow> -->
                <!-- <FormRow>
                    <template v-slot:label> {{ $t('about_generation_hash') }}: </template>
                    <template v-slot:inputs>
                        <div class="inputs-container items-container">
                            <input
                                v-model="formItems.networkHash"
                                class="input-size input-style"
                                :placeholder="$t('automatically_generated_by_node_url')"
                                disabled
                            />
                            <Icon v-if="isGettingNodeInfo" type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
                        </div>
                    </template>
                </FormRow> -->
            </div>
            <div class="text-right mt-2">
                <button class="button primary" type="submit" :disabled="!formItems.networkHash" @click="handleSubmit(onSubmit)">
                    {{ $t('add_node') }}
                </button>
            </div>
        </ValidationObserver>
    </div>
</template>
<script lang="ts">
import { FormNodeEditTs } from './FormNodeEditTs';
export default class FormNodeEdit extends FormNodeEditTs {}
</script>

<style scoped>
/deep/.ivu-auto-complete input {
    color: black;
}
</style>

