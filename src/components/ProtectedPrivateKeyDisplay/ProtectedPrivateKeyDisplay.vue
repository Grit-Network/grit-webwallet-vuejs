<template>
    <div class="contents">
        <span v-if="$route.fullPath !== '/delegatedHarvesting'" class="text-gray">{{ $t('private_key') }}</span>
        <span v-if="hasPlainPrivateKey" class="flex justify-between">
            <div class="break-all">{{ plainInformation }}</div>
            <ButtonCopyToClipboard v-model="plainInformation" />
        </span>

        <div v-else>
            <Tooltip
                v-if="!hasPrivateKey"
                word-wrap
                placement="bottom"
                class="linked-label not-linked-input"
                :content="$t('please_link_your_public_key')"
            >
                <div class="form-input flex justify-between">
                    <div class="text-gray">{{ $t('not_linked') }}</div>
                    <!-- <inline-svg
                        :src="require('@/assets/icons/link.svg')"
                        @click="handleSubmit(onSingleKeyOperation('account'))"
                        class="cursor-pointer"
                    /> -->
                </div>
            </Tooltip>
            <div v-else class="value">
                <button type="button" class="text-white" @click="onClickDisplay">
                    {{ $t('show_button') }}
                </button>
            </div>
        </div>
        <ModalFormProfileUnlock
            v-if="hasAccountUnlockModal"
            :visible="hasAccountUnlockModal"
            :on-success="onAccountUnlocked"
            @close="hasAccountUnlockModal = false"
        />
    </div>
</template>

<script>
import { ProtectedPrivateKeyDisplayTs } from './ProtectedPrivateKeyDisplayTs';
export default class ProtectedPrivateKeyDisplay extends ProtectedPrivateKeyDisplayTs {}
</script>

<style lang="less" scoped>
// @import './../../views/resources/css/variables.less';

// .show-button {
//     border: none !important;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: transparent;
//     color: @purpleLightest;
// }

// .timer-span {
//     padding-left: 8px;
// }

// .value {
//     font-family: @symbolFontLight;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     color: #44004e;
// }

// .account-detail-row-3cols {
//     display: grid;
//     grid-template-columns: 1.4rem 5rem auto;
// }

// .account-detail-harvesting {
//     display: grid;
//     grid-template-columns: 5rem auto;
// }

// .not-linked-input {
//     padding-left: 0.15rem;
//     padding-top: 4px;
// }
</style>
