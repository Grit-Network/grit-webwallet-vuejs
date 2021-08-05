<template>
    <div>
        <Modal
            v-model="show"
            class-name="modal-transaction-confirmation"
            :title="$t('modal_title_transaction_confirmation')"
            :transfer="false"
        >
            <div class="p-[10px] pt-0">
                <div v-if="!!stagedTransactions" class="stepItem1">
                    <div class="info_container">
                        <div v-for="(transaction, index) in stagedTransactions" :key="index">
                            <TransactionDetails :transaction="transaction" />
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer" class="p-[10px]">
                <HardwareConfirmationButton v-if="isUsingHardwareWallet" @success="onSigner" @error="onError" />
                <FormProfileUnlock v-else @success="onAccountUnlocked" @error="onError" />
            </div>
        </Modal>
    </div>
</template>

<script lang="ts">
import { ModalTransactionConfirmationTs } from './ModalTransactionConfirmationTs';
export default class ModalTransactionConfirmation extends ModalTransactionConfirmationTs {}
</script>

