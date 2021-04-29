<template>
    <section class="modal modal_auth" data-modal-name="login" data-modal-important="off">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <ModalButtonClose/>
                    <div class="titles">
                        <span class="title">Авторизация</span>
                        <span class="center">или</span>
                        <a href="#" data-modal-open="register">регистрация</a>
                    </div>
                    <div class="subtitles">
                        <div class="subtitles__left">
                            Пожалуйста, авторизуйся, чтобы войти в личный кабинет и зарегистрировать чек
                        </div>
                        <div class="subtitles__right">
                            Ещё нет личного кабинета?
                            <a href="#" data-modal-open="register">Зарегистрируйся</a>
                        </div>
                    </div>
                    <form class="form">
                        <div class="form__inputs">
                            <label class="form__input">
                                <input type="text" name="login-email" maxlength="200"
                                       placeholder="Введи свой e-mail *">
                            </label>
                            <label class="form__input">
                                <input type="password" name="login-password" maxlength="200"
                                       placeholder="Введи пароль *">
                            </label>
                        </div>
                        <!--                    todo button -->
                        <button class="button" type="submit"><span>Войти</span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ModalButtonClose from '/src/components/ModalButtonClose.vue';

export default {
    name: 'ModalAuthLogin',
    components: {
        ModalButtonClose,
    },
};
</script>