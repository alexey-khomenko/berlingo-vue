<template>
    <section class="modal modal_auth" data-modal-name="register" data-modal-important="off">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <modal-button-close/>

                    <div class="titles">
                        <a href="#" data-modal-open="login">Авторизация</a>
                        <span class="center">или</span>
                        <span class="title">регистрация</span>
                    </div>
                    <div class="subtitles">
                        <div class="subtitles__left">
                            Пожалуйста, зарегистрируйся, чтобы войти в личный кабинет и зарегистрировать чек
                        </div>
                        <div class="subtitles__right">
                            Уже зарегистрирован?
                            <a href="#" data-modal-open="login">Войди</a>
                            в личный кабинет
                        </div>
                    </div>

                    <form class="form">
                        <div class="form__inputs">
                            <label class="form__input">
                                <input type="text" name="register-email" maxlength="200"
                                       placeholder="Введи свой e-mail *">
                            </label>
                            <label class="form__input">
                                <input type="tel" name="register-phone" maxlength="200" ref="tel"
                                       placeholder="Введи свой телефон *">
                            </label>
                        </div>
                        <div class="form__inputs">
                            <label class="form__input">
                                <input type="password" name="register-password" maxlength="200"
                                       placeholder="Придумай пароль *"/>
                            </label>
                            <label class="form__input form__input_select">
                                <input type="text" name="register-city" maxlength="200"
                                       placeholder="Выбери свой город *"/>
                            </label>
                        </div>

                        <modal-button-agree name="register-agree"/>

                        <!-- todo button -->
                        <button class="button" type="submit"><span>Зарегистрироваться</span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ModalButtonClose from '/src/components/ModalButtonClose';
import ModalButtonAgree from '/src/components/ModalButtonAgree';
import Inputmask from 'inputmask';

export default {
    name: 'ModalAuthRegister',
    components: {
        ModalButtonClose,
        ModalButtonAgree,
    },
    mounted() {
        Inputmask('+7(999)999-99-99').mask(this.$refs.tel);
    },
    beforeUnmount() {
        Inputmask.remove(this.$refs.tel);
    },
};
</script>