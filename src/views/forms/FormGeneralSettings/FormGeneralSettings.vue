<template>
    <div>
        <FormWrapper :whitelisted="true">
            <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
                <form class="form" onsubmit="event.preventDefault()" autocomplete="off">
                    <div class="mb-[5px]">
                        {{ $t('form_label_default_account') }}
                    </div>
                    <AccountSelectorField
                        v-model="formItems.defaultAccount"
                        :default-form-style="true"
                        :show-icon="false"
                        @on-change="onChange"
                    />

                    <div class="mt-1 mb-[5px]">
                        {{ $t('form_label_default_max_fee') }}
                    </div>
                    <MaxFeeSelector v-model="formItems.defaultFee" @on-change="onChange" />

                    <div class="mt-1">
                        <ExplorerUrlSetter v-model="formItems.explorerUrl" :auto-submit="false" @on-change="onChange" />
                    </div>

                    <div class="mt-1 mb-[5px]">
                        {{ $t('form_label_language') }}
                    </div>

                    <LanguageSelector v-model="formItems.language" :auto-submit="false" :default-form-style="true" @on-change="onChange" />

                    <div class="flex justify-between mt-2">
                        <DeleteProfileButton @logout="logout" />

                        <div class="flex gap-x-1">
                            <button class="button primary w-6" type="reset" @click.prevent="resetForm">
                                {{ $t('reset') }}
                            </button>
                            <button
                                class="button gray w-6"
                                type="submit"
                                :disabled="isConfirmButtonDisabled"
                                @click="handleSubmit(onSubmit)"
                            >
                                {{ $t('confirm') }}
                            </button>
                        </div>
                    </div>
                </form>
            </ValidationObserver>
        </FormWrapper>

        <ModalFormProfileUnlock
            v-if="hasAccountUnlockModal"
            :visible="hasAccountUnlockModal"
            :on-success="onAccountUnlocked"
            @close="hasAccountUnlockModal = false"
        />
    </div>
</template>

<script lang="ts">
import { FormGeneralSettingsTs } from './FormGeneralSettingsTs';
export default class FormGeneralSettings extends FormGeneralSettingsTs {}
</script>

<style scoped>
</style>
