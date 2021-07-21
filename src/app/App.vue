<template>
    <div id="app" class="mac app">
        <div class="content">
            <span v-if="web" class="web-warning-panel">{{ $t('web_wallet_warning') }}</span>
            <!-- <div class="version-panel">
            {{ $t('version') }}: <b>{{ packageVersion }}</b>
        </div> -->

            <router-view />
            <DisabledUiOverlay />
            <SpinnerLoading v-if="hasLoadingOverlay" />
        </div>
    </div>
</template>

<style src="../views/resources/styles/base.css"></style>
<style src="../views/resources/styles/variables.css"></style>
<style src="../views/resources/styles/utilities.css"></style>

<style src="../views/resources/styles/components/form.css"></style>
<style src="../views/resources/styles/components/button.css"></style>
<style src="../views/resources/styles/components/navbar.css"></style>
<style src="../views/resources/styles/components/panel.css"></style>
<style src="../views/resources/styles/components/table.css"></style>

<style src="../views/resources/styles/overrides/ivu.css"></style>
<style src="../views/resources/styles/overrides/ivu-select.css"></style>
<style src="../views/resources/styles/overrides/ivu-auto-complete.css"></style>
<style src="../views/resources/styles/overrides/ivu-modal.css"></style>

<style src="../views/resources/fonts/Montserrat/Montserrat.css"></style>
<style scoped src="./App.css"></style>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script lang="ts">
import 'animate.css';
import { AppTs } from '@/app/AppTs.ts';
export default class App extends AppTs {}
</script>

<style lang="less">
// @import '../views/resources/css/common.less';
// @import '../views/resources/css/forms.less';
// @import '../views/resources/css/modals.less';
// @import '../views/resources/css/text.less';
</style>
