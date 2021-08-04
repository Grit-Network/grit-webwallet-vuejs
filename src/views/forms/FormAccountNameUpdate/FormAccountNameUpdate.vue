<template>
    <FormWrapper class="account-name-update-container" :whitelisted="true">
        <ValidationObserver v-slot="{ handleSubmit }" ref="observer" class="account-name-update-container" slim>
            <form class="form" onsubmit="event.preventDefault()">
                <FormRow>
                    <template v-slot:label>
                        <div class="mb-[5px]">{{ $t('form_label_new_account_name') }}</div>
                    </template>
                    <template v-slot:inputs>
                        <div class="row-75-25 inputs-container">
                            <ValidationProvider
                                v-slot="{ errors }"
                                mode="lazy"
                                vid="name"
                                :name="$t('name')"
                                :rules="validationRules.profileAccountName"
                                slim
                            >
                                <ErrorTooltip :errors="errors">
                                    <input
                                        v-model="formItems.name"
                                        v-focus
                                        type="text"
                                        name="name"
                                        class="form-input text-black"
                                        @input="stripTagsAccountName"
                                    />
                                </ErrorTooltip>
                            </ValidationProvider>

                            <div class="text-right mt-2">
                                <button class="button primary" type="submit" @click="handleSubmit(onSubmit)">
                                    {{ $t('confirm') }}
                                </button>
                            </div>
                        </div>
                    </template>
                </FormRow>
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
import { FormAccountNameUpdateTs } from './FormAccountNameUpdateTs';
export default class FormAccountNameUpdate extends FormAccountNameUpdateTs {}
</script>

<style lang="less" scoped>
.account-name-update-container {
    display: block;
    width: 100%;
    clear: both;
    min-height: 1rem;
}
</style>
