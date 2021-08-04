<template>
    <div class="nav-links">
        <div
            v-for="(item, index) in items"
            :key="index"
            :class="['nav-link', { active: index === currentItemIndex }]"
            @click="$emit('selected', index)"
        >
            {{ $t(translationPrefix + item.toLowerCase()) }}
            <!-- {{ translationPrefix + item.toLowerCase() }} -->
        </div>
    </div>
</template>
<script lang="ts">
import { NavigationLinksTs } from './NavigationLinksTs';
export default class NavigationLinks extends NavigationLinksTs {}
</script>

<style scoped>
.nav-links {
    display: flex;
}

.nav-link {
    color: var(--clr-gray);
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    border-bottom: 1.5px solid transparent;
}

.nav-link:first-child {
    padding-left: 0;
    margin-left: 0;
}

.nav-link.active {
    font-weight: bold;
    color: black;
    border-bottom-color: var(--clr-blue);
}
</style>
