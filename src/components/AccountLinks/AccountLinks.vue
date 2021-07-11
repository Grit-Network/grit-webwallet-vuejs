<template>
    <div>
        <slot name="trigger">
            <a class="navbar-item" :href="link" target="_blank">
                <!-- <img class="navbar-icon" :src="icon" /> -->
                <inline-svg :src="require('@/assets/icons/web.svg')" class="navbar-item-icon" />

                <span>{{ title }}</span>
            </a>
        </slot>
    </div>
</template>

<script lang="ts">
import { AccountLinksTs } from './AccountLinksTs';

export default class AccountLinks extends AccountLinksTs {}
</script>

<style lang="less" scoped>
@import './AccountLinks.less';
</style>
