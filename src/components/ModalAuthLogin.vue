<template>
    <section class="modal modal_auth" data-modal-name="login" data-modal-important="off">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <modal-button-close/>
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
                                       placeholder="Введи свой e-mail *"
                                       v-model="loginEmail"/>
                            </label>
                            <label class="form__input">
                                <input type="password" name="login-password" maxlength="200"
                                       placeholder="Введи пароль *"
                                       v-model="loginPassword"/>
                            </label>
                        </div>
                        <!-- todo button -->
                        <button class="button" type="submit"><span>Войти</span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapActions} from 'vuex';
import ModalButtonClose from '/src/components/ModalButtonClose';

export default {
    name: 'ModalAuthLogin',
    components: {
        ModalButtonClose,
    },
    data() {
        return {
            loginEmail: '',
            loginPassword: '',
        };
    },
    methods: {
        ...mapActions([
            'login',
        ]),
    },
    // todo login
    mounted() {
        this.login({
            loginEmail: this.loginEmail,
            loginPassword: this.loginPassword
        });
    },
};
</script>