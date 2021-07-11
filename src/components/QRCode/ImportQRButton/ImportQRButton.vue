<template>
    <div>
        <slot name="trigger" :trigger="onClick">
            <div @click="onClick" class="navbar-item">
                <inline-svg :src="require('@/assets/icons/qrcode-scan.svg')" class="navbar-item-icon" />
                <!-- <img class="navbar-icon" src="@/views/resources/img/newicons/NavQRCode.svg" /> -->
                <span>{{ $t('import_qr_code') }}</span>
            </div>
        </slot>
        <ModalImportQR v-if="visible" :visible="visible" :valid-qr-types="validQrTypes" @close="onClose" />
    </div>
</template>

<script lang="ts">
import ImportQRButtonTs from './ImportQRButtonTs';

export default class ImportQRButton extends ImportQRButtonTs {}
</script>

<style lang="less" scoped>
// @import './ImportQRButton.less';
</style>

<style scoped>
.navbar-icon {
    fill: var(--clr-gray);
    font-size: 20px;
}
</style>
