<template>
    <ValidationProvider
        v-slot="{ errors }"
        mode="lazy"
        vid="amount"
        :name="$t('amount')"
        :rules="validationRules.amount"
        tag="div"
        class="inputs-container"
    >
        <ErrorTooltip :errors="errors">
            <div class="input-container">
                <input v-model="relativeValue" class="form-input" type="text" />
            </div>
        </ErrorTooltip>
    </ValidationProvider>
</template>

<script lang="ts">
import { AmountInputTs } from './AmountInputTs';

export default class AmountInput extends AmountInputTs {}
</script>

<style scoped>
.form-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
}

.input-container {
    position: relative;
}

.input-container::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1.5px;
    height: 70%;
    background-color: var(--clr-gray);
}
</style>
