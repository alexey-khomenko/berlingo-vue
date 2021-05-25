<template>
    <section class="modal modal_auth" :class="{open}">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <modal-button-close/>
                    <div class="titles">
                        <span class="title">Авторизация</span>
                        <span class="center">или</span>
                        <a href="#" @click="openModal('register')">регистрация</a>
                    </div>
                    <div class="subtitles">
                        <div class="subtitles__left">
                            Пожалуйста, авторизуйся, чтобы войти в личный кабинет и зарегистрировать чек
                        </div>
                        <div class="subtitles__right">
                            Ещё нет личного кабинета?
                            <a href="#" @click="openModal('register')">Зарегистрируйся</a>
                        </div>
                    </div>
                    <form class="form" @submit.prevent="">
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
import {emitsModalMixin, setupModalMixin, openModalMixin} from '/src/mixins/miscModal';
import {mapActions} from 'vuex';
import ModalButtonClose from '/src/components/ModalButtonClose';
import {inject} from 'vue';

export default {
    name: 'ModalAuthLogin',
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