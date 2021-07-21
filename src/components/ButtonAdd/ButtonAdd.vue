<template>
    <div v-if="!disabled" class="flex cursor-pointer items-center" @click="$emit('click')">
        <!-- <Icon type="md-add-circle" :size="size" /> -->
        <inline-svg :src="require('@/assets/icons/plus-circle.svg')"></inline-svg>
        <span v-if="title" class="text-gray whitespace-nowrap ml-0.5">{{ title }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ButtonAdd extends Vue {
    @Prop({ default: false }) disabled: boolean;
    @Prop({ default: undefined }) title: boolean;
    @Prop({ default: undefined }) size: string;
}
</script>

<style lang="less" scoped>
// @import './ButtonAdd.less';
</style>
