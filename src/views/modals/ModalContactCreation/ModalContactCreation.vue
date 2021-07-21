<template>
    <Modal v-model="show" class-name="modal-container" :title="$t('modal_title_enter_account_name')" :transfer="false">
        <FormContactCreation @submit="onSubmit" />
        <div slot="footer" class="modal-footer"></div>
    </Modal>
</template>

<script lang="ts">
import { ModalContactCreationTs } from './ModalContactCreationTs';
export default class ModalContactCreation extends ModalContactCreationTs {}
</script>

<style lang="less" scoped>
.float-right {
    float: right;
}
</style>
