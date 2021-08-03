<template>
    <div class="text-black">
        <div class="step" v-for="(item, index) in items" :key="index">
            <div class="flex items-center gap-x-1">
                <div class="step-number" :class="{ active: currentItemIndex >= index }">{{ index + 1 }}</div>
                <div class="step-title">{{ $t(item) }}</div>
            </div>

            <slot v-if="currentItemIndex === index" />
        </div>
    </div>
    <!-- <Steps :current="currentItemIndex" :size="size">
        <Step
            v-for="(item, index) in items"
            :key="index"
            :title="$t(item)"
            :icon="getIcon(item)"
            :class="{
                active: currentItemIndex >= index,
            }"
        />
    </Steps> -->
</template>

<style scoped>
.step-number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    background-color: var(--clr-gray);
    color: var(--clr-gray-dark);
    border-radius: 50%;
    height: 30px;
    width: 30px;
}

.step-number.active {
    background: linear-gradient(359deg, #0032bd 0%, #0f87e5 100%);
    color: #fff;
}

.step-title {
    font-weight: 700;
}
</style>

<script lang="ts">
// external dependencies
import { Component, Vue, Prop } from 'vue-property-decorator';
import { QRCodeType } from 'symbol-qr-library';

@Component
export default class ModalWizardDisplay extends Vue {
    protected isDisplayed = false;

    @Prop({ default: () => [] }) items: string[];
    @Prop({ default: () => [] }) icons: string[];
    @Prop({ default: 0 }) currentItemIndex: number;
    @Prop({ default: 'small' }) size: string;
    @Prop({ default: 0 }) qrType: number;
    @Prop({ default: false }) invalidType: number;
    @Prop({ default: [QRCodeType.AddContact, QRCodeType.RequestTransaction, QRCodeType.ExportObject] })
    readonly validQrTypes!: QRCodeType[];

    protected showWizard(): void {
        this.isDisplayed = true;
    }

    protected getIcon(item: string) {
        if (!this.icons.length) {
            return undefined;
        }

        const idx = this.items.findIndex((i) => i === item);
        return this.icons[idx];
    }
}
</script>
