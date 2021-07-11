<template>
    <div class="finalize" @keyup.enter="submit">
        <div class="primary-title">CONGRATULATIONS, the profile was created successfully!</div>
        <div class="title">{{ $t('safe_storage_tips') }}</div>

        <ul class="ml-2">
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('save_backups') }}</li>
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('do_not_share_mnemonics_with_anyone') }}</li>
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('phishing_warning') }}</li>
            <li><img src="@/assets/icons/chevron-right.png" alt="" />{{ $t('if_you_need_to_backup_your_mnemonics_again_you_can') }}</li>
        </ul>

        <div class="mt-3">
            <Checkbox v-model="marked">
                <span class="checkbox-label ml-0.5">
                    {{ $t('i_accept') }}
                    <a href="#/terms" class="text-blue">{{ $t('terms_and_conditions') }}</a>
                    &
                    <a href="#/privacy" class="text-blue">{{ $t('privacy_policy') }}</a
                    >.
                </span>
            </Checkbox>
        </div>

        <div class="mt-4 flex justify-end">
            <button type="button" class="button gray w-6 mr-1.5" @click="$router.back()">
                {{ $t('back') }}
            </button>
            <button type="submit" class="button primary w-6" :disabled="isLoading || !marked" @click="submit">
                {{ $t('finish') }}
            </button>
            <Spin v-if="isLoading" size="large" fix class="absolute" />
        </div>
    </div>

    <!-- <div class="finish-sec scroll" @keyup.enter="submit">
        <div class="finish-col">
            <div class="finish-left">
                <p class="text1">
                    {{ $t('safe_storage_tips') }}
                </p>
                <ul class="ml-2">
                    <li class="text list-item-with-disc">{{ $t('save_backups') }}</li>
                    <li class="text list-item-with-disc">{{ $t('do_not_share_mnemonics_with_anyone') }}</li>
                    <li class="text list-item-with-disc">{{ $t('phishing_warning') }}</li>
                    <li class="text list-item-with-disc">{{ $t('if_you_need_to_backup_your_mnemonics_again_you_can') }}</li>
                </ul>
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
                <div class="buttons clear">
                    <div class="float-right">
                        <button type="button" class="solid-button button-style create-account-style" @click="$router.back()">
                            {{ $t('back') }}
                        </button>
                        <button
                            type="submit"
                            class="inverted-button button-style create-account-style"
                            :disabled="isLoading || !marked"
                            @click="submit"
                        >
                            {{ $t('finish') }}
                        </button>
                    </div>
                </div>
                <Spin v-if="isLoading" size="large" fix class="absolute" />
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
import FinalizeTs from './FinalizeTs';
export default class Finalize extends FinalizeTs {}
</script>
<style lang="less" scoped>
// @import './Finalize.less';
</style>

<style scoped>
.finalize {
    padding-top: 90px;
    padding-bottom: 30px;
}

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
