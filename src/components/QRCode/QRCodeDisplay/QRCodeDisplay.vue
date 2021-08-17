<template>
    <div class="qrcode-display">
        <div v-if="header !== ''" class="qrcode-display-header">{{ $t(header) }}</div>
        <img :src="qrCodeBase64$" :alt="$t(alt)" @click="copyAsText" />
        <div v-if="showDownload" class="qrcode-display-footer">
            <slot name="download">
                <a :href="qrCodeBase64$" :download="downloadName" class="download-link">
                    <Icon :type="'md-download'" size="17" /> {{ $t('button_download_qr') }}
                </a>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import QRCodeDisplayTs from './QRCodeDisplayTs';
export default class QRCodeDisplay extends QRCodeDisplayTs {}
</script>
<style lang="less" scoped>
// @import './QRCodeDisplay.less';
</style>

<style scoped>
.qrcode-display {
    width: 120px;
}
.qrcode-display img {
    width: 100%;
}

.qrcode-display-header,
.qrcode-display-footer {
    color: var(--clr-gray);
    font-size: 12px;
    text-align: center;
}

.qrcode-display-header {
    margin-bottom: 3px;
}

.qrcode-display-footer {
    display: flex;
}

.download-link {
    margin: 0 auto;
    margin-top: 5px;
}

.download-link:link:hover {
    color: var(--clr-blue);
}
</style>