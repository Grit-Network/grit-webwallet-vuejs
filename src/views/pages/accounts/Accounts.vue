<template>
    <div class="flex gap-x-1.5">
        <div class="panel w-6/12">
            <div class="header">
                <div class="title">{{ $t('tab_accounts_accounts') }}</div>

                <div class="flex">
                    <button class="button-icon mr-1" @click="hasAddAccountModal = true">
                        <inline-svg :src="require('@/assets/icons/plus-circle.svg')" />
                        {{ $t('button_add_account') }}
                    </button>

                    <button v-if="!isPrivateKeyProfile" @click="hasBackupProfileModal = true" class="button-icon">
                        <inline-svg :src="require('@/assets/icons/download-circle.svg')" />
                        {{ $t('backup_profile') }}
                    </button>
                </div>

                <ModalFormSubAccountCreation v-if="hasAddAccountModal" :visible="hasAddAccountModal" @close="hasAddAccountModal = false" />

                <ModalBackupProfile v-if="hasBackupProfileModal" :visible="hasBackupProfileModal" @close="hasBackupProfileModal = false" />
            </div>
            <AccountSelectorPanel />
            <!-- <router-view /> -->
        </div>
        <div class="panel w-6/12">
            <div class="header">
                <div class="title">{{ $t('tab_accounts_addressbook') }}</div>

                <div class="flex">
                    <button class="button-icon mr-1" @click="hasAddAccountModalContact = true">
                        <inline-svg :src="require('@/assets/icons/plus-circle.svg')" />
                        {{ $t('button_add_account') }}
                    </button>

                    <button v-if="addressBook.getAllContacts().length === 0" @click="hasImportProfileModal = true" class="button-icon">
                        <inline-svg :src="require('@/assets/icons/import.svg')" />
                        {{ $t('import_address_book') }}
                    </button>
                </div>

                <ModalContactCreation
                    v-if="hasAddAccountModalContact"
                    :visible="hasAddAccountModalContact"
                    @close="hasAddAccountModalContact = false"
                />
                <ModalImportAddressBook
                    v-if="hasImportProfileModal"
                    :visible="hasImportProfileModal"
                    @close="hasImportProfileModal = false"
                />
            </div>
            <ContactSelectorPanel />
        </div>
    </div>
    <!-- <div class="accounts-main-container">
        <div class="left-container">
            <div :class="[activePanel === 0 ? 'left-top-container' : 'left-top-full-container']">
                <div class="account-switch-container">
                    <NavigationLinks
                        :direction="'horizontal'"
                        :items="panelItems"
                        :current-item-index="activePanel"
                        translation-prefix="tab_accounts_"
                        @selected="(i) => (activePanel = i)"
                    />
                    <AccountSelectorPanel v-if="activePanel === 0" />
                    <ContactSelectorPanel v-if="activePanel === 1" />
                </div>
            </div>
        </div>
        <div v-if="activePanel === 0" class="right-container">
            <div class="header-container">
                <NavigationTabs direction="horizontal" :parent-route-name="parentRouteName" />

                <Poptip placement="bottom-end" class="endpoint-poptip">
                    <div class="button-container">
                        <div class="header-end">
                            <ButtonAdd :disabled="false" />
                        </div>
                    </div>
                    <div slot="content" class="node-selector-container">
                        <div class="node-list-container">
                            <div class="node-list-content">
                                <ul v-auto-scroll="'active'">
                                    <li class="list-item pointer" @click="showMetadataModal = true">{{ $t('add_metadata') }}</li>
                                    <li class="list-item pointer" @click="showConfirmOpenRestrictionsModal = true">
                                        {{ $t('add_account_restrictions') }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Poptip>
            </div>

            <div class="bottom-container">
                <router-view />
            </div>
        </div>
        <div v-if="activePanel === 1" class="right-container">
            <div class="header-container">
                <div class="tabs horizontal">
                    <span class="tab-item active">{{ $t('contact_information') }}</span>
                </div>
            </div>
            <div class="bottom-container">
                <ContactDetailPanel />
            </div>
        </div>
        <ModalMetadataUpdate v-if="showMetadataModal" :visible="showMetadataModal" @close="showMetadataModal = false" />
        <ModalConfirm
            v-model="showConfirmOpenRestrictionsModal"
            :title="$t('open_restrictions_warning_title')"
            :message="$t('open_restrictions_warning_text')"
            @confirmed="showAccountRestrictionsModal = true"
        />
        <ModalAccountRestrictions
            v-if="showAccountRestrictionsModal"
            :visible="showAccountRestrictionsModal"
            @close="showAccountRestrictionsModal = false"
        />
    </div> -->
</template>

<script lang="ts">
import { AccountsTs } from './AccountsTs';
export default class Accounts extends AccountsTs {}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 17px 23px;
}

.title {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
}
</style>
