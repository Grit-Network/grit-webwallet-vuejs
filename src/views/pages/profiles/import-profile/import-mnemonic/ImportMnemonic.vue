<template>
    <div class="import-mnemonic pb-5 pt-9" @keyup.enter="submit">
        <p class="title">{{ $t('input_mnemonic') }}</p>
        <MnemonicInput :seed="importedMnemonic" @handle-words="setSeed" />

        <div class="flex justify-end mt-3">
            <button type="button" class="button gray mr-1.5 w-12 sm:w-10 lg:w-6" @click="deleteProfileAndBack">
                {{ $t('back') }}
            </button>
            <button
                type="submit"
                class="button primary w-12 sm:w-10 lg:w-6"
                :disabled="!(wordsArray.length === 12 || wordsArray.length === 24)"
                @click="processVerification"
            >
                {{ $t('next') }}
            </button>
        </div>
    </div>
    <!-- <div class="create-mnemonic-sec" @keyup.enter="submit">
        <p class="set-title">
            {{ $t('input_mnemonic') }}
        </p>
        <div class="input-mnemonic">
            <MnemonicInput :seed="importedMnemonic" @handle-words="setSeed" />
            <div class="form-line-container form-row">
                <div class="flex-container mt-3 buttons-container">
                    <button type="button" class="solid-button button-style create-account-style" @click="deleteProfileAndBack">
                        {{ $t('back') }}
                    </button>
                    <ImportQRButton valid-qr-types="[5]">
                        <template v-slot:trigger="importQRButton">
                            <button
                                type="button"
                                class="button-style import-qr-button create-account-style"
                                @click="importQRButton.trigger"
                            >
                                {{ $t('from_qr_code') }}
                            </button>
                        </template>
                    </ImportQRButton>
                    <button
                        type="submit"
                        class="button-style inverted-button create-account-style"
                        :disabled="!(wordsArray.length === 12 || wordsArray.length === 24)"
                        @click="processVerification"
                    >
                        {{ $t('next') }}
                    </button>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
import ImportMnemonicTs from './ImportMnemonicTs';

export default class ImportMnemonic extends ImportMnemonicTs {}
</script>
<style lang="less" scoped>
// @import './ImportMnemonic.less';
</style>

<style scoped>
.import-mnemonic {
    width: 100%;
}

.title {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 28px;
}

@media screen and (min-width: 960px) {
    .import-mnemonic {
        width: 90%;
    }
}

@media screen and (min-width: 1380px) {
    .import-mnemonic {
        width: 80%;
    }
}
</style>