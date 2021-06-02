<template>
    <modal-wrapper class="modal_auth" :name="name" :important="important">
        <div class="titles">
            <span class="title">Авторизация</span>
            <span class="center">или</span>
            <button type="button" @click="openModal('register')">регистрация</button>
        </div>
        <div class="subtitles">
            <div class="subtitles__left">
                Пожалуйста, авторизуйся, чтобы войти в личный кабинет и зарегистрировать чек
            </div>
            <div class="subtitles__right">
                Ещё нет личного кабинета?
                <button type="button" @click="openModal('register')">Зарегистрируйся</button>
            </div>
        </div>

        <form class="form" @submit.prevent="submit">
            <div class="form__inputs">
                <label class="form__input" :class="{error: isEmailError}">
                    <input type="text" name="login-email" maxlength="200" placeholder="Введи свой e-mail *"
                           v-model="loginEmail"
                           @focus="isEmailError = false"/>
                </label>
                <label class="form__input" :class="{error: isPasswordError}">
                    <input type="password" name="login-password" maxlength="200" placeholder="Введи пароль *"
                           v-model="loginPassword"
                           @focus="isPasswordError = false"/>
                </label>
            </div>
            <page-button type="submit" class="btn_login" color="red">
                <span>Войти</span>
            </page-button>
        </form>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import {mapActions} from 'vuex';
import ModalWrapper from '/src/components/ModalWrapper';
import PageButton from '/src/components/PageButton';

export default {
    name: 'ModalAuthLogin',
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
            name: 'login',
            important: false,
            loginEmail: '',
            isEmailError: false,
            loginPassword: '',
            isPasswordError: false,
        };
    },
    methods: {
        ...mapActions([
            'login',
        ]),
        async submit() {
            if (this.loginEmail.length < 4) {
                this.isEmailError = true;
            }

            if (this.loginPassword.length < 4) {
                this.isPasswordError = true;
            }

            if (this.isEmailError || this.isPasswordError) return;

            const result = await this.login({
                email: this.loginEmail,
                password: this.loginPassword,
            });

            if (result === '+') {
                this.loginEmail = '';
                this.loginPassword = '';
                this.openModal(null);
            }
            else {
                this.isEmailError = true;
                this.isPasswordError = true;
            }
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.btn_login {
    margin: 0;
    width: 162px;

    @media (max-width: $sm_max) {
        width: 109px;
    }
}
</style>