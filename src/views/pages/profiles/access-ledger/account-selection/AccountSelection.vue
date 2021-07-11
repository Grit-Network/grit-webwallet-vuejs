<template>
    <div class="account-selection" @keyup.enter="submit">
        <div class="content">
            <section class="left">
                <div class="title">{{ $t('address_to_interact_with') }}</div>

                <table>
                    <thead>
                        <tr>
                            <th class="font-semibold pt-0.5">{{ $t('id') }}</th>
                            <th class="font-semibold text-left">{{ $t('address') }}</th>
                            <th class="font-semibold pr-0.5">{{ $t('balance') }}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <template v-for="(a, index) in optInAddressesList">
                            <tr v-if="!selectedOptInAccounts.includes(a.index)" :key="index + 'opt'" @click="onAddAddressOptIn(a.index)">
                                <td>{{ a.index + 1 }}</td>
                                <td>{{ formatters.miniAddress(a.address) }}</td>
                                <td v-if="optInAddressBalanceMap[a.address.plain()] != null" class="text-center">
                                    <MosaicAmountDisplay :absolute-amount="optInAddressBalanceMap[a.address.plain()]" />
                                </td>
                                <td v-else class="text-center">N/A</td>
                            </tr>
                        </template>

                        <template v-for="(a, index) in addressesList">
                            <tr v-if="!selectedAccounts.includes(index)" :key="index + 'selected'" @click="onAddAddress(index)">
                                <td>{{ index + 1 }}</td>
                                <td>{{ formatters.miniAddress(a) }}</td>
                                <td v-if="addressBalanceMap[a.plain()] != null" class="text-center">
                                    <MosaicAmountDisplay :absolute-amount="addressBalanceMap[a.plain()]" />
                                </td>
                                <td v-else class="text-center">N/A</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </section>

            <section class="right">
                <div class="title">Selected accounts</div>
                <table>
                    <thead>
                        <tr>
                            <th class="font-semibold pt-0.5">{{ $t('id') }}</th>
                            <th class="font-semibold text-left">{{ $t('address') }}</th>
                        </tr>
                    </thead>

                    <tbody v-if="!!addressesList.length" class="address-list-body">
                        <tr v-for="index in selectedAccounts" :key="index" @click="onRemoveAddress(index)">
                            <td>{{ index + 1 }}</td>
                            <td>{{ formatters.miniAddress(addressesList[index]) }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

        <div class="mt-4 flex justify-end">
            <button class="button gray mr-1.5" @click="previous">
                {{ $t('back') }}
            </button>
            <button class="button primary" @click="submit">
                {{ $t('next') }}
            </button>
        </div>
    </div>
    <!-- <div class="account-selection-container" @keyup.enter="submit">
        <div class="dialog-sub-tips">
            {{ $t('address_to_interact_with') }}
        </div>
        <div class="choose-hd-path scroll">
            <div class="address-list">
                <div class="table-title">
                    <span class="address-id">{{ $t('id') }}</span>
                    <span class="address-value">{{ $t('address') }}</span>
                    <span class="address-balance">{{ $t('balance') }}</span>
                </div>
                <div class="table-body">
                    <div v-for="(a, index) in optInAddressesList" :key="'opt-in-' + index" @click="onAddAddressOptIn(a.index)">
                        <div v-if="!selectedOptInAccounts.includes(a.index)" class="table-item pointer">
                            <span class="address-id">{{ a.index + 1 }} (Opt In)</span>
                            <span class="address-value">{{ formatters.miniAddress(a.address) }}</span>
                            <span v-if="optInAddressBalanceMap[a.address.plain()] != null" class="address-balance overflow_ellipsis">
                                <MosaicAmountDisplay :absolute-amount="optInAddressBalanceMap[a.address.plain()]" />
                            </span>
                            <span v-else class="address-balance overflow_ellipsis">
                                N/A
                            </span>
                        </div>
                    </div>
                    <div v-for="(a, index) in addressesList" :key="index" @click="onAddAddress(index)">
                        <div v-if="!selectedAccounts.includes(index)" class="table-item pointer">
                            <span class="address-id">{{ index + 1 }}</span>
                            <span class="address-value">{{ formatters.miniAddress(a) }}</span>
                            <span v-if="addressBalanceMap[a.plain()] != null" class="address-balance overflow_ellipsis">
                                <MosaicAmountDisplay :absolute-amount="addressBalanceMap[a.plain()]" />
                            </span>
                            <span v-else class="address-balance overflow_ellipsis">
                                N/A
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Spin v-if="isLoading" size="large" fix class="absolute" />
        </div>
        <div class="button-container flex-container">
            <button class="solid-button button-style create-account-style" @click="previous">
                {{ $t('back') }}
            </button>
            <button class="solid-button button-style create-account-style inverted-button" @click="submit">
                {{ $t('next') }}
            </button>
        </div>
    </div> -->
</template>

<script>
import AccountSelectionTs from './AccountSelectionTs';
export default class AccountSelection extends AccountSelectionTs {}
</script>
<style lang="less" scoped>
// @import './AccountSelection.less';
</style>

<style scoped>
.account-selection {
    margin-top: 120px;
    margin-bottom: 40px;
}

.content {
    display: flex;
    column-gap: 20px;
}

.title {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 28px;
}

.left,
.right {
    width: 50%;
}

table {
    background-color: #272727;
    border-radius: 4px;
    width: 100%;
}

th,
td {
    padding: 6px 10px;
    font-size: 12px;
}

th {
    padding: 10px 10px;
    text-transform: uppercase;
}

tbody tr {
    cursor: pointer;
}

tbody tr:hover {
    color: var(--clr-blue);
}
</style>
