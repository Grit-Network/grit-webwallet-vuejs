<template>
    <FormRow>
        <template v-slot:label>
            <div class="mt-0.5 mb-[3px]">{{ $t('form_label_namespace_name') }}</div>
        </template>
        <template v-slot:inputs>
            <ValidationProvider
                v-slot="{ errors }"
                vid="form_label_namespace_name"
                :name="$t('form_label_namespace_name')"
                :rules="validationRule"
                tag="div"
                class="inputs-container"
            >
                <ErrorTooltip :errors="errors">
                    <input
                        v-if="isNeedAutoFocus"
                        v-model="chosenValue"
                        v-focus
                        class="form-input"
                        :placeholder="$t('input_namespace_name')"
                        type="text"
                    />
                    <input v-else v-model="chosenValue" class="form-input" :placeholder="$t('input_namespace_name')" type="text" />
                </ErrorTooltip>
            </ValidationProvider>
        </template>
    </FormRow>
</template>

<script lang="ts">
import { NamespaceNameInputTs } from './NamespaceNameInputTs';
export default class NamespaceNameInput extends NamespaceNameInputTs {}
</script>
