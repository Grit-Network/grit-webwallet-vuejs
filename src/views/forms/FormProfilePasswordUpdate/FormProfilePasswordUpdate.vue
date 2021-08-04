<template>
    <FormWrapper :whitelisted="true">
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }" slim>
            <form class="form" onsubmit="event.preventDefault()" autocomplete="off">
                <div class="mb-[5px]">
                    {{ $t('form_label_new_password') }}
                </div>
                <ValidationProvider
                    v-slot="{ errors }"
                    vid="newPassword"
                    mode="lazy"
                    :name="$t('password')"
                    :rules="validationRules.password"
                    tag="div"
                    class="inputs-container items-container"
                >
                    <ErrorTooltip :errors="errors">
                        <input
                            ref="passwordInput"
                            v-model="formItems.password"
                            class="form-input text-black"
                            :placeholder="$t('form_label_new_password')"
                            type="password"
                            @input="onChange"
                        />
                    </ErrorTooltip>
                </ValidationProvider>

                <div class="mt-0.5 mb-[5px]">
                    {{ $t('form_label_new_password_confirm') }}
                </div>

                <ValidationProvider
                    v-slot="{ errors }"
                    mode="lazy"
                    vid="confirmPassword"
                    :name="$t('confirmPassword')"
                    :rules="validationRules.confirmPassword"
                    tag="div"
                >
                    <ErrorTooltip :errors="errors">
                        <input
                            ref="passwordInput"
                            v-model="formItems.passwordConfirm"
                            class="form-input text-black"
                            :placeholder="$t('form_label_new_password_confirm')"
                            type="password"
                            @input="onChange"
                        />
                    </ErrorTooltip>
                </ValidationProvider>

                <div class="mt-0.5 mb-[5px]">
                    {{ $t('form_label_new_password_hint') }}
                </div>
                <ValidationProvider v-slot="{ errors }" vid="hint" :name="$t('hint')" :rules="validationRules.message" tag="div">
                    <ErrorTooltip :errors="errors">
                        <input
                            v-model="formItems.passwordHint"
                            class="form-input text-black"
                            :placeholder="$t('form_label_new_password_hint')"
                            @input="onChange"
                        />
                    </ErrorTooltip>
                </ValidationProvider>

                <div class="text-right mt-2">
                    <button class="button primary" type="submit" :disabled="isConfirmButtonDisabled" @click="handleSubmit(onSubmit)">
                        {{ $t('confirm') }}
                    </button>
                </div>
            </form>
        </ValidationObserver>
        <ModalFormProfileUnlock
            v-if="hasAccountUnlockModal"
            :visible="hasAccountUnlockModal"
            :on-success="onAccountUnlocked"
            @close="hasAccountUnlockModal = false"
        />
    </FormWrapper>
</template>

<script lang="ts">
import { FormProfilePasswordUpdateTs } from './FormProfilePasswordUpdateTs';
export default class FormProfilePasswordUpdate extends FormProfilePasswordUpdateTs {}
</script>

