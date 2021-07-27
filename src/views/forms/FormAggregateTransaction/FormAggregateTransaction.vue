<template>
    <div class="flex flex-wrap -mx-1.5 h-full">
        <div class="px-1 md:w-8/12 w-full h-full">
            <div class="panel h-full">
                <NavigationTabs direction="horizontal" :parent-route-name="parentRouteName" />
                <div
                    v-if="currentSelectedTransaction && currentSelectedTransaction.title && currentSelectedTransaction.component"
                    class="py-1.5 px-3"
                >
                    <!-- <div class="title-container">
                        <h1 class="title-style">
                            {{ currentSelectedTransaction.title }}
                        </h1>
                    </div> -->
                    <component
                        :is="currentSelectedTransaction.component"
                        ref="transactionForm"
                        v-model="currentSelectedTransaction.formItems"
                        :is-aggregate="true"
                        :title.sync="currentSelectedTransaction.title"
                        class="transaction-form-component"
                        @txInput="onSaveTransaction"
                    ></component>
                </div>
            </div>
        </div>
        <div class="px-1 md:w-4/12 w-full h-full">
            <div class="panel p-2 pt-1 h-full flex flex-col justify-between">
                <div class="uppercase text-[15px] font-medium">
                    {{ $t('my_transaction_title') }}
                </div>
                <FormWrapper>
                    <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
                        <form onsubmit="event.preventDefault()" class="transactions-form-wrapper">
                            <div class="transaction-list-container">
                                <div
                                    v-for="{ title } in simpleAggregateTransaction"
                                    :key="title"
                                    class="transfer_data"
                                    @click="onSelectTx(title)"
                                >
                                    <span v-if="title" class="img_container">
                                        <img
                                            v-if="title.indexOf(`${$t('simple_transaction')}`) !== -1"
                                            src="@/views/resources/img/icons/transactions.svg"
                                            alt
                                        />
                                        <img
                                            v-else-if="title.indexOf(`${$t('mosaic_transaction')}`) !== -1"
                                            src="@/views/resources/img/icons/mosaic.svg"
                                            alt
                                        />
                                        <img v-else src="@/views/resources/img/icons/namespace.svg" alt />
                                    </span>
                                    <span class="transfer_name">{{ title }}</span>
                                    <button class="remove_button" @click="onClickDelete(title)">
                                        <img src="@/views/resources/img/icons/bin.svg" alt />
                                    </button>
                                </div>
                            </div>
                            <div class="bottom-container">
                                <MaxFeeSelector
                                    v-model="formItems.maxFee"
                                    placement="top-start"
                                    :show-fee-label="true"
                                    @button-clicked="handleSubmit(onClickSendAggregate)"
                                />
                                <button
                                    class="button primary w-full mt-2 font-semibold"
                                    style="cursor: pointer"
                                    type="submit"
                                    :disabled="!simpleAggregateTransaction.length"
                                    @click="handleSubmit(onSubmit)"
                                >
                                    {{ $t('aggregate_send') }}
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
                </FormWrapper>
                <ModalTransactionConfirmation
                    v-if="hasConfirmationModal"
                    :command="command"
                    :visible="hasConfirmationModal"
                    @success="onConfirmationSuccess"
                    @error="onConfirmationError"
                    @close="onConfirmationCancel"
                />
            </div>
        </div>
        <ModalTransactionEdit
            v-if="showTransactionEditModal"
            :visible="showTransactionEditModal"
            :transaction="toBeEditedTransaction"
            @cancel="showTransactionEditModal = false"
            @save="saveEditedTransaction"
        ></ModalTransactionEdit>
    </div>
</template>

<script lang="ts">
// @ts-ignore
import { FormAggregateTransactionTs } from './FormAggregateTransactionTs';
export default class FormAggregateTransaction extends FormAggregateTransactionTs {}
</script>

<style lang="less" scoped>
// @import './FormAggregateTransaction.less';
</style>
