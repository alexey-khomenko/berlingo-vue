<template>
    <section class="modal modal_auth" data-modal-name="success" data-modal-important="off">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <ModalButtonClose/>
                    <div class="titles">
                        <a href="#" data-modal-open="login">Авторизация</a>
                        <span class="center">или</span>
                        <span class="title">регистрация</span>
                    </div>
                    <div class="subtitle">
                        Успех! Твой личный кабинет создан. Чтобы войти в него, перейди по ссылке в письме,
                        отправленном тебе на e-mail.
                    </div>
                    <a class="button" href="#" data-modal-close><span>Хорошо</span></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ModalButtonClose from '/src/components/ModalButtonClose.vue';

export default {
    name: 'ModalAuthSuccess',
    components: {
        ModalButtonClose,
    },
};
</script>