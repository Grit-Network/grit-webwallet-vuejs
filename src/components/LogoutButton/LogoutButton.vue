<template>
    <div>
        <a class="navbar-item" @click="logout">
            <!-- <Icon type="md-log-out" /> -->
            <inline-svg :src="require('@/assets/icons/logoutpx.svg')" class="navbar-item-icon" />
            <span>{{ $t('logout') }}</span>
        </a>
    </div>
</template>
<script lang="ts">
import { LogoutButtonTs } from './LogoutButtonTs';
export default class LogoutButton extends LogoutButtonTs {}
</script>
<style lang="less" scoped>
// @import './LogoutButton.less';
</style>
