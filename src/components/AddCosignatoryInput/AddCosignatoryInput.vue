<template>
    <FormRow>
        <template v-slot:inputs>
            <ValidationObserver v-slot="{ handleSubmit }" slim>
                <ValidationProvider
                    v-slot="{ errors }"
                    vid="cosignatory"
                    :name="$t('cosignatory')"
                    :rules="`${validationRules.addressOrPublicKey}`"
                    tag="div"
                    class="row-cosignatory-action inputs-container"
                >
                    <div class="flex items-center">
                        <ErrorTooltip :errors="errors">
                            <input
                                v-model="cosignatory"
                                :placeholder="$t('placeholder_address_or_public_key')"
                                class="form-input"
                                type="text"
                                @input="stripTagsCosignatory"
                            />
                        </ErrorTooltip>
                        <ButtonAdd class="ml-0.5 add-btn" @click="handleSubmit(onAddCosignatory())" />
                    </div>
                </ValidationProvider>
            </ValidationObserver>
        </template>
    </FormRow>
</template>

<script lang="ts">
import { AddCosignatoryInputTs } from './AddCosignatoryInputTs';

export default class AddCosignatoryInput extends AddCosignatoryInputTs {}
</script>


<style scoped>
/deep/.add-btn svg {
    height: 22px;
    width: 22px;
}
</style>