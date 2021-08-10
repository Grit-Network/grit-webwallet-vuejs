<template>
    <div class="account-details">
        <div v-if="isOptinAccount" class="alert_container">
            <Alert type="error">
                {{ $t('opt_in_account_notification') }}
            </Alert>
        </div>

        <AccountMetadataDisplay
            :metadata-list="accountMetadataList"
            @on-view-metadata="showMetadataDetailModal = true"
            @on-edit-metadata="openEditModal"
            class="mb-1"
            v-if="!!accountMetadataList.length"
        />
        <!-- v-if="!!accountMetadataList.length"  -->

        <div class="flex flex-col sm:flex-row gap-2 items-center">
            <div class="flex-shrink-0">
                <AccountContactQR :account="currentAccount" />
            </div>
            <div class="form-grid">
                <AccountNameDisplay v-if="currentAccount" :account="currentAccount" :editable="true" />

                <ImportanceScoreDisplay v-if="currentAccount" :address="currentAccount.address" />

                <AccountAddressDisplay v-if="currentAccount" :address="currentAccount.address" />

                <AccountPublicKeyDisplay :account="currentAccount" />

                <ProtectedPrivateKeyDisplay :account="currentAccount" />

                <template v-if="currentAccount && defaultAccount === currentAccount.id">
                    <span class="label">{{ $t('accounts_flags_default_account') }}:</span>
                    <div class="value">
                        <span>{{ $t('accounts_flags_default_account_explain') }}</span>
                    </div>
                </template>

                <template v-if="currentAccount && currentAccount.isMultisig">
                    <span class="label">{{ $t('accounts_flags_default_account') }}</span>
                    <div class="value">
                        <span>{{ $t('accounts_flags_default_account_explain') }}</span>
                    </div>
                </template>

                <!-- simple/multisig flag -->
                <!-- <div v-if="currentAccount && currentAccount.isMultisig" class="detail-row">
                    <div class="account-detail-row">
                        <span class="label">{{ $t('accounts_flags_default_account') }}</span>
                        <div class="value">
                            <span>{{ $t('accounts_flags_default_account_explain') }}</span>
                        </div>
                    </div>
                </div>

                <div v-if="!!accountMetadataList.length" class="detail-row">
                    <AccountMetadataDisplay
                        :metadata-list="accountMetadataList"
                        :visible="!!accountMetadataList.length"
                        @on-view-metadata="showMetadataDetailModal = true"
                        @on-edit-metadata="openEditModal"
                    />
                </div>

                <div class="graph-row">
                    <AccountAliasDisplay :account="currentAccount" />

                    <AccountMultisigGraph
                        v-if="currentAccount && currentAccount.isMultisig"
                        :account="currentAccount"
                        :visible="currentAccount.isMultisig"
                    />
                    <div class="bottom-buttons-container">
                        <button
                            v-if="isLedger"
                            type="button"
                            class="centered-button button-style button solid-button buttonC"
                            @click="showAddressLedger"
                        >
                            {{ $t('show_on_ledger') }}
                        </button>
                        <button
                            type="button"
                            class="centered-button button-style button danger-button buttonD"
                            :disabled="knownAccounts.length <= 1"
                            @click="deleteAccountConfirmation"
                        >
                            {{ $t('delete_account') }}
                        </button>
                    </div>
                </div> -->
            </div>
        </div>

        <ModalConfirm
            v-model="showConfirmationModal"
            :title="$t('delete_account_confirmation_title')"
            :message="$t('delete_account_confirmation_message', { accountName: currentAccount.name })"
            :danger="true"
            :show-checkbox="true"
            :checkbox-label="$t('delete_account_confirmation_checkbox')"
            @confirmed="deleteAccount"
        />
        <ModalFormProfileUnlock
            v-if="hasAccountUnlockModal"
            :visible="hasAccountUnlockModal"
            :on-success="onAccountUnlocked"
            @close="hasAccountUnlockModal = false"
        />
        <ModalMetadataDisplay
            v-if="showMetadataDetailModal"
            :visible="showMetadataDetailModal"
            :metadata-list="accountMetadataList"
            @close="showMetadataDetailModal = false"
        />
        <ModalMetadataUpdate
            v-if="showUpdateMetadataModal && metadataEntry"
            :visible="showUpdateMetadataModal"
            :value="metadataEntry"
            :edit-mode="showUpdateMetadataModal"
            @close="showUpdateMetadataModal = false"
        />
    </div>
</template>

<script lang="ts">
import { AccountDetailsPageTs } from './AccountDetailsPageTs';
export default class AccountDetailsPage extends AccountDetailsPageTs {}
</script>

<style scoped>
.account-details {
    padding: 25px 8%;
}

.form-grid {
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 10px;
    row-gap: 8px;
    flex-grow: 1;
    padding-left: 15px;
}

.form-grid .label {
    white-space: nowrap;
    color: var(--clr-gray);
}
</style>