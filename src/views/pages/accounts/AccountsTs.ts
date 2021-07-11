/*
 * Copyright 2020 NEM (https://nem.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
// external dependencies
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

// internal dependencies
import { AddressBook } from 'symbol-address-book';
// child components
// @ts-ignore
import NavigationTabs from '@/components/NavigationTabs/NavigationTabs.vue';
// @ts-ignore
import AccountSelectorPanel from '@/components/AccountSelectorPanel/AccountSelectorPanel.vue';
// @ts-ignore
import ContactSelectorPanel from '@/components/ContactSelectorPanel/ContactSelectorPanel.vue';
// @ts-ignore
import ContactDetailPanel from '@/components/ContactDetailPanel/ContactDetailPanel.vue';
// @ts-ignore
import NavigationLinks from '@/components/NavigationLinks/NavigationLinks.vue';
// @ts-ignore
import ButtonAdd from '@/components/ButtonAdd/ButtonAdd.vue';
// @ts-ignore
import ModalMetadataUpdate from '@/views/modals/ModalMetadataUpdate/ModalMetadataUpdate.vue';
// @ts-ignore
import ModalAccountRestrictions from '@/views/modals/ModalAccountRestrictions/ModalAccountRestrictions.vue';
// @ts-ignore
import ModalConfirm from '@/views/modals/ModalConfirm/ModalConfirm.vue';
// @ts-ignore
import ModalFormSubAccountCreation from '@/views/modals/ModalFormSubAccountCreation/ModalFormSubAccountCreation.vue';
// @ts-ignore
import ModalBackupProfile from '@/views/modals/ModalBackupProfile/ModalBackupProfile.vue';
// @ts-ignore
import ModalImportAddressBook from '@/views/modals/ModalImportAddressBook/ModalImportAddressBook.vue';
// @ts-ignore
import ModalContactCreation from '@/views/modals/ModalContactCreation/ModalContactCreation.vue';
import { UIHelpers } from '@/core/utils/UIHelpers';

@Component({
    components: {
        NavigationTabs,
        AccountSelectorPanel,
        ContactSelectorPanel,
        ContactDetailPanel,
        NavigationLinks,
        ButtonAdd,
        ModalMetadataUpdate,
        ModalAccountRestrictions,
        ModalConfirm,
        ModalFormSubAccountCreation,
        ModalBackupProfile,
        ModalImportAddressBook,
        ModalContactCreation,
    },
    computed: {
        ...mapGetters({
            isPrivateKeyProfile: 'profile/isPrivateKeyProfile',
            addressBook: 'addressBook/getAddressBook',
        }),
    },
})
export class AccountsTs extends Vue {
    /**
     * Argument passed to the navigation component
     * @var {string}
     */
    public parentRouteName: string = 'accounts';

    public panelItems = ['accounts', 'addressbook'];

    public activeIndex = 0;

    public get activePanel() {
        return this.activeIndex;
    }
    public set activePanel(panel) {
        this.activeIndex = panel;
    }

    /**
     * Address book
     * @see {Store.addressBook}
     * @var {AddressBook}
     */
    public addressBook: AddressBook;

    /**
     * Show add metadata modal
     */
    public showMetadataModal: boolean = false;
    /**
     * Show confirm open restrictions
     */
    public showConfirmOpenRestrictionsModal: boolean = false;
    /**
     * Show add metadata modal
     */
    public showAccountRestrictionsModal: boolean = false;

    /**
     * Whether currently viewing export
     * @var {boolean}
     */
    public isViewingExportModal: boolean = false;

    /**
     * Whether user is currently adding an account (modal)
     * @var {boolean}
     */
    public isAddingAccount: boolean = false;

    /**
     * Whether currently viewing export
     * @var {boolean}
     */
    public isViewingExportModalContact: boolean = false;

    /**
     * Whether user is currently adding an account (modal)
     * @var {boolean}
     */
    public isAddingAccountContact: boolean = false;

    public hasImportProfileModal: boolean = false;

    public get hasBackupProfileModal(): boolean {
        return this.isViewingExportModal;
    }

    public set hasBackupProfileModal(f: boolean) {
        this.isViewingExportModal = f;
    }

    public get hasAddAccountModal(): boolean {
        return this.isAddingAccount;
    }

    public set hasAddAccountModal(f: boolean) {
        this.isAddingAccount = f;
    }

    public get hasBackupProfileModalContact(): boolean {
        return this.isViewingExportModalContact;
    }

    public set hasBackupProfileModalContact(f: boolean) {
        this.isViewingExportModalContact = f;
    }

    public get hasAddAccountModalContact(): boolean {
        return this.isAddingAccountContact;
    }

    public set hasAddAccountModalContact(f: boolean) {
        this.isAddingAccountContact = f;
    }

    public downloadAddressBook() {
        UIHelpers.downloadBytesAsFile(this.addressBook.toJSON(), `address-book.json`, 'application/json');
    }
}
