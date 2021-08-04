<template>
    <div class="about-container">
        <div class="grid">
            <div>{{ $t('about_app_release') }}</div>
            <div>{{ configs.package.description }} v{{ configs.package.version }}</div>

            <div>{{ $t('about_app_url') }}</div>
            <div>
                <a :href="configs.package.homepage" target="_blank">{{ configs.package.homepage }}</a>
            </div>
        </div>

        <div class="uppercase mt-1 text-blue font-semibold text-[15px]">
            {{ $t('about_network') }}
        </div>

        <div class="grid">
            <div>{{ $t('about_default_node') }}</div>
            <div>
                <a :href="nodeLink + '/node/info'" target="_blank">{{ nodeLink }}</a>
            </div>

            <div>{{ $t('about_network_type') }}</div>
            <div>
                <span v-if="isNetworkType(types.MAIN_NET)">MAINNET</span>
                <span v-else-if="isNetworkType(types.TEST_NET)">TESTNET</span>
                <span v-else-if="isNetworkType(types.MIJIN)">MIJIN</span>
                <span v-else-if="isNetworkType(types.MIJIN_TEST)">MIJIN_TEST</span>
            </div>

            <div>{{ $t('about_generation_hash') }}</div>
            <div class="break-all">{{ generationHash }}</div>
        </div>

        <div class="uppercase mt-1 text-blue font-semibold text-[15px]">
            {{ $t('about_dependencies') }}
        </div>

        <div class="grid">
            <div>{{ $t('about_sdk_version') }}</div>
            <div>{{ configs.packageLock.dependencies['symbol-sdk'].version }}</div>

            <div>{{ $t('about_typescript_version') }}</div>
            <div>{{ configs.packageLock.dependencies['typescript'].version }}</div>

            <div>{{ $t('about_rxjs_version') }}</div>
            <div>{{ configs.packageLock.dependencies['rxjs'].version }}</div>

            <div>{{ $t('about_vue_version') }}</div>
            <div>{{ configs.packageLock.dependencies['vue'].version }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { NetworkType } from 'symbol-sdk';
// child components
import FormWrapper from '@/components/FormWrapper/FormWrapper.vue';
import FormLabel from '@/components/FormLabel/FormLabel.vue';
// configuration
import { appConfig } from '@/config';
import { feesConfig } from '@/config';
import { networkConfig } from '@/config';
import packageConfig from '@/../package.json';
import packageLockConfig from '@/../package-lock.json';
import { mapGetters } from 'vuex';
import { NetworkModel } from '@/core/database/entities/NetworkModel';
import { URLInfo } from '@/core/utils/URLInfo';

@Component({
    components: {
        FormWrapper,
        FormLabel,
    },
    computed: {
        ...mapGetters({
            networkModel: 'network/networkModel',
            networkType: 'network/networkType',
            currentPeer: 'network/currentPeer',
        }),
    },
})
export default class AboutPage extends Vue {
    private networkModel: NetworkModel;

    public currentPeer: URLInfo;

    public configs = {
        package: packageConfig,
        packageLock: packageLockConfig,
        app: appConfig,
        fees: feesConfig,
        network: networkConfig,
    };
    public types = NetworkType;
    public networkType: NetworkType;

    public isNetworkType(type): boolean {
        return networkConfig[this.networkType].defaultNetworkType === type;
    }

    public get generationHash(): string {
        return this.networkModel.generationHash;
    }

    public get nodeLink(): string {
        return `${this.currentPeer}`;
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 15px;
}

.grid *:nth-child(odd) {
    white-space: nowrap;
}
</style>