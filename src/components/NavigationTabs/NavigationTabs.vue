<template>
    <div>
        <div class="flex justify-between p-1" v-if="direction === 'horizontal'">
            <div class="flex gap-x-1.5">
                <div
                    class="tab-link"
                    v-for="(tabEntry, index) in tabEntries"
                    :key="index"
                    :class="{ active: tabEntry.isActive($route) }"
                    @click="tabEntry.isActive($route) ? '' : $router.push({ name: tabEntry.route }).catch((err) => {})"
                >
                    {{ $t(tabEntry.title) }}
                </div>
            </div>

            <slot name="actions"></slot>
        </div>

        <div class="tabs" v-else>
            <div
                v-for="(tabEntry, index) in tabEntries"
                :key="index"
                :class="['tab-item', tabEntry.isActive($route) ? 'active' : '']"
                @click="tabEntry.isActive($route) ? '' : $router.push({ name: tabEntry.route }).catch((err) => {})"
            >
                <div>
                    <inline-svg :src="tabEntry.icon || ''" class="tab-icon" />
                    <div class="tab-title">
                        {{ $t(tabEntry.title) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { NavigationTabsTs } from './NavigationTabsTs';

export default class NavigationTabs extends NavigationTabsTs {}
</script>

<style lang="less" scoped>
// @import './NavigationTabs.less';
</style>

<style scoped>
.tabs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 23px;
    padding-right: 30px;
    row-gap: 30px;
}

.tab-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    border: 1.5px solid #707070;
    color: var(--clr-gray);
    cursor: pointer;
}

.tab-icon {
    margin: 0 auto;
    margin-bottom: 6px;
}

.tab-item:hover,
.tab-item.active {
    color: #fff;
    border-color: var(--clr-blue);
    font-weight: 500;
}

/deep/.tab-item:hover .tab-icon path,
/deep/.tab-item.active .tab-icon path {
    fill: var(--clr-blue);
}

.tab-link {
    padding: 5px;
    color: var(--clr-gray);
    font-weight: 500;
    border-bottom: 2px solid transparent;
    cursor: pointer;
}

.tab-link:hover,
.tab-link.active {
    color: #fff;
    border-color: var(--clr-blue);
}
</style>
