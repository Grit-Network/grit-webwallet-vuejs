<template>
    <div class="form-account-creation-container">
        <FormWrapper :whitelisted="true">
            <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
                <form onsubmit="event.preventDefault()" class="form">
                    <div class="form-title mb-2">
                        {{ $t('choose_profile_name_and_password') }}
                    </div>

                    <div class="mb-1.5">
                        <div class="form-label">Profile name</div>
                        <ValidationProvider
                            v-slot="{ errors }"
                            vid="newAccountName"
                            :name="$t('profile_name')"
                            :rules="validationRules.newAccountName"
                            tag="div"
                        >
                            <ErrorTooltip :errors="errors">
                                <input
                                    ref="passwordInput"
                                    v-model="formItems.profileName"
                                    class="form-input"
                                    placeholder="Enter your profile name"
                                    type="text"
                                    @input="stripTagsProfile"
                                />
                            </ErrorTooltip>
                        </ValidationProvider>
                    </div>

                    <div class="mb-1.5">
                        <div class="form-label">{{ $t('set_network_type') }}</div>
                        <ValidationProvider
                            v-slot="{ errors }"
                            vid="selectedMosaic"
                            :name="$t('network_type')"
                            :rules="'required'"
                            tag="div"
                        >
                            <ErrorTooltip :errors="errors">
                                <Select v-model="formItems.networkType" :placeholder="$t('choose_network')">
                                    <Option v-for="(item, index) in networkTypeList" :key="index" :value="item.value">
                                        {{ item.label }}
                                    </Option>
                                </Select>
                            </ErrorTooltip>
                        </ValidationProvider>
                    </div>

                    <!-- @TODO: Place hint(should contain at least 8 characters, 1 letter and 1 number) -->
                    <div class="mb-1.5">
                        <div class="form-label">{{ $t('new_password_label') }}</div>
                        <ValidationProvider
                            v-slot="{ errors }"
                            vid="newPassword"
                            mode="lazy"
                            :name="$t('password')"
                            :rules="validationRules.password"
                            tag="div"
                        >
                            <ErrorTooltip :errors="errors">
                                <input
                                    ref="passwordInput"
                                    v-model="formItems.password"
                                    class="form-input"
                                    :placeholder="$t('please_enter_your_account_password')"
                                    type="password"
                                />
                            </ErrorTooltip>
                        </ValidationProvider>
                    </div>

                    <div class="mb-1.5">
                        <div class="form-label">{{ $t('repeat_password_label') }}</div>
                        <ValidationProvider
                            v-slot="{ errors }"
                            vid="confirmPassword"
                            :name="$t('confirmPassword')"
                            :rules="validationRules.confirmPassword"
                            tag="div"
                        >
                            <ErrorTooltip :errors="errors">
                                <input
                                    v-model="formItems.passwordAgain"
                                    class="form-input"
                                    data-vv-name="confirmPassword"
                                    :placeholder="$t('please_enter_your_new_password_again')"
                                    type="password"
                                />
                            </ErrorTooltip>
                        </ValidationProvider>
                    </div>

                    <div>
                        <div class="form-label">{{ $t('password_hint') }}</div>
                        <ValidationProvider v-slot="{ errors }" vid="hint" :name="$t('hint')" :rules="validationRules.message" tag="div">
                            <ErrorTooltip :errors="errors">
                                <input
                                    v-model="formItems.hint"
                                    class="form-input"
                                    @input="stripTagsProfile"
                                    placeholder="Enter profile password hint"
                                />
                            </ErrorTooltip>
                        </ValidationProvider>
                    </div>

                    <div class="mt-4 flex justify-end">
                        <button
                            type="button"
                            class="button gray w-6 mr-1.5"
                            @click="$router.push({ name: 'profiles.importProfile.importStrategy' })"
                        >
                            {{ $t('back') }}
                        </button>
                        <button type="submit" class="button primary w-6" @click="handleSubmit(submit)">
                            {{ $t('next') }}
                        </button>
                    </div>
                </form>
            </ValidationObserver>
        </FormWrapper>
    </div>
</template>

<script lang="ts">
import { FormProfileCreationTs } from './FormProfileCreationTs';
export default class FormProfileCreation extends FormProfileCreationTs {}
</script>

<style lang="less" scoped>
// @import '../../resources/css/variables.less';

// .buttons-row {
//     display: flex;
//     justify-content: flex-end;
// }

// .right-hints-section {
//     display: block;
//     width: 5rem;
//     padding: 0.5rem;
// }

// .form-account-creation-container {
//     width: 100%;
//     display: flex;
//     align-items: center;
// }

// .restore-button {
//     border: 2px solid @pink;
//     background: transparent;
//     color: @pink;
//     width: auto;
//     padding: 0 0.1rem;
// }

// .form-wrapper {
//     width: 100%;
// }

// /deep/ .form-row {
//     .form-row-inner-container {
//         grid-template-columns: 3rem auto;
//     }
// }

// /deep/ .form-create-headline {
//     padding-left: 0;
// }

// /deep/ .form-label {
//     padding-left: 0;
// }

// /deep/ .inputs-create-container {
//     margin: 0 !important;
//     width: unset !important;
// }
</style>
