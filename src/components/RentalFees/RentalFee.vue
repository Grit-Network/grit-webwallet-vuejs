<template>
    <div>
        <FormRow>
            <template v-slot:label>
                <div class="mt-0.5">{{ $t('estimated_rental_fee') }}</div>
            </template>
            <template v-slot:inputs>
                <div class="form-input">
                    <MosaicAmountDisplay :absolute-amount="rentalFeeAmount || 0" :color="'red'" :show-ticker="true" />
                </div>
            </template>
        </FormRow>
    </div>
</template>
<script lang="ts">
import { RentalFeeTs } from './RentalFeeTs';
export default class RentalFee extends RentalFeeTs {}
</script>
