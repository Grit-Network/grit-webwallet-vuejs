<template>
    <FormRow>
        <template v-slot:label>
            <div class="mb-[5px]">
                {{ $t('set_explorer_link') }}
            </div>
        </template>
        <template v-slot:inputs>
            <ValidationProvider
                v-slot="{ errors }"
                mode="lazy"
                vid="explorerUrl"
                :name="$t('explorer_url')"
                :rules="validationRules.url"
                tag="div"
                class="inputs-container select-container"
            >
                <ErrorTooltip :errors="errors">
                    <AutoComplete
                        v-model="chosenExplorerUrl"
                        :placeholder="$t('node')"
                        :data="defaultExplorerLinkList"
                        class="auto-complete-size auto-complete-style"
                        @on-change="$emit('on-change')"
                    />
                </ErrorTooltip>
            </ValidationProvider>
        </template>
    </FormRow>
</template>

<script>
import { ExplorerUrlSetterTs } from './ExplorerUrlSetterTs';
export default class ExplorerUrlSetter extends ExplorerUrlSetterTs {}
</script>

