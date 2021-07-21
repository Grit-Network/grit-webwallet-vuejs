<template>
    <FormWrapper class="account-unlock-container form" :whitelisted="true">
        <form action="processSubmit" onsubmit="event.preventDefault()" class="form-line-container mt-3">
            <FormRow>
                <template v-slot:label> {{ $t('form_label_password') }}: </template>
                <template v-slot:inputs>
                    <div class="row-75-25 inputs-container">
                        <ValidationProvider
                            v-slot="{ errors }"
                            vid="password"
                            :name="$t('password')"
                            :rules="validationRules.profilePassword"
                            slim
                        >
                            <ErrorTooltip :errors="errors">
                                <input
                                    ref="passwordInput"
                                    v-model="formItems.password"
                                    type="password"
                                    class="form-input text-black"
                                    :disabled="isLoading"
                                    :placeholder="$t('please_enter_your_account_password')"
                                />
                            </ErrorTooltip>
                        </ValidationProvider>
                        <Button
                            v-if="!hideSubmit"
                            class="button primary mt-2"
                            html-type="submit"
                            :loading="isLoading"
                            :disabled="disabled"
                            @click="processVerification"
                        >
                            {{ $t(buttonText) }}
                        </Button>
                    </div>
                </template>
            </FormRow>
        </form>
    </FormWrapper>
</template>

<script lang="ts">
import { FormProfileUnlockTs } from './FormProfileUnlockTs';
export default class FormProfileUnlock extends FormProfileUnlockTs {}
</script>


