<template>
    <div class="contact-detail">
        <div class="flex-shrink-0">
            <AddressQR :contact="selectedContact" />
        </div>

        <div class="form-grid">
            <FormInputEditable
                :model="selectedContact"
                :value="selectedContact.name"
                :new-value="selectedContact.name"
                :editing="false"
                :label="$t('contact_name')"
                :on-edit="saveProperty('name')"
            />

            <FormInputEditable
                :model="selectedContact"
                :value="address"
                :new-value="address"
                :editing="false"
                :rules="validationRules.addressOrPublicKey"
                :label="$t('contact_address')"
                :on-edit="saveProperty('address')"
            />
        </div>
        <!-- <div class="account-detail-inner-container">
            <div class="left-container">
                <AddressQR :contact="selectedContact" />
            </div>
            <div class="right-container">
                <div class="account-details-grid">
                    <div class="detail-row">
                        <FormInputEditable
                            :model="selectedContact"
                            :value="selectedContact.name"
                            :new-value="selectedContact.name"
                            :editing="false"
                            :label="$t('contact_name')"
                            :on-edit="saveProperty('name')"
                        />
                    </div>
                    <div class="detail-row">
                        <FormInputEditable
                            :model="selectedContact"
                            :value="address"
                            :new-value="address"
                            :editing="false"
                            :rules="validationRules.addressOrPublicKey"
                            :label="$t('contact_address')"
                            :on-edit="saveProperty('address')"
                        />
                    </div>
                    <div class="detail-row">
                        <FormInputEditable
                            :model="selectedContact"
                            :value="selectedContact.phone"
                            :new-value="selectedContact.phone"
                            :editing="false"
                            :rules="''"
                            :label="$t('contact_phone')"
                            :on-edit="saveProperty('phone')"
                        />
                    </div>
                    <div class="detail-row">
                        <FormInputEditable
                            :model="selectedContact"
                            :value="selectedContact.email"
                            :new-value="selectedContact.email"
                            :editing="false"
                            :rules="validationRules.email"
                            :label="$t('contact_email')"
                            :on-edit="saveProperty('email')"
                        />
                    </div>
                    <div class="detail-row">
                        <FormInputEditable
                            :model="selectedContact"
                            :value="selectedContact.notes"
                            :new-value="selectedContact.notes"
                            :editing="false"
                            :rules="''"
                            :label="$t('contact_notes')"
                            :on-edit="saveProperty('notes')"
                        />
                    </div>
                    <div class="detail-row">
                        <div class="bottom-buttons-container">
                            <div></div>
                            <button type="button" class="centered-button button-style button danger-button" @click="showDeleteModal = true">
                                {{ $t('delete_contact') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <ModalConfirm
            v-model="showDeleteModal"
            :title="$t('delete_contact_confirmation_title')"
            :message="$t('delete_contact_confirmation_message', { contactName: selectedContact.name })"
            @confirmed="removeContact"
        />
    </div>
</template>

<script lang="ts">
import { ContactDetailPanelTs } from './ContactDetailPanelTs';
export default class ContactDetailPanel extends ContactDetailPanelTs {}
</script>

<style scoped>
.contact-detail {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 20px 7%;
}

.form-grid {
    display: grid;
    grid-template-columns: min-content 1fr auto;
    align-items: center;
    column-gap: 10px;
    row-gap: 8px;
    flex-grow: 1;
    padding-left: 25px;
}

.form-grid .label {
    white-space: nowrap;
    color: var(--clr-gray);
}
</style>