<template>
    <div class="flex flex-wrap -mx-1.5 h-full">
        <div class="px-1 md:w-8/12 w-full h-full flex flex-col">
            <HarvestStatisticsPanel />

            <div class="panel mt-2 flex-grow">
                <router-view />
            </div>
        </div>
        <div class="px-1 md:w-4/12 w-full h-full">
            <div class="panel p-1 h-full flex flex-col">
                <div class="uppercase font-medium text-[15px] pl-0.5">
                    {{ $t('harvested_blocks') }}
                </div>
                <HarvestedBlocksList />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// external dependencies
import { Component, Vue } from 'vue-property-decorator';

// child components
import NavigationTabs from '@/components/NavigationTabs/NavigationTabs.vue';
import HarvestStatisticsPanel from '@/components/HarvestStatisticsPanel/HarvestStatisticsPanel.vue';
import HarvestedBlocksList from '@/views/pages/harvesting/HarvestedBlocksList/HarvestedBlocksList.vue';

@Component({
    components: { NavigationTabs, HarvestStatisticsPanel, HarvestedBlocksList },
    data() {
        return {};
    },
})
export default class HarvestingDashboardPage extends Vue {}
</script>
