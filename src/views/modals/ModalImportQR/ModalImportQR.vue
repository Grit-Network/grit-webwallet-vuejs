<template>
    <div>
        <Modal v-model="show" class="modal-importqr-container" :title="$t('import_qr_code')" :footer-hide="true">
            <div class="flex mx-1 mb-1">
                <div class="w-6/12">
                    <ModalWizardDisplay
                        :items="wizardSteps.items"
                        :icons="wizardSteps.icons"
                        :current-item-index="wizardSteps.currentStepInx"
                        :valid-qr-types="validQrTypes"
                        :qrType="qrType"
                        :invalidType="invalidType"
                    >
                        <div v-if="wizardSteps.currentStepInx === 0" class="upload-qrcode-right-pane ml-3 mt-1 mb-1.5">
                            <div class="upload-qrcode-explanation">
                                {{ $t('upload_qr_code_explanation') }}
                            </div>
                            <ul class="mt-1 ml-1 list-disc">
                                <li v-if="validQrTypes.includes(1)" :class="qrType == 1 ? 'selected' : ''">
                                    {{ $t('upload_qr_code_explanation_type_contactqr') }}
                                </li>
                                <li v-if="validQrTypes.includes(3)" :class="qrType == 3 ? 'selected' : ''">
                                    {{ $t('upload_qr_code_explanation_type_transactionqr') }}
                                </li>
                                <li v-if="validQrTypes.includes(4)" :class="qrType == 4 ? 'selected' : ''">
                                    {{ $t('upload_qr_code_explanation_type_cosignatureqr') }}
                                </li>
                                <li v-if="validQrTypes.includes(5)" :class="qrType == 5 ? 'selected' : ''">
                                    {{ $t('upload_qr_code_explanation_type_mnemonicqr') }}
                                </li>
                                <li v-if="validQrTypes.includes(8)" :class="qrType == 8 ? 'selected' : ''">
                                    {{ $t('upload_qr_code_explanation_type_signedtransactionqr') }}
                                </li>
                                <li v-if="validQrTypes.includes(9)" :class="qrType == 9 ? 'selected' : ''">
                                    {{ $t('upload_qr_code_explanation_type_cosignaturesignedtransactionqr') }}
                                </li>
                                <li v-if="invalidType" class="selected">
                                    {{ $t('upload_qr_code_invalid_type_message', { type: qrType == 0 ? 'unknown' : qrType }) }}
                                </li>
                            </ul>
                        </div>

                        <div v-else-if="wizardSteps.currentStepInx === 1" id="stepPreview">
                            <QRCodePassword :qrcode-json="qrcodeJson" @qrCodeGenerated="onQrCodeGenerated" />
                            <QRCodeActions
                                v-if="!!qrCode"
                                :qr-code="qrCode"
                                show-preview="true"
                                :on-success="() => (show = false)"
                                :confirm-action="confirmAction"
                                :confirm-text="confirmText"
                            />
                        </div>
                    </ModalWizardDisplay>
                </div>

                <div class="w-6/12">
                    <!-- Step1: Upload -->
                    <div v-if="wizardSteps.currentStepInx === 0" id="stepUplad">
                        <UploadQRCode :valid-qr-types="validQrTypes" @uploadComplete="onUploadComplete" />
                    </div>
                    <!-- Step2: Preview -->
                </div>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts">
import { ModalImportQRTs } from './ModalImportQRTs';

export default class ModalImportQR extends ModalImportQRTs {}
</script>

<style lang="less" scoped>
@import './ModalImportQR.less';
</style>
