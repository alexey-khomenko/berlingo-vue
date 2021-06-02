<template>
    <modal-wrapper class="modal_auth" :name="name" :important="important">
        <div class="titles">
            <button type="button" @click="openModal('login')">Авторизация</button>
            <span class="center">или</span>
            <span class="title">регистрация</span>
        </div>
        <div class="subtitles">
            <div class="subtitles__left">
                Пожалуйста, зарегистрируйся, чтобы войти в личный кабинет и зарегистрировать чек
            </div>
            <div class="subtitles__right">
                Уже зарегистрирован?
                <button type="button" @click="openModal('login')">Войди</button>
                в личный кабинет
            </div>
        </div>

        <form class="form" @submit.prevent="submit">
            <div class="form__inputs">
                <label class="form__input" :class="{error: isEmailError}">
                    <input type="text" name="register-email" maxlength="200" placeholder="Введи свой e-mail *"
                           v-model="registerEmail"
                           @focus="isEmailError = false"/>
                </label>
                <label class="form__input" :class="{error: isPhoneError}" :data-error="errorPhoneText">
                    <input type="tel" name="register-phone" maxlength="200" placeholder="Введи свой телефон *" ref="tel"
                           v-model="registerPhone"
                           @focus="isPhoneError = false; errorPhoneText = '';"/>
                </label>
            </div>
            <div class="form__inputs">
                <label class="form__input" :class="{error: isPasswordError}" :data-error="errorPasswordText">
                    <input type="password" name="register-password" maxlength="200" placeholder="Придумай пароль *"
                           v-model="registerPassword"
                           @focus="isPasswordError = false"/>
                </label>
                <label class="form__input" :class="{error: isCityError}">
                    <input type="text" name="register-city" maxlength="200" placeholder="Выбери свой город *"
                           v-model="registerCity"
                           @focus="isCityError = false"/>
                </label>
            </div>

            <modal-button-agree name="register-agree" :error="errorAgree" @agree="agreeHandler"/>

            <page-button type="submit" class="btn_register" color="red">
                <span>Зарегистрироваться</span>
            </page-button>
        </form>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import Inputmask from 'inputmask';
import {authRegister} from '/src/api/modal-auth-register';
import ModalWrapper from '/src/components/ModalWrapper';
import PageButton from '/src/components/PageButton';
import ModalButtonAgree from '/src/components/ModalButtonAgree';

export default {
    name: 'ModalAuthRegister',
    components: {
        ModalWrapper,
        PageButton,
        ModalButtonAgree,
    },
    PHONE_ERROR_TEXT: 'Недопустимый формат',
    PWD_ERROR_TEXT: 'Пароль должен содержать только латинские буквы и цифры',
    setup() {
        const openModal = inject('openModal');

        return {openModal};
    },
    data() {
        return {
            name: 'register',
            important: false,
            registerEmail: '',
            isEmailError: false,
            registerPhone: '',
            isPhoneError: false,
            registerPassword: '',
            isPasswordError: false,
            registerCity: '',
            isCityError: false,
            errorPhoneText: '',
            errorPasswordText: '',
            isAgree: false,
            errorAgree: false,
        };
    },
    methods: {
        async submit() {
            if (this.registerEmail.length < 4) {
                this.isEmailError = true;
            }

            if (this.registerPhone.length !== 16 || this.registerPhone.indexOf('_') > -1) {
                this.isPhoneError = true;
                this.errorPhoneText = this.$options.PHONE_ERROR_TEXT;
            }

            if (!/^[a-zA-Z0-9]+$/.test(this.registerPassword)) {
                this.isPasswordError = true;
                this.errorPasswordText = this.$options.PWD_ERROR_TEXT;
            }

            if (this.registerCity.length < 2) {
                this.isCityError = true;
            }

            this.errorAgree = !this.isAgree;

            if (this.isEmailError || this.isPhoneError || this.isPasswordError || this.isCityError || this.errorAgree) {
                return;
            }

            await authRegister({
                email: this.registerEmail,
                phone: this.registerPhone,
                password: this.registerPassword,
                city: this.registerCity,
            });

            this.registerEmail = '';
            this.registerPhone = '';
            this.registerPassword = '';
            this.registerCity = '';

            this.errorPhoneText = '';
            this.errorPasswordText = '';

            this.openModal('success');
        },
        agreeHandler(value) {
            this.isAgree = value;
            this.errorAgree = !value;
        },
    },
    mounted() {
        Inputmask('+7(999)999-99-99').mask(this.$refs.tel);
    },
    beforeUnmount() {
        Inputmask.remove(this.$refs.tel);
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.btn_register {
    margin: 0;
    width: 264px;

    @media (max-width: $sm_max) {
        width: 181px;
    }
}
</style>