<template>
    <FormWrapper ref="observer" class="sub-account-creation-container form text-black" :whitelisted="true" slim>
        <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
            <form class="form-container mt-3" onsubmit="event.preventDefault()" autocomplete="off">
                <FormRow>
                    <template v-slot:label> {{ $t('form_label_new_contact_name') }}: </template>
                    <template v-slot:inputs>
                        <ValidationProvider
                            v-slot="{ errors }"
                            mode="lazy"
                            vid="name"
                            :name="$t('name')"
                            :rules="validationRules.contactName"
                            tag="div"
                            class="inputs-container items-container"
                        >
                            <ErrorTooltip :errors="errors">
                                <input
                                    v-model="formItems.name"
                                    type="text"
                                    name="name"
                                    class="form-input text-black mb-1"
                                    @input="stripTagsAccountName"
                                />
                            </ErrorTooltip>
                        </ValidationProvider>
                    </template>
                </FormRow>
                <FormRow>
                    <template v-slot:label> {{ $t('form_label_new_contact_address') }}: </template>
                    <template v-slot:inputs>
                        <ValidationProvider
                            v-slot="{ errors }"
                            mode="lazy"
                            vid="name"
                            :name="$t('address')"
                            :rules="validationRules.addressOrPublicKey"
                            tag="div"
                            class="inputs-container items-container"
                        >
                            <ErrorTooltip :errors="errors">
                                <input v-model="formItems.address" type="text" name="name" class="form-input text-black" />
                            </ErrorTooltip>
                        </ValidationProvider>
                    </template>
                </FormRow>
                <FormRow>
                    <template v-slot:inputs>
                        <div class="text-right mt-2">
                            <button
                                class="button primary text-white"
                                type="submit"
                                :disabled="isButtonDisabled"
                                @click="handleSubmit(onSubmit)"
                            >
                                {{ $t('confirm') }}
                            </button>
                        </div>
                    </template>
                </FormRow>
            </form>
        </ValidationObserver>
    </FormWrapper>
</template>

<script lang="ts">
import { FormContactCreationTs } from './FormContactCreationTs';
export default class FormContactCreation extends FormContactCreationTs {}
</script>

<style lang="less" scoped>
.sub-account-creation-container {
    display: block;
    width: 100%;
    clear: both;
    min-height: 1rem;
}
/deep/.form-row-inner-container {
    text-align: left;
    grid-template-columns: 25% 65%;
}
</style>
