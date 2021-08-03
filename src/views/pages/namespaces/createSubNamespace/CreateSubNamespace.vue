<template>
    <div class="p-1.5 flex">
        <div class="left">
            <div class="uppercase font-semibold text-[15px]">Rules Description</div>
            <br />

            <div class="uppercase text-blue font-semibold">
                {{ $t('namespace_name') }}
            </div>

            <div>{{ $t('namespace_tips_key_1') }}</div>
            <div>{{ $t('namespace_tips_value_1') }}</div>
            <br />
            <div>{{ $t('namespace_tips_key_2') }}</div>
            <div>{{ $t('namespace_tips_value_2') }}</div>
            <br />
            <div>{{ $t('namespace_tips_key_3') }}</div>
        </div>

        <div class="right">
            <FormNamespaceRegistrationTransaction v-if="ownedNamespaces.length > 0" :registration-type="1" />
            <div v-else class="no-data">
                {{ $t('no_data_namespace_tips') }}
            </div>
        </div>
    </div>
    <!-- <AssetFormPageWrap>
        <template v-slot:form-section>
                <FormNamespaceRegistrationTransaction v-if="ownedNamespaces.length > 0" :registration-type="1" />
            <div v-else class="no-data">
                {{ $t('no_data_namespace_tips') }}
            </div>
        </template>
        <template v-slot:form-description>
            
        </template>
    </AssetFormPageWrap> -->
</template>
<script lang="ts">
import { CreateSubNamespaceTs } from './CreateSubNamespaceTs';
export default class CreateSubNamespace extends CreateSubNamespaceTs {}
</script>
<style lang="less" scoped>
@import './CreateSubNamespace.less';
</style>

<style scoped>
/deep/ .namespace-transaction-form-wrapper {
    max-width: 14rem;
}

.left {
    width: 40%;
    padding-right: 20px;
}

.right {
    width: 60%;
}
</style>
