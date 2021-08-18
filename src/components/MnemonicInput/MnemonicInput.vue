<template>
    <div v-click-focus class="show-mnemonic">
        <div v-for="(word, index) in wordsArray" :key="index" class="input-already">
            {{ word }}
        </div>
        <div class="mnemonic-input-container">
            <input
                v-model="userInput"
                class="mnemonic-input"
                type="text"
                maxlength="50"
                @paste.prevent="handlePaste($event)"
                v-on:keypress="addWord"
                @keydown.delete="deleteWord"
            />
        </div>

        <ButtonCopyToClipboard v-model="waitingCopyString" type="icon-gray" class="copy-button" />
    </div>
</template>
<script lang="ts">
import { MnemonicInputTs } from './MnemonicInputTs';
export default class MnemonicInput extends MnemonicInputTs {}
</script>
<style lang="less" scoped>
// @import './MnemonicInput.less';
</style>

<style scoped>
.show-mnemonic {
    position: relative;
    width: 100%;
    min-height: 350px;
    padding: 10px;
    border: 1px solid var(--clr-gray-dark);
    border-radius: 4px;
}

.input-already {
    display: inline-block;
    padding: 7px 14px;
    border-radius: 4px;
    text-transform: lowercase;
    background-color: var(--clr-gray-dark);
    margin: 7px;
}

.mnemonic-input-container {
    display: inline-block;
}

.mnemonic-input {
    background-color: transparent;
    outline: none;
    border: 0;
    width: 100%;
    padding: 8px 15px;
}

.copy-button {
    position: absolute;
    bottom: 12px;
    right: 12px;
}
</style>