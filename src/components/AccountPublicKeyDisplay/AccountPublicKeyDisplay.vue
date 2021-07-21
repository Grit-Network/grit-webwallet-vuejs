<template>
    <div class="contents">
        <span v-if="!publicKey" class="text-gray">{{ $t('account_public_key') }}:</span>
        <div class="flex justify-between break-all gap-x-0.5">
            {{ publicKey || account.publicKey }}

            <ButtonCopyToClipboard v-if="account" v-model="account.publicKey" />
            <ButtonCopyToClipboard v-else v-model="publicKey" />
        </div>
    </div>
</template>

<script lang="ts">
import { AccountPublicKeyDisplayTs } from './AccountPublicKeyDisplayTs';
export default class AccountPublicKeyDisplay extends AccountPublicKeyDisplayTs {}
</script>


