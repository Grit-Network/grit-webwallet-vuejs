<template>
    <div class="layout">
        <div v-if="alert.show">
            <Alert class="alert warning_alert" type="error">
                <Icon type="ios-warning-outline" />
                {{ $t(`${alert.message}`) }}
                <a v-if="alert.showRetry" @click="reconnect">{{ $t('click_to_retry') }}</a>
            </Alert>
        </div>
        <div v-else-if="info.show">
            <Alert class="alert success_alert" type="success">
                <Icon type="ios-bulb-outline" />
                {{ $t(`${info.message}`) }}
            </Alert>
        </div>

        <div class="navbar">
            <div class="navbar-logo">
                <img src="@/assets/images/logo.png" alt="" />
                <div class="flex-grow"></div>
                <div class="navbar-burger">
                    <div class="navbar-burger-line"></div>
                    <div class="navbar-burger-line"></div>
                    <div class="navbar-burger-line"></div>
                </div>
                <!-- <AppLogo class="level-item" /> -->
            </div>

            <div class="navbar-right">
                <ImportQRButton v-if="!!currentAccount" valid-qr-types="[1, 3, 4, 8, 9]" />
                <AccountLinks
                    v-if="isTestnet"
                    :account="currentAccount"
                    :link="faucetUrl"
                    :icon="faucetIcon"
                    :title="$t('accounts_links_faucet')"
                />
                <AccountLinks :account="currentAccount" :link="explorerUrl" :icon="explorerIcon" :title="$t('accounts_links_explorer')" />

                <AccountSelectorField :enable-min-width="true" @input="onChangeAccount" />
                <Settings />
            </div>

            <LogoutButton />
        </div>

        <div class="flex flex-grow">
            <PageNavigator v-if="!$route.matched.map(({ name }) => name).includes('profiles')" />

            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
    <!-- <div class="layout">
        <div v-if="alert.show">
            <Alert class="alert warning_alert" type="error">
                <Icon type="ios-warning-outline" />
                {{ $t(`${alert.message}`) }}
                <a v-if="alert.showRetry" @click="reconnect">{{ $t('click_to_retry') }}</a>
            </Alert>
        </div>
        <div v-else-if="info.show">
            <Alert class="alert success_alert" type="success">
                <Icon type="ios-bulb-outline" />
                {{ $t(`${info.message}`) }}
            </Alert>
        </div>

        <div style="display: flex; width: 100%; height: 100%">
            <PageNavigator v-if="!$route.matched.map(({ name }) => name).includes('profiles')" />
            <div class="general_view" style="width: 100%">
                <div class="top_window level">
                    <div class="level-left">
                        <AppLogo class="level-item" />
                    </div>

                    OCA99: These are window controls for electron. Disabling them for now. Not sure if they should be here.
                    <WindowControls />

                    <div class="level-right">
                        <ImportQRButton v-if="!!currentAccount" class="level-item navbar-item" valid-qr-types="[1, 3, 4, 8, 9]" />
                        <AccountLinks
                            v-if="isTestnet"
                            :account="currentAccount"
                            :link="faucetUrl"
                            :icon="faucetIcon"
                            :title="$t('accounts_links_faucet')"
                            class="level-item navbar-item"
                        />
                        <AccountLinks
                            :account="currentAccount"
                            :link="explorerUrl"
                            :icon="explorerIcon"
                            :title="$t('accounts_links_explorer')"
                            class="level-item navbar-item"
                        />
                        <AccountSelectorField class="level-item navbar-item" :enable-min-width="true" @input="onChangeAccount" />
                        <Settings class="level-item navbar-item" />
                        <LogoutButton />
                    </div>
                </div>
                <transition name="fade" mode="out-in">
                    <div class="main-outer-container">
                        <router-view />
                    </div>
                </transition>
                <div class="footer">
                    <span class="footer-phrase">{{ $t('copyright') }}</span>
                </div>
            </div>
        </div>

        <ModalDebugConsole
            v-if="hasDebugConsoleModal"
            :visible="hasDebugConsoleModal"
            :title="$t('modal_title_debug_console')"
            @close="hasDebugConsoleModal = false"
        />
    </div> -->
</template>

<script lang="ts">
import { PageLayoutTs } from './PageLayoutTs';
export default class PageLayout extends PageLayoutTs {}
</script>
<style lang="less" scoped>
// @import './PageLayout.less';
</style>


<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--clr-primary);
    background-image: url('../../../assets/images/dashboard-background.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: auto 85%;
}

.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 35px;
    flex-shrink: 1;
    min-width: 0;
}
</style>