<template>
    <modal-wrapper class="modal_auth" :class="{open}" ref="root" @click.stop>
        <div class="titles">
            <span class="title">Авторизация</span>
            <span class="center">или</span>
            <!-- todo href="#" -->
            <a href="#" @click="openModal('register')">регистрация</a>
        </div>
        <div class="subtitles">
            <div class="subtitles__left">
                Пожалуйста, авторизуйся, чтобы войти в личный кабинет и зарегистрировать чек
            </div>
            <div class="subtitles__right">
                Ещё нет личного кабинета?
                <!-- todo href="#" -->
                <a href="#" @click="openModal('register')">Зарегистрируйся</a>
            </div>
        </div>

        <form class="form" @submit.prevent>
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
            <button class="button" type="submit">
                <span>Войти</span>
            </button>
        </form>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import {setupModalMixin, openModalMixin} from '/src/mixins/miscModal';

import {mapActions} from 'vuex';
import ModalWrapper from '/src/components/ModalWrapper';

export default {
    name: 'ModalAuthLogin',
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
            name: 'login',
            important: false,
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