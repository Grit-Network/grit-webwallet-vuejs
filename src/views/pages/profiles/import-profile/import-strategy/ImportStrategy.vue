<template>
    <div class="import-strategy">
        <img src="@/assets/images/background-arrow.png" alt="" class="background-arrow" />

        <div class="content">
            <img src="@/assets/images/logo.png" alt="" class="logo" />
            <div class="title">
                {{ $t('access_my_profile') }}
            </div>

            <div class="title-secondary">
                {{ $t('existing_profile') }}
                <span class="text-blue cursor-pointer" @click="$router.push({ name: 'profiles.login' })"> {{ $t('go_to_login') }}</span>
            </div>

            <div class="boxes">
                <div class="box" v-for="(item, index) in importInfoList" :key="index" @click="redirect(item.route)">
                    <div class="box-content">
                        <img src="@/assets/icons/create.png" alt="" v-if="index === 0" />
                        <img src="@/assets/icons/import.png" alt="" v-if="index === 1" />
                        <img src="@/assets/icons/dashboard.png" alt="" v-if="index === 2" />
                        <div class="box-title">{{ $t(item.title) }}</div>
                        <div class="box-description">{{ $t(item.description) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="import-way-wrapper radius">
        <div class="import-way-inner-panel">
            <div class="welcome-head">
                <p class="title">
                    {{ $t('access_my_profile') }}
                </p>
                <p class="title-tips">
                    {{ $t('existing_profile') }}
                    <span class="create-profile" @click="$router.push({ name: 'profiles.login' })">
                        {{ $t('go_to_login') }}
                    </span>
                </p>
            </div>
            <div class="profile-type">
                <div v-for="(item, index) in importInfoList" :key="index" class="profile-item" @click="redirect(item.route)">
                    <Tooltip v-if="item.title === 'access_ledger'" placement="top" :content="$t('ledger_available_on_standalone_app')">
                        <div>
                            <div class="img-box radius">
                                <img :src="item.image" />
                            </div>
                            <p class="access-name">
                                {{ $t(item.title) }}
                            </p>
                            <p class="access-info">
                                {{ $t(item.description) }}
                            </p>
                        </div>
                    </Tooltip>
                    <div v-else>
                        <div class="img-box radius">
                            <img :src="item.image" />
                        </div>
                        <p class="access-name">
                            {{ $t(item.title) }}
                        </p>
                        <p class="access-info">
                            {{ $t(item.description) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
import ImportStrategyTs from './ImportStrategyTs';
export default class ImportStrategy extends ImportStrategyTs {}
</script>
<style lang="less" scoped>
// @import './ImportStrategy.less';
</style>

<style scoped src="./ImportStrategy.css"></style>
