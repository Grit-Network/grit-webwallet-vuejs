<template>
    <div class="create-profile">
        <img src="@/assets/images/logo-favicon.png" alt="" class="logo" />
        <img src="@/assets/images/background-arrow2.png" alt="" class="background-arrow" />

        <div class="left">
            <router-view />
        </div>

        <div class="right">
            <div class="steps">
                <div v-for="(text, index) in StepBarTitleList" :class="['step', getStepClassName(index)]">
                    <div class="step-number">
                        {{ index + 1 }}
                    </div>
                    <div class="step-title">
                        {{ $t(text) }}
                    </div>

                    <div v-if="getCurrentStep() === 0 && getCurrentStep() === index" class="step-description">
                        <p>{{ $t('profile_description_tips1') }}</p>
                        <p>{{ $t('profile_description_tips2') }}</p>
                        <p class="text-blue">
                            {{ $t('profile_description_tips3') }}
                        </p>
                    </div>

                    <div v-if="getCurrentStep() === 1 && getCurrentStep() === index" class="step-description">
                        <p>{{ $t('move_your_mouse_tip1') }}</p>
                        <p class="text-blue">
                            {{ $t('move_your_mouse') }}
                        </p>
                    </div>

                    <div v-if="getCurrentStep() === 2 && getCurrentStep() === index" class="step-description">
                        <div class="mb-1">
                            <div class="text-blue">
                                <span>&#9888;</span>
                                {{ $t('do_not_disclose_title') }}
                            </div>
                            <div>{{ $t('do_not_disclose') }}</div>
                        </div>
                        <div>
                            <div class="text-blue">
                                <!-- <img src="@/views/resources/img/icons/warning.svg" class="warning-icon" /> -->
                                <span>&#9888;</span>
                                {{ $t('please_backup_mnemonic_passphrase_title') }}
                            </div>
                            <div>{{ $t('please_backup_mnemonic_passphrase') }}</div>
                        </div>
                    </div>

                    <div v-if="getCurrentStep() === 3 && getCurrentStep() === index" class="step-description">
                        <p class="text-blue">{{ $t('tips') }}</p>
                        <p>{{ $t('the_backup_is_wrong') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import CreateProfileTs from './CreateProfileTs';
export default class CreateProfile extends CreateProfileTs {}
</script>



<style scoped src="./CreateProfile.css"></style>