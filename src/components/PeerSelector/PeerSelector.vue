<template>
    <div :class="[isConnected ? 'endpoint-healthy' : 'endpoint-unhealthy', 'mb-1']">
        <Poptip v-if="!isEmbedded" v-model="poptipVisible" placement="bottom-end" class="endpoint-poptip" @on-popper-show="onPopTipShow">
            <i class="pointer point" />
            <span v-if="isConnected" class="text-[16px] font-semibold text-blue">{{ $t('node') }}</span>
            <div slot="content" class="node-selector-container">
                <div class="current-node-info">
                    <Row>
                        <i-col span="5" class="current-node-header">{{ $t('current_network') }}:</i-col>
                        <i-col span="19" class="current-node-value">{{ networkTypeText }}</i-col>
                    </Row>
                    <Row>
                        <i-col span="5" class="current-node-header">{{ $t('current_endpoint') }}:</i-col>
                        <i-col
                            span="19"
                            class="current-node-value overflow_ellipsis"
                            :title="currentPeerInfo.url + currentPeerInfo.friendlyName"
                        >
                            <div>
                                <div class="node-list-entry">{{ currentPeerInfo.friendlyName }}</div>
                                <div class="node-url">{{ currentPeerInfo.url }}</div>
                            </div>
                        </i-col>
                    </Row>
                </div>
                <div class="node-list-container">
                    <div class="text-[16px] font-semibold text-blue">
                        <span>{{ $t('node_list') }}</span>
                        <span> ({{ peersList.length }})</span>
                    </div>
                    <div class="node-list-content">
                        <ul v-auto-scroll="'active'">
                            <li
                                v-for="({ url, friendlyName }, index) in peersList"
                                :key="`sep${index}`"
                                class="list-item pointer"
                                :class="[{ active: currentPeerInfo.url == url }]"
                                @click="currentPeerInfo.url !== url ? switchPeer(url) : ''"
                            >
                                <div>
                                    <div class="node-list-entry">{{ friendlyName }}</div>
                                    <div class="node-url">{{ url }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="node-list-text">
                        <Icon type="ios-help-circle-outline" />
                        <i18n path="peer_tip">
                            <template v-slot:setting>
                                <a @click="goSettings()">{{ $t('settings') }}</a>
                            </template>
                        </i18n>
                    </div>
                </div>
            </div>
        </Poptip>

        <div v-else class="node-selector-container">
            <div class="node-list-container">
                <div class="text-[16px] font-semibold text-blue">
                    <span>{{ $t('node_list') }}</span>
                    <span> ({{ peersList.length }})</span>
                </div>
                <div class="node-list-content">
                    <ul v-auto-scroll="'active'">
                        <li
                            v-for="({ url, friendlyName }, index) in peersList"
                            :key="`sep${index}`"
                            class="list-item pointer"
                            :class="[{ active: currentPeerInfo.url == url }]"
                        >
                            <div class="overflow_ellipsis" :title="friendlyName">
                                <div class="node-list-entry">{{ friendlyName }}</div>
                                <div class="node-url">{{ url }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <ModalNetworkNotMatchingProfile
            v-if="networkIsNotMatchingProfile"
            :visible="networkIsNotMatchingProfile"
            @close="onCloseNetworkModal()"
        />
    </div>
</template>

<script lang="ts">
import { PeerSelectorTs } from './PeerSelectorTs';

export default class PeerSelector extends PeerSelectorTs {}
</script>

<style lang="less" scoped>
// @import './PeerSelector.less';
</style>

<style scoped>
.node-list-content {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 5px;
}

.list-item {
    padding: 5px;
    border-radius: 3px;
}

.list-item.active {
    background-color: rgba(15, 135, 229, 0.4);
}
</style>
