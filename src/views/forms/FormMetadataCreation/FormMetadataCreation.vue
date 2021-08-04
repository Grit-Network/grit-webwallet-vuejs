<template>
    <div class="p-1">
        <FormWrapper>
            <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
                <form autocomplete="off" class="form" onsubmit="event.preventDefault()">
                    <SignerSelector
                        v-if="!editMode"
                        v-model="formItems.signerAddress"
                        :signers="signers"
                        label="form_label_by_account"
                        @input="onChangeSigner"
                    />
                    <FormRow v-else>
                        <template v-slot:label>
                            <div class="mb-[5px]">{{ $t('form_label_by_account') }}</div>
                        </template>
                        <template v-slot:inputs>
                            <div class="select-container">
                                <input
                                    v-model="formItems.signerAddress"
                                    :disabled="editMode"
                                    class="input-size input-style"
                                    :placeholder="$t('form_label_by_account')"
                                    type="text"
                                />
                            </div>
                        </template>
                    </FormRow>
                    <FormRow v-if="showTargetAccount">
                        <template v-slot:label>
                            <div class="mt-1 mb-[5px]">
                                {{ $t('form_label_target_account') }}
                            </div>
                        </template>
                        <template v-slot:inputs>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="targetAccount"
                                mode="lazy"
                                :name="$t('target_account_invalid_name')"
                                :rules="`required|${validationRules.addressOrPublicKey}`"
                                tag="div"
                                class="row-metadata-input input-container"
                            >
                                <ErrorTooltip :errors="errors">
                                    <input
                                        v-model="formItems.targetAccount"
                                        :disabled="editMode"
                                        class="form-input"
                                        :placeholder="$t('form_label_target_account_hint')"
                                        type="text"
                                    />
                                </ErrorTooltip>
                            </ValidationProvider>
                        </template>
                    </FormRow>
                    <FormRow v-if="type === MetadataType.Mosaic">
                        <template v-slot:label>
                            <div class="mt-1 mb-[5px]">{{ $t(targetLabel) }}</div>
                        </template>
                        <template v-slot:inputs>
                            <MosaicSelector
                                v-model="formItems.targetId"
                                :mosaic-hex-ids="ownedTargetHexIds"
                                default-mosaic="firstInList"
                                :disabled="editMode"
                                :attached="false"
                            />
                        </template>
                    </FormRow>
                    <div v-if="type === MetadataType.Namespace">
                        <NamespaceSelector
                            v-model="formItems.targetId"
                            :namespaces="ownedTargetHexIds"
                            :disable-linked="false"
                            :label="$t(targetLabel)"
                            :disabled="editMode"
                        />
                    </div>
                    <FormRow v-if="editMode">
                        <template v-slot:label>
                            <div class="mt-1 mb-[5px]">{{ $t('form_label_scoped_metadata_key') }}</div>
                        </template>
                        <template v-slot:inputs>
                            <input
                                v-if="type == MetadataType.Account"
                                v-model="formItems.scopedKey"
                                :disabled="editMode"
                                class="form-input"
                                :placeholder="$t('form_label_scoped_metadata_key_hint')"
                                type="text"
                            />
                            <Select v-else v-model="chosenValue" class="select-size select-style">
                                <Option
                                    v-for="metadataModel in metadataList"
                                    :key="metadataModel.metadataId"
                                    :value="metadataModel.metadataId"
                                >
                                    {{ `${metadataModel.scopedMetadataKey} : ${metadataModel.value}` }}
                                </Option>
                            </Select>
                        </template>
                    </FormRow>
                    <FormRow>
                        <template v-slot:label>
                            <div class="mt-1 mb-[5px]">
                                {{ $t('form_label_value') }}
                            </div>
                        </template>
                        <template v-slot:inputs>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="value"
                                mode="lazy"
                                :name="$t('form_label_value')"
                                :rules="'required'"
                                tag="div"
                                class="row-metadata-input value-container"
                            >
                                <ErrorTooltip :errors="errors">
                                    <textarea
                                        v-model="formItems.metadataValue"
                                        class="form-input textarea text-black"
                                        :placeholder="$t('form_label_value_hint')"
                                    />
                                </ErrorTooltip>
                            </ValidationProvider>
                        </template>
                    </FormRow>
                    <MaxFeeAndSubmit
                        v-model="formItems.maxFee"
                        :disable-submit="!hasFormAnyChanges"
                        @button-clicked="handleSubmit(onSubmit)"
                    />
                </form>
            </ValidationObserver>
        </FormWrapper>
        <ModalTransactionConfirmation
            v-if="hasConfirmationModal"
            :command="command"
            :visible="hasConfirmationModal"
            @success="onConfirmationSuccess"
            @error="onConfirmationError"
            @close="onConfirmationCancel"
        />
    </div>
</template>

<script lang="ts">
import { FormMetadataCreationTs } from './FormMetadataCreationTs';
export default class FormMetadataCreation extends FormMetadataCreationTs {}
</script>

<style scoped>
/deep/.ivu-select-selected-value {
    color: black;
}
</style>
