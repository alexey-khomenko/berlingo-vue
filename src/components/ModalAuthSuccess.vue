<template>
    <section class="modal modal_auth" :class="{open}">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <modal-button-close/>
                    <div class="titles">
                        <a href="#" @click="openModal('login')">Авторизация</a>
                        <span class="center">или</span>
                        <span class="title">регистрация</span>
                    </div>
                    <div class="subtitle">
                        Успех! Твой личный кабинет создан. Чтобы войти в него, перейди по ссылке в письме,
                        отправленном тебе на e-mail.
                    </div>
                    <!-- todo button -->
                    <a class="button" href="#" @click="openModal(null)"><span>Хорошо</span></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {emitsModalMixin, setupModalMixin, openModalMixin} from '/src/mixins/miscModal';
import ModalButtonClose from '/src/components/ModalButtonClose';
import {inject} from 'vue';

export default {
    name: 'ModalAuthSuccess',
    components: {
        ModalButtonClose,
    },
    mixins: [emitsModalMixin, setupModalMixin, openModalMixin],
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