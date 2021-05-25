<template>
    <section class="modal modal_auth" data-modal-name="success" data-modal-important="off">
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
import {inject} from 'vue';
import ModalButtonClose from '/src/components/ModalButtonClose';

export default {
    name: 'ModalAuthSuccess',
    components: {
        ModalButtonClose,
    },
    setup() {
        const openModal = inject('openModal');

        return {openModal};
    },
};
</script>