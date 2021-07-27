<template>
    <div class="panel multisignature">
        <NavigationTabs direction="horizontal" :noBorder="true" :parent-route-name="'multisig'" />

        <div class="px-1.5 pt-0.5 pb-2">
            <router-view />
        </div>
    </div>
</template>
<script>
// external dependencies
import { Component, Vue } from 'vue-property-decorator';
// child components
import NavigationTabs from '@/components/NavigationTabs/NavigationTabs.vue';

@Component({
    components: { NavigationTabs },
    data() {
        return {};
    },
})
export default class MultisigDashboardPage extends Vue {}
</script>

<style scoped>
.multisignature {
    max-width: 650px;
}
</style>
