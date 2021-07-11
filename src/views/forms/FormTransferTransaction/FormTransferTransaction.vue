<template>
    <div class="form">
        <FormWrapper>
            <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
                <form onsubmit="event.preventDefault()">
                    <div v-if="showTransactionActions" class="flex justify-end mb-2">
                        <a @click="isImportTransactionUriModalVisible = true" class="import-transaction-uri">
                            <!--<Icon type="md-arrow-round-down" />-->{{ $t('import_transaction_uri') }}
                        </a>
                    </div>

                    <!-- Transaction signer selector -->
                    <SignerSelector
                        v-if="!hideSigner && !isOfflineMode"
                        v-model="formItems.signerAddress"
                        :signers="signers"
                        @input="onChangeSigner"
                    />
                    <AccountSignerSelector v-if="!hideSigner && isOfflineMode" />

                    <!-- Transfer recipient input field -->
                    <RecipientInput v-model="formItems.recipientRaw" @input="onChangeRecipient" />

                    <!-- Mosaics attachments input fields -->
                    <div v-for="(attachedMosaic, index) in formItems.attachedMosaics" :key="index" class="mt-1">
                        <MosaicAttachmentInput
                            v-if="attachedMosaic && attachedMosaic.uid"
                            :mosaic-attachment="attachedMosaic"
                            :mosaic-hex-ids="mosaicInputsManager.getMosaicsBySlot(attachedMosaic.uid)"
                            :absolute="false"
                            :uid="attachedMosaic.uid"
                            :is-show-delete="index > 0 && index === formItems.attachedMosaics.length - 1"
                            :is-first-item="index === 0"
                            @input-changed="onMosaicInputChange"
                            @input-deleted="onDeleteMosaicInput"
                        />
                    </div>

                    <!-- Add mosaic button -->
                    <div v-if="mosaicInputsManager.hasFreeSlots()" class="form-row align-right action-link" style="margin-top: -0.1rem">
                        <a
                            v-if="mosaicInputsManager.hasFreeSlots()"
                            style="color: #44004e; margin-right: 0.1rem; font-size: 0.14rem"
                            @click="addMosaicAttachmentInput"
                            >{{ $t('add_mosaic') }}</a
                        >
                        <img
                            src="@/views/resources/img/newicons/Add.svg"
                            class="icon-left-button clickable"
                            style="vertical-align: middle"
                            @click="addMosaicAttachmentInput"
                        />
                    </div>

                    <div class="flex mt-1.5">
                        <div class="w-6/12">
                            <!-- Transfer message input field -->
                            <MessageInput v-model="formItems.messagePlain" @input="onChangeMessage" />
                            <FormRow v-if="!selectedSigner.multisig && !isAggregate && !isLedger && !hideEncryption">
                                <template v-slot:inputs>
                                    <div class="mt-0.5">
                                        <Checkbox v-model="formItems.encryptMessage" @input="onEncryptionChange">
                                            {{ $t('encrypt_message') }}
                                        </Checkbox>
                                    </div>
                                </template>
                            </FormRow>
                        </div>

                        <div class="w-6/12 ml-1">
                            <!-- Transaction fee selector and submit button -->
                            <MaxFeeAndSubmit
                                v-if="!isAggregate"
                                v-model="formItems.maxFee"
                                :hide-submit="hideSubmit"
                                :submit-button-text="submitButtonText"
                                :calculated-recommended-fee="calculatedRecommendedFee"
                                :disable-submit="currentAccount.isMultisig"
                                :size="transactionSize"
                                @button-clicked="handleSubmit(onSubmit)"
                                @input="onChangeMaxFee"
                            />
                            <div v-else-if="!hideSave" class="ml-2" style="text-align: right">
                                <button
                                    type="submit"
                                    class="save-button centered-button button-style inverted-button"
                                    :disabled="currentAccount.isMultisig"
                                    @click="emitToAggregate"
                                >
                                    {{ $t('save') }}
                                </button>
                            </div>

                            <!-- Transaction URI display-->
                            <FormRow v-if="transactions && transactions.length > 0" class="transaction-uri-display-row">
                                <template v-slot:inputs>
                                    <TransactionUriDisplay :transaction="transactions[0]" />
                                </template>
                            </FormRow>
                        </div>
                    </div>
                </form>
            </ValidationObserver>

            <ModalTransactionConfirmation
                v-if="hasConfirmationModal"
                :command="command"
                :visible="hasConfirmationModal"
                @transaction-signed="onSignedOfflineTransaction"
                @success="onConfirmationSuccess"
                @error="onConfirmationError"
                @close="onConfirmationCancel"
            />

            <ModalTransactionUriImport
                v-if="isImportTransactionUriModalVisible"
                :visible="isImportTransactionUriModalVisible"
                @close="onImportTransactionURIModalClose"
                @importTransaction="onImportTransaction"
            />

            <ModalFormProfileUnlock
                v-if="hasAccountUnlockModal"
                :visible="hasAccountUnlockModal"
                :on-success="onAccountUnlocked"
                @close="closeAccountUnlockModal"
            />
        </FormWrapper>

        <!-- force mosaic list reactivity -->
        <div v-show="false">{{ currentMosaicList() }}</div>
    </div>
</template>

<script lang="ts">
import { FormTransferTransactionTs } from './FormTransferTransactionTs';
export default class FormTransferTransaction extends FormTransferTransactionTs {}
</script>

<style lang="less" scoped>
.import-transaction-uri {
    color: var(--clr-gray);
    font-weight: 500;
}

.import-transaction-uri:hover {
    color: var(--clr-blue);
}
</style>
