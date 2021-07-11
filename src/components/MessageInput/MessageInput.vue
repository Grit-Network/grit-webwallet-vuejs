<template>
    <FormRow>
        <template v-slot:label>
            <div class="mb-0.5">{{ $t('message') }}:</div>
        </template>
        <template v-slot:inputs class="fixed-height">
            <ValidationProvider
                v-slot="{ errors }"
                vid="message"
                :name="$t('message')"
                :rules="validationRules.message"
                tag="div"
                class="inputs-container fixed-height"
            >
                <ErrorTooltip :errors="errors" class="fixed-height">
                    <textarea v-model="plain" wrap="off" class="form-input textarea" :placeholder="$t('please_enter_notes')" />
                </ErrorTooltip>
            </ValidationProvider>
        </template>
    </FormRow>
</template>

<script lang="ts">
import { MessageInputTs } from './MessageInputTs';
export default class MessageInput extends MessageInputTs {}
</script>

<style lang="less" scoped>
// @import './MessageInput.less';
</style>
