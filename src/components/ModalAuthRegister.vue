<template>
    <modal-wrapper class="modal_auth" :class="{open}" ref="root" @click.stop>
        <div class="titles">
            <!-- todo href="#" -->
            <a href="#" @click="openModal('login')">Авторизация</a>
            <span class="center">или</span>
            <span class="title">регистрация</span>
        </div>
        <div class="subtitles">
            <div class="subtitles__left">
                Пожалуйста, зарегистрируйся, чтобы войти в личный кабинет и зарегистрировать чек
            </div>
            <div class="subtitles__right">
                Уже зарегистрирован?
                <!-- todo href="#" -->
                <a href="#" @click="openModal('login')">Войди</a>
                в личный кабинет
            </div>
        </div>

        <form class="form" @submit.prevent>
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
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import {setupModalMixin, openModalMixin} from '/src/mixins/miscModal';

import ModalWrapper from '/src/components/ModalWrapper';
import ModalButtonAgree from '/src/components/ModalButtonAgree';
import Inputmask from 'inputmask';

export default {
    name: 'ModalAuthRegister',
    components: {
        ModalWrapper,
        ModalButtonAgree,
    },
    mixins: [setupModalMixin, openModalMixin],
    setup() {
        const openModal = inject('openModal');
        const openedModal = inject('openedModal');

        return {openModal, openedModal};
    },
    data() {
        return {
            name: 'register',
            important: false,
        };
    },
    mounted() {
        Inputmask('+7(999)999-99-99').mask(this.$refs.tel);
    },
    beforeUnmount() {
        Inputmask.remove(this.$refs.tel);
    },
};
</script>