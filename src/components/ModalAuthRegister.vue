<template>
    <section class="modal modal_auth" data-modal-name="register" data-modal-important="off">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <ModalButtonClose/>
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
                                <input type="tel" name="register-phone" maxlength="200"
                                       placeholder="Введи свой телефон *">
                            </label>
                        </div>
                        <div class="form__inputs">
                            <label class="form__input">
                                <input type="password" name="register-password" maxlength="200"
                                       placeholder="Придумай пароль *">
                            </label>
                            <label class="form__input form__input_select">
                                <input type="text" name="register-city" maxlength="200"
                                       placeholder="Выбери свой город *">
                            </label>
                        </div>
                        <input type="checkbox" name="receipt-agree" id="register-agree" data-hidden="on">
                        <label class="form__checkbox" for="register-agree">
                            <span class="form__check">
                                <svg width="14" height="10" viewBox="0 0 14 10"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7368 1.52152C14.0878 1.17389 14.0878 0.608145 13.7365 0.260618C13.3852 -0.0868728 12.8134 -0.0868728 12.4621 0.260618L4.79273 7.84818L1.53821 4.62843C1.36809 4.46013 1.14184 4.36745 0.901202 4.36745C0.660493 4.36745 0.43417 4.46023 0.263908 4.62864C0.0937165 4.79701 0 5.02089 0 5.25906C0 5.49719 0.0937165 5.72107 0.263873 5.88937L4.15519 9.73936C4.50668 10.0868 5.07846 10.0869 5.42963 9.7394L13.7368 1.52152Z"
                                          fill="currentColor"></path>
                                </svg>
                            </span>
                            <span>
                                Я согласен с
                                <a href="#" download>политикой обработки персональных данных</a>
                                и
                                <a href="#" download>условиями акции</a>
                            </span>
                        </label>
                        <button class="button" type="submit"><span>Зарегистрироваться</span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ModalButtonClose from '/src/components/ModalButtonClose.vue';

export default {
    name: 'ModalAuthRegister',
    components: {
        ModalButtonClose,
    },
};
</script>