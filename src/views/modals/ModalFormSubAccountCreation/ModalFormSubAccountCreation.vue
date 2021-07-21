<template>
    <Modal v-model="show" class-name="modal-container" :title="$t('modal_title_enter_account_name')" :transfer="false">
        <FormWrapper ref="observer" class="form text-black" :whitelisted="true" slim>
            <ValidationObserver ref="observer" slim>
                <form class="form-container mt-3" onsubmit="event.preventDefault()" autocomplete="off">
                    <FormRow>
                        <template v-slot:label> {{ $t('form_label_new_account_type') }}: </template>
                        <template v-slot:inputs>
                            <div class="inputs-container">
                                <div class="select-container">
                                    <Select v-model="formItems.type" class="text-black mb-1" :disabled="isCreatingAccount">
                                        <Option v-if="isPrivateKeyAccount" value="privatekey_account">
                                            {{ $t('option_hd_account') }}
                                        </Option>
                                        <Option v-else value="child_account">
                                            {{ $t('option_child_account') }}
                                        </Option>
                                        <Option v-if="!isLedger" value="privatekey_account">
                                            {{ $t('option_privatekey_account') }}
                                        </Option>
                                    </Select>
                                </div>
                            </div>
                        </template>
                    </FormRow>

                    <FormRow>
                        <template v-slot:label> {{ $t('form_label_new_account_name') }}: </template>
                        <template v-slot:inputs>
                            <ValidationProvider
                                v-slot="{ errors }"
                                mode="lazy"
                                vid="name"
                                :name="$t('name')"
                                :rules="validationRules.profileAccountName"
                                tag="div"
                                class="inputs-container items-container"
                            >
                                <ErrorTooltip :errors="errors">
                                    <input
                                        v-model="formItems.name"
                                        type="text"
                                        name="name"
                                        class="form-input text-black"
                                        autocomplete="new-password"
                                        :disabled="isCreatingAccount"
                                        @input="stripTagsAccountName"
                                    />
                                </ErrorTooltip>
                            </ValidationProvider>
                        </template>
                    </FormRow>

                    <FormRow v-if="formItems.type === 'privatekey_account'">
                        <template v-slot:label> {{ $t('form_label_private_key') }}: </template>
                        <template v-slot:inputs>
                            <ValidationProvider
                                v-slot="{ errors }"
                                mode="lazy"
                                vid="name"
                                :name="$t('privateKey')"
                                :rules="validationRules.privateKey"
                                tag="div"
                                class="inputs-container items-container"
                            >
                                <ErrorTooltip :errors="errors">
                                    <input
                                        v-model="formItems.privateKey"
                                        type="password"
                                        name="privateKey"
                                        class="form-input text-black"
                                        autocomplete="new-password"
                                        :disabled="isCreatingAccount"
                                    />
                                </ErrorTooltip>
                            </ValidationProvider>
                        </template>
                    </FormRow>
                </form>
            </ValidationObserver>
        </FormWrapper>

        <ModalBackupReminder :visible="isModalBackupReminderShown" @close="closeBackupReminderModal" />

        <div slot="footer" class="modal-footer">
            <FormProfileUnlock :focus="false" :is-loading="isCreatingAccount" :disabled="!isValidName" @success="onAccountUnlocked" />
        </div>
    </Modal>
</template>

<script lang="ts">
import { ModalFormSubAccountCreationTs } from './ModalFormSubAccountCreationTs';
export default class ModalFormSubAccountCreation extends ModalFormSubAccountCreationTs {}
</script>

