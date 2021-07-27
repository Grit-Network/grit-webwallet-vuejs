<template>
    <FormWrapper>
        <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
            <form onsubmit="event.preventDefault()" class="form">
                <div>
                    <span class="text-gray mr-1">{{ $t('form_label_multisig_operation_type') }}:</span>
                    <span>{{ $t('label_multisig_operation_' + multisigOperationType) }}</span>
                </div>

                <FormRow>
                    <template v-slot:label>
                        <div v-if="multisigOperationType === 'conversion'" class="mt-0.5 mb-[3px]">
                            {{ $t('form_label_account_to_be_converted') }}
                        </div>
                        <div v-else class="mt-0.5 mb-[3px]">{{ $t('form_label_multisig_account') }}:</div>
                    </template>

                    <template v-slot:inputs>
                        <SignerSelector v-model="formItems.signerAddress" :signers="signers" :no-label="true" @input="onChangeSigner" />
                    </template>
                </FormRow>

                <FormRow v-if="multisigOperationType === 'modification' && currentMultisigInfo" :class-name="'emphasis'">
                    <template v-slot:label> {{ $t('form_label_multisig_current_info') }}: </template>

                    <template v-slot:inputs>
                        <div class="row-left-message">
                            <span class="pl-2">
                                {{
                                    $t('label_of', {
                                        min: currentMultisigInfo.minApproval,
                                        max: currentMultisigInfo.cosignatoryAddresses.length,
                                    })
                                }}
                                {{ $t('label_for_approvals') }}
                            </span>
                            <span class="pl-2">
                                {{
                                    $t('label_of', {
                                        min: currentMultisigInfo.minRemoval,
                                        max: currentMultisigInfo.cosignatoryAddresses.length,
                                    })
                                }}
                                {{ $t('label_for_removals') }}
                            </span>
                        </div>
                    </template>
                </FormRow>

                <MultisigCosignatoriesDisplay
                    :multisig="currentMultisigInfo"
                    :cosignatory-modifications="formItems.cosignatoryModifications"
                    :modifiable="true"
                    :current-address="formItems.signerAddress"
                    @remove="onClickRemove"
                    @add="onClickAdd"
                    @undo="onClickUndo"
                />

                <div class="flex flex-wrap -mx-0.5">
                    <div class="md:w-6/12 px-0.5 w-full">
                        <ApprovalAndRemovalInput
                            v-model="formItems.minApprovalDelta"
                            :type="'approval'"
                            :operation="multisigOperationType"
                            :multisig="currentMultisigInfo"
                        />
                    </div>

                    <div class="md:w-6/12 px-0.5 w-full">
                        <ApprovalAndRemovalInput
                            v-model="formItems.minRemovalDelta"
                            :type="'removal'"
                            :operation="multisigOperationType"
                            :multisig="currentMultisigInfo"
                        />
                    </div>
                </div>

                <!-- global form input validation -->
                <ValidationProvider rules="required|is:OK">
                    <input v-show="false" v-model="areInputsValid" />
                </ValidationProvider>

                <div class="mt-1"></div>
                <!-- Transaction fee selector -->
                <MaxFeeAndSubmit
                    v-model="formItems.maxFee"
                    :disable-submit="!hasFormAnyChanges"
                    @button-clicked="
                        hideSubmit ? '' : handleSubmit(onSubmit);
                        showErrorNotification();
                    "
                />
            </form>
        </ValidationObserver>

        <ModalTransactionConfirmation
            v-if="hasConfirmationModal"
            :command="command"
            :visible="hasConfirmationModal"
            @success="onConfirmationSuccess"
            @error="onConfirmationError"
            @close="onConfirmationCancel"
        />
    </FormWrapper>
</template>

<script lang="ts">
// internal dependencies
import { FormMultisigAccountModificationTransactionTs } from './FormMultisigAccountModificationTransactionTs';

export default class FormMultisigAccountModificationTransaction extends FormMultisigAccountModificationTransactionTs {}
</script>
<style lang="less" scoped>
/deep/ .form-row {
    .form-row-inner-container {
        grid-template-columns: 3.35rem 8rem;
    }
}

/deep/.multisig_ban_container {
    padding-left: 0.7rem;
    width: 11.35rem;

    .is_multisig {
        width: 11.35rem;
    }
}
</style>
