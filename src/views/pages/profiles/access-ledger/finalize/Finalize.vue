<template>
    <div class="finalize" @keyup.enter="$router.push({ name: 'dashboard' })">
        <div class="primary-title">CONGRATULATIONS, the profile was created successfully!</div>

        <div class="title">{{ $t('safe_storage_tips') }}</div>

        <ul class="mb-3">
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('save_backups') }}</li>
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('do_not_share_mnemonics_with_anyone') }}</li>
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('phishing_warning') }}</li>
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('if_you_need_to_backup_your_mnemonics_again_you_can') }}</li>
        </ul>

        <Checkbox v-model="marked">
            <span class="checkbox-label ml-0.5">
                {{ $t('i_accept') }}
                <a href="#/terms" class="text-blue">{{ $t('terms_and_conditions') }}</a>
                &
                <a href="#/privacy" class="text-blue">{{ $t('privacy_policy') }}</a
                >.
            </span>
        </Checkbox>

        <div class="mt-4 flex justify-end">
            <button class="button gray mr-1.5 w-6" @click="$router.push({ name: 'profiles.importProfile.walletSelection' })">
                {{ $t('back') }}
            </button>
            <button class="button primary w-6" :disabled="!marked" @click="finish">
                {{ $t('finish') }}
            </button>
        </div>
    </div>
    <!-- <div class="finish-sec" @keyup.enter="$router.push({ name: 'dashboard' })">
        <div class="finish-col">
            <div class="finish-left">
                <p class="text1">
                    {{ $t('terms_and_conditions') }}
                </p>

                <div class="checkbox">
                    <Checkbox v-model="marked">
                        <span class="checkbox-label">
                            {{ $t('i_accept') }}
                            <a href="#/terms">{{ $t('terms_and_conditions') }}</a>
                            &
                            <a href="#/privacy">{{ $t('privacy_policy') }}</a
                            >.
                        </span>
                    </Checkbox>
                </div>
                <div class="jump-btn">
                    <button
                        class="solid-button button-style create-account-style"
                        @click="$router.push({ name: 'profiles.importProfile.walletSelection' })"
                    >
                        {{ $t('back') }}
                    </button>
                    <button class="inverted-button solid-button button-style create-account-style" :disabled="!marked" @click="finish">
                        {{ $t('finish') }}
                    </button>
                </div>
            </div>
            <Spin v-if="isLoading" size="large" fix class="absolute" />
        </div>
    </div> -->
</template>

<script>
import FinalizeTs from './FinalizeTs';

export default class Finalize extends FinalizeTs {}
</script>
<style lang="less" scoped>
// @import './Finalize.less';
</style>

<style scoped>
.primary-title {
    color: var(--clr-blue);
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 40px;
}

.title {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 20px;
}

li + li {
    margin-top: 1.1em;
}

li {
    display: flex;
    column-gap: 10px;
    align-items: flex-start;
}

li img {
    vertical-align: middle;
    margin-top: 5px;
}
</style>
