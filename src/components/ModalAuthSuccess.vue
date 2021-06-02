<template>
    <modal-wrapper class="modal_auth" :name="name" :important="important">
        <div class="titles">
            <button type="button" @click="openModal('login')">Авторизация</button>
            <span class="center">или</span>
            <span class="title">регистрация</span>
        </div>
        <div class="subtitle">
            Успех! Твой личный кабинет создан. Чтобы войти в него, перейди по ссылке в письме,
            отправленном тебе на e-mail.
        </div>
        <page-button type="button" @click="openModal(null)" class="btn_success" color="red">
            <span>Хорошо</span>
        </page-button>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import ModalWrapper from '/src/components/ModalWrapper';
import PageButton from '/src/components/PageButton';

export default {
    name: 'ModalAuthSuccess',
    components: {
        ModalWrapper,
        PageButton,
    },
    setup() {
        const openModal = inject('openModal');

        return {openModal};
    },
    data() {
        return {
            name: 'success',
            important: false,
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.btn_success {
    margin: 0 100px 80px;
    width: 173px;

    @media (max-width: $md_max) {
        margin: 0 80px 60px;
    }

    @media (max-width: $sm_max) {
        margin: 0 20px 40px;
        width: 118px;
    }
}
</style>