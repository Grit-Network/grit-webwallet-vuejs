<template>
    <div class="mnemonic-verification" @keyup.enter="next()">
        <div class="selected-words">
            <draggable v-model="selectedWordIndexes" ghost-class="ghost" @end="drag = false">
                <span class="selected-words-box" v-for="index in selectedWordIndexes" :key="index">
                    <Tag closable @on-close="removeWord(index)">
                        {{ shuffledWords[index] }}
                    </Tag>
                </span>
            </draggable>
        </div>

        <div class="mnemonic-words clear">
            <span
                v-for="index in shuffledWordsIndexes"
                :key="index"
                :class="selectedWordIndexes.includes(index) ? 'selected' : ''"
                @click="onWordClicked(index)"
            >
                {{ shuffledWords[index] }}
            </span>
        </div>

        <div class="flex justify-end mt-3">
            <button type="button" class="button gray mr-1 w-7" @click="$emit('cancelled')">
                {{ $t('back') }}
            </button>
            <button type="submit" class="button primary w-7" :disabled="!correctWordsAreSelected()" @click="next()">
                {{ $t('next') }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { MnemonicVerificationTs } from './MnemonicVerificationTs';
export default class MnemonicVerification extends MnemonicVerificationTs {}
</script>
<style lang="less" scoped>
// @import './MnemonicVerification.less';
</style>

<style scoped src="./MnemonicVerification.css"></style>
