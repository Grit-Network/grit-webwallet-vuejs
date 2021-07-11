<template>
    <div>
        <a class="navbar-item" @click="toggleSettings">
            <!-- <img :src="settingsIcon" class="setting-menu-icon" /> -->
            <inline-svg :src="require('@/assets/icons/cog.svg')" class="navbar-item-icon" />
            <span>{{ $t('settings') }}</span>
        </a>
        <ModalSettings v-if="isSettingsVisible" :visible="isSettingsVisible" @close="toggleSettings" />
    </div>
</template>
<script lang="ts">
import { SettingsTs } from './SettingsTs';
export default class Settings extends SettingsTs {}
</script>
<style lang="less" scoped>
// @import './Settings.less';
</style>
