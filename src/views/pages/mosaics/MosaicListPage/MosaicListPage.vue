<template>
    <div class="flex flex-col flex-grow">
        <TableDisplay class="table-section" asset-type="mosaic" @on-add-metadata="showMetadataModal = true" />
        <ModalMetadataUpdate v-if="showMetadataModal" :visible="showMetadataModal" :type="1" @close="showMetadataModal = false" />
    </div>
    <!-- <AssetListPageWrap>
        <template v-slot:table-section>
            <TableDisplay class="table-section" asset-type="mosaic" @on-add-metadata="showMetadataModal = true" />
            <ModalMetadataUpdate v-if="showMetadataModal" :visible="showMetadataModal" :type="1" @close="showMetadataModal = false" />
        </template>
    </AssetListPageWrap> -->
</template>

<script lang="ts">
import { MosaicListPageTs } from './MosaicListPageTs';
export default class MosaicListPage extends MosaicListPageTs {}
</script>


