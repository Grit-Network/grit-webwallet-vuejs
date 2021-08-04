<template>
    <div>
        <Modal v-model="show" class="settings-modal-container" :title="$t('settings')" :footer-hide="true">
            <div class="settings-container">
                <NavigationLinks
                    class="settings-tabs-container"
                    :items="availableTabs"
                    :current-item-index="currentTabIndex"
                    @selected="onTabChange"
                />

                <div class="mt-2">
                    <FormGeneralSettings v-if="knownTabs[currentTabIndex] === 'GENERAL' && !!currentAccount" @close="close" />

                    <FormProfilePasswordUpdate v-if="knownTabs[currentTabIndex] === 'PASSWORD' && !!currentAccount" />

                    <FormNodeEdit v-if="knownTabs[currentTabIndex] === 'NETWORK' || !currentAccount" />

                    <AboutPage v-if="knownTabs[currentTabIndex] === 'ABOUT' && !!currentAccount" />
                </div>
            </div>
        </Modal>
    </div>
</template>
<script lang="ts">
import { ModalSettingsTs } from './ModalSettingsTs';
export default class ModalSettings extends ModalSettingsTs {}
</script>


<style scoped>
/deep/.ivu-modal {
    width: 10rem !important;
}

.settings-container {
    padding: 0 10px;
    padding-bottom: 17px;
}
</style>
