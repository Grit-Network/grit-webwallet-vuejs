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
// child components
// @ts-ignore
import ProfileBalancesPanel from '@/components/ProfileBalancesPanel/ProfileBalancesPanel.vue';
// @ts-ignore
import NetworkStatisticsPanel from '@/components/NetworkStatisticsPanel/NetworkStatisticsPanel.vue';
// @ts-ignore
import NavigationTabs from '@/components/NavigationTabs/NavigationTabs.vue';
// @ts-ignore
import MosaicAmountDisplay from '@/components/MosaicAmountDisplay/MosaicAmountDisplay.vue';
// @ts-ignore
import MosaicBalanceList from '@/components/MosaicBalanceList/MosaicBalanceList.vue';
// @ts-ignore
import ButtonCopyToClipboard from '@/components/ButtonCopyToClipboard/ButtonCopyToClipboard.vue';

import { ProfileModel } from '@/core/database/entities/ProfileModel';
import { Address } from 'symbol-sdk';
import { MosaicModel } from '@/core/database/entities/MosaicModel';
import { NetworkCurrencyModel } from '@/core/database/entities/NetworkCurrencyModel';
@Component({
    components: {
        ProfileBalancesPanel,
        NetworkStatisticsPanel,
        NavigationTabs,
        MosaicAmountDisplay,
        ButtonCopyToClipboard,
        MosaicBalanceList,
    },
    computed: {
        ...mapGetters({
            currentAccount: 'account/currentAccount',
            currentProfile: 'profile/currentProfile',
            currentSignerAddress: 'account/currentSignerAddress',
            balanceMosaics: 'mosaic/balanceMosaics',
            isCosignatoryMode: 'account/isCosignatoryMode',
            networkCurrency: 'mosaic/networkCurrency',
        }),
    },
})
export class DashboardTs extends Vue {
    /**
     * Terms and Conditions status
     * @see {currentProfile}
     * @var {PorfileModel}
     */
    public currentProfile: ProfileModel;
    /**
     * Currently active signer
     * @var {any}
     */
    public currentSignerAddress: Address;

    /**
     * Currently active account's balances
     * @var {Mosaic[]}
     */
    public balanceMosaics: MosaicModel[];

    /**
     * Whether currently active account is in cosignatory mode
     * @var {boolean}
     */
    public isCosignatoryMode: boolean;

    /**
     * Networks currency mosaic
     * @var {MosaicId}
     */
    public networkCurrency: NetworkCurrencyModel;
    /**
     * Argument passed to the Router Tab List
     */
    parentRouteName = 'dashboard';

    public async created() {
        this.$store.dispatch('mosaic/LOAD_MOSAICS');
    }

    public get absoluteBalance() {
        const networkMosaicData = this.balanceMosaics.filter((m) => m.isCurrencyMosaic).find((i) => i);
        return (networkMosaicData && networkMosaicData.balance) || 0;
    }
}
