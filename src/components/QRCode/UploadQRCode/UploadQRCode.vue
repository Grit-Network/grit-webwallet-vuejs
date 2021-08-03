<template>
    <div>
        <qrcode-stream v-if="scanActive" @decode="onDecode"></qrcode-stream>

        <div v-else-if="!scanActive">
            <Upload :multiple="false" action="no action" type="drag" :before-upload="onBeforeUpload">
                <div class="flex justify-center items-center text-center h-full">
                    <div>
                        <div v-if="imageFileName" class="mb-1">
                            <img :src="image" class="w-8 mx-auto" />
                            <span>{{ imageFileName }}</span>
                        </div>

                        <inline-svg :src="require('@/assets/icons/cloud-upload.svg')" class="mx-auto mb-1" v-else />
                        <p>{{ $t(uploadFileMessage) }}</p>
                    </div>
                </div>
            </Upload>
            <qrcode-capture id="qrcodeCapture" ref="qrcodeCapture" name="qrcodeCapture" style="visibility: hidden" @decode="onDecode" />
        </div>

        <div class="text-center mb-1">or</div>

        <div class="flex justify-center">
            <div class="flex items-center gap-x-0.5 cursor-pointer" @click="scanActive = true">
                <inline-svg :src="require('@/assets/icons/camera.svg')"></inline-svg>
                {{ $t('upload_qr_tab_scan') }}
            </div>
        </div>

        <!-- <Tabs @on-click="onTabClick">
                <TabPane v-if="uploadEnabled == true" name="upload" :label="$t('upload_qr_tab_upload_image')" icon="md-cloud-upload">
                    <Upload :multiple="false" action="no action" type="drag" :before-upload="onBeforeUpload">
                        <div>
                            <div v-if="imageFileName" >
                                    <img :src="image" />
                                    <span>{{ imageFileName }}</span>
                            </div>

                            <Icon v-if="!imageFileName" type="ios-cloud-upload"></Icon>
                            <p>{{ $t(uploadFileMessage) }}</p>
                        </div>
                    </Upload>
                    <qrcode-capture
                        id="qrcodeCapture"
                        ref="qrcodeCapture"
                        name="qrcodeCapture"
                        style="visibility: hidden"
                        @decode="onDecode"
                    />
                </TabPane>
                <TabPane v-if="scanEnabled == true" name="scan" :label="$t('upload_qr_tab_scan')" icon="md-camera">
                    <qrcode-stream v-if="scanActive" @decode="onDecode"></qrcode-stream>
                </TabPane>
            </Tabs> -->
    </div>
</template>

<script lang="ts">
import UploadQRCodeTs from './UploadQRCodeTs';

export default class UploadQRCode extends UploadQRCodeTs {}
</script>

<style lang="less" scoped>
// @import './UploadQRCode.less';
</style>

<style scoped>
/deep/.ivu-upload-drag {
    height: 180px;
    border-style: solid;
    border-color: var(--clr-gray-dark);
    border-width: 1.5px;
}

/deep/.ivu-upload-drag:hover {
    border-color: var(--clr-blue);
}
</style>
