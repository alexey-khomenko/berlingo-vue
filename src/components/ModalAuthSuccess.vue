<template>
    <modal-wrapper class="modal_auth" :name="name">
        <div class="titles">
            <!-- todo href="#" -->
            <a href="#" @click="openModal('login')">Авторизация</a>
            <span class="center">или</span>
            <span class="title">регистрация</span>
        </div>
        <div class="subtitle">
            Успех! Твой личный кабинет создан. Чтобы войти в него, перейди по ссылке в письме,
            отправленном тебе на e-mail.
        </div>
        <!-- todo button -->
        <!-- todo href="#" -->
        <a class="button" href="#" @click="openModal(null)">
            <span>Хорошо</span>
        </a>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import {setupModalMixin, openModalMixin} from '/src/mixins/miscModal';

import ModalWrapper from '/src/components/ModalWrapper';

export default {
    name: 'ModalAuthSuccess',
    components: {
        ModalWrapper,
    },
    mixins: [setupModalMixin, openModalMixin],
    setup() {
        const openModal = inject('openModal');
        const openedModal = inject('openedModal');

        return {openModal, openedModal};
    },
    data() {
        return {
            name: 'success',
            important: false,
        };
    },
};
</script>