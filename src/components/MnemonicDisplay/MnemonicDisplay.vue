<template>
    <div>
        <slot>
            <div class="mnemonic-container">
                <div class="mnemonic-list">
                    <span v-for="(word, index) in words" :key="index">{{ word }}</span>
                </div>
                <ButtonCopyToClipboard v-model="waitingCopyString" class="copy-button" />
            </div>
        </slot>
    </div>
</template>

<script lang="ts">
import { MnemonicDisplayTs } from './MnemonicDisplayTs';
export default class MnemonicDisplay extends MnemonicDisplayTs {}
</script>
<style lang="less" scoped>
// @import './MnemonicDisplay.less';
</style>

<style scoped>
.mnemonic-container {
    /* padding-top:10px; */
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--clr-gray-dark);
    border-radius: 4px;
    margin-bottom: 30px;
}

.copy-button {
    position: absolute;
    bottom: 8px;
    right: 8px;
}

.mnemonic-list {
    padding: 6px;
    padding-bottom: 70px;
}

.mnemonic-list span {
    display: inline-block;
    background-color: var(--clr-gray-dark);
    padding: 10px 22px;
    border-radius: 2px;
    margin: 8px;
    font-size: 12px;
    color: #fff;
}

.show-mnemonic {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
}

.show-mnemonic img {
    width: 51px;
    margin: 0 auto;
    margin-bottom: 25px;
}
</style>
