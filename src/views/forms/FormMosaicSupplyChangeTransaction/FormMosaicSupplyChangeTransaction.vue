<template>
    <FormWrapper>
        <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
            <form onsubmit="event.preventDefault()" class="form">
                <FormRow v-if="isAggregate">
                    <template v-slot:label>
                        <div class="mb-[5px]">{{ $t('mosaic') }}</div>
                    </template>

                    <template v-slot:inputs>
                        <ValidationProvider
                            v-slot="{ errors }"
                            vid="newDuration"
                            :name="$t('mosaic')"
                            rules="required"
                            :immediate="true"
                            slim
                        >
                            <ErrorTooltip :errors="errors">
                                <MosaicSelector
                                    v-model="formItems.mosaicHexId"
                                    :mosaic-hex-ids="ownedTargetHexIds"
                                    default-mosaic="firstInList"
                                    required
                                    :attached="false"
                                />
                            </ErrorTooltip>
                        </ValidationProvider>
                    </template>
                </FormRow>

                <div class="mt-1.5 mb-[5px]">
                    {{ $t('form_label_supply_direction') }}
                </div>
                <div class="select-container">
                    <ValidationProvider
                        v-slot="{ errors }"
                        vid="newDuration"
                        :name="$t('direction')"
                        rules="required"
                        :immediate="true"
                        slim
                    >
                        <ErrorTooltip :errors="errors">
                            <Select v-model="formItems.action">
                                <Option :value="MosaicSupplyChangeAction.Increase">
                                    {{ $t('increase') }}
                                </Option>
                                <Option :value="MosaicSupplyChangeAction.Decrease">
                                    {{ $t('decrease') }}
                                </Option>
                            </Select>
                        </ErrorTooltip>
                    </ValidationProvider>
                </div>

                <div class="mt-1.5">
                    <SupplyInput v-model="formItems.delta" label="form_label_supply_delta" />
                </div>

                <div class="mt-1.5 mb-[5px]">{{ $t('form_label_current_supply') }}</div>

                <div class="form-input">
                    <span v-if="currentMosaicInfo">
                        {{ $t('relative') }}: {{ currentMosaicRelativeSupply }} ({{ $t('absolute') }}:
                        {{ currentMosaicInfo.supply.toLocaleString() }})
                    </span>
                </div>

                <div class="mt-1.5 mb-[5px]">
                    {{ $t('form_label_new_supply') }}
                </div>
                <ValidationProvider
                    v-slot="{ validate, errors }"
                    vid="newDuration"
                    :name="$t('form_label_new_absolute_supply')"
                    :rules="validationRules.supply"
                    :immediate="true"
                    slim
                >
                    <input v-show="false" v-model="newMosaicAbsoluteSupply" @change="validate" />
                    <ErrorTooltip :errors="errors">
                        <div class="form-input">
                            <span :class="[errors.length ? 'red' : '']">
                                {{ $t('relative') }}: {{ newMosaicRelativeSupply || '' }} ({{ $t('absolute') }}:
                                {{ newMosaicAbsoluteSupply && newMosaicAbsoluteSupply.toLocaleString() }})
                            </span>
                        </div>
                    </ErrorTooltip>
                </ValidationProvider>

                <MaxFeeAndSubmit v-if="!isAggregate" v-model="formItems.maxFee" @button-clicked="handleSubmit(onSubmit)" />
                <div v-else-if="!hideSave" class="mt-2" style="text-align: right">
                    <button
                        type="submit"
                        class="button primary w-6"
                        :disabled="currentAccount.isMultisig || !formItems.mosaicHexId || formItems.action == null"
                        @click="emitToAggregate"
                    >
                        {{ $t('save') }}
                    </button>
                </div>
            </form>
        </ValidationObserver>
        <ModalTransactionConfirmation
            v-if="hasConfirmationModal"
            :command="command"
            :visible="hasConfirmationModal"
            @success="onConfirmationSuccess"
            @error="onConfirmationError"
            @close="onConfirmationCancel"
        />
    </FormWrapper>
</template>

<script lang="ts">
// @ts-ignore
import { FormMosaicSupplyChangeTransactionTs } from './FormMosaicSupplyChangeTransactionTs';
export default class FormMosaicSupplyChangeTransaction extends FormMosaicSupplyChangeTransactionTs {}
</script>
<style lang="less" scoped>
.button-style {
    height: 0.3rem !important;
    width: 1.2rem;
}
</style>
