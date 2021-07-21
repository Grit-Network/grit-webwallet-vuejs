<template>
    <div class="contents">
        <div class="text-gray">{{ $t('account_name') }}:</div>
        <div class="flex justify-between">
            {{ account.name }}

            <button type="button" @click.stop="hasNameFormModal = true">
                <inline-svg :src="require('@/assets/icons/pencil.svg')" />
            </button>
            <ModalFormAccountNameUpdate v-if="hasNameFormModal" :visible="hasNameFormModal" @close="hasNameFormModal = false" />
        </div>
    </div>
</template>

<script lang="ts">
import { AccountNameDisplayTs } from './AccountNameDisplayTs';

export default class AccountNameDisplay extends AccountNameDisplayTs {}
</script>

