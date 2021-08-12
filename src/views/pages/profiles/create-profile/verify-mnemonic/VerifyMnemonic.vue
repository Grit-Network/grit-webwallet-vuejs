<template>
    <div class="verify-mnemonic">
        <div class="title">{{ $t('verify_mnemonics') }}</div>
        <MnemonicVerification
            :words="mnemonicWordsList"
            @success="$router.push({ name: 'profiles.createProfile.finalize' })"
            @cancelled="$router.back()"
        />
    </div>
    <!-- <div class="check-mnemonic-sec">
        <p class="set-title-create">
            {{ $t('verify_mnemonics') }}
        </p>
        <div class="check-mnemonic-col">
            <div class="check-mnemonic-left">
                <MnemonicVerification
                    :words="mnemonicWordsList"
                    @success="$router.push({ name: 'profiles.createProfile.finalize' })"
                    @cancelled="$router.back()"
                />
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
import VerifyMnemonicTs from './VerifyMnemonicTs';
export default class VerifyMnemonic extends VerifyMnemonicTs {}
</script>
<style lang="less" scoped>
// @import './VerifyMnemonic.less';
</style>

<style scoped>
.verify-mnemonic {
    padding-top: 90px;
    padding-bottom: 30px;
    width: 80%;
}

.title {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 20px;
}

@media screen and (min-width: 960px) {
    .verify-mnemonic {
        padding-top: 130px;
    }
}

@media screen and (min-width: 1380px) {
    .verify-mnemonic {
        width: 70%;
    }
}
</style>
