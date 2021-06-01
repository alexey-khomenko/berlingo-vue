<template>
    <div class="shadow" :class="{open: openedShadow}">
        <div class="modal-wrapper" :class="{open: openedWrapper}" @click="modalClose">
            <modal-auth-login/>
            <modal-auth-register/>
            <modal-auth-success/>
            <modal-receipt/>
            <modal-test-start/>
            <modal-test-stages :step="1"/>
            <modal-test-stages :step="2"/>
            <modal-test-stages :step="3"/>
            <modal-test-stages :step="4"/>
            <modal-test-finish/>
        </div>
    </div>
</template>

<script>
import {inject, provide, ref} from 'vue';
import ModalAuthLogin from '/src/components/ModalAuthLogin';
import ModalAuthRegister from '/src/components/ModalAuthRegister';
import ModalAuthSuccess from '/src/components/ModalAuthSuccess';
import ModalReceipt from '/src/components/ModalReceipt.vue';
import ModalTestStart from '/src/components/ModalTestStart';
import ModalTestStages from '/src/components/ModalTestStages';
import ModalTestFinish from '/src/components/ModalTestFinish';

export default {
    name: 'PageShadow',
    components: {
        ModalAuthLogin,
        ModalAuthRegister,
        ModalAuthSuccess,
        ModalReceipt,
        ModalTestStart,
        ModalTestStages,
        ModalTestFinish,
    },
    setup() {
        const modalImportant = ref(false);

        const setModalImportant = (value) => {
            modalImportant.value = value;
        };

        provide('setModalImportant', setModalImportant);

        const openedShadow = inject('openedShadow');
        const openedWrapper = inject('openedWrapper');

        const openModal = inject('openModal');

        return {modalImportant, openedShadow, openedWrapper, openModal};
    },
    methods: {
        modalClose() {
            if (!this.modalImportant) this.openModal(null);
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.shadow {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, .65);

    &.open {
        z-index: 600;
    }

    .modal-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        transform: translateY(-100%);

        transition-duration: 450ms;
        transition-property: transform;
        transition-timing-function: ease-in;

        padding: 5px;

        @media (max-width: $sm_max) {
            padding: 0;
        }

        &.open {
            transform: translateY(0%);
        }

        .modal {
            position: relative;
            z-index: 700;
            width: 100%;
            max-height: 100%;
            overflow: auto;
            display: none;
            max-width: 1160px;

            @media (max-width: $md_max) {
                max-width: 940px;
            }

            @media (max-width: $sm_max) {
                max-width: 320px;
            }

            &.open {
                display: block;
            }

            &__body-0 {
                overflow: hidden;
            }

            &__body-1 {
                overflow: visible;
                background-color: #ffffff;
            }

            &__body-2 {
                overflow: hidden;
                z-index: 1;
            }

            &__body-0, &__body-1, &__body-2 {
                display: block;
                position: relative;
                border-radius: 40px;

                @media (max-width: $sm_max) {
                    border-radius: 0;
                }
            }

            // todo button
            .button {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 99999px;
                box-sizing: border-box;
                text-decoration: none;
                height: 80px;

                @media (max-width: $sm_max) {
                    height: 60px;
                }

                &:hover span, &:focus span {
                    transform: scale(1.05, 1.15);
                }

                span {
                    padding-top: 3px;
                    transition: transform 500ms ease;
                    text-transform: uppercase;
                    font-family: "Bebas Neue", sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    letter-spacing: 0.01em;
                    font-size: 20px;

                    @media (max-width: $sm_max) {
                        font-size: 14px;
                    }
                }
            }

            * {
                box-sizing: border-box;
            }
        }
    }
}

.modal_auth {
    .modal__body-0, .modal__body-1, .modal__body-2 {
        height: 702px;

        @media (max-width: $md_max) {
            height: 597px;
        }

        @media (max-width: $sm_max) {
            min-height: 480px;
            height: auto;
        }
    }

    .titles {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        margin: 80px 100px 40px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
            margin: 60px 80px 20px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
            margin: 60px 20px 20px;

            &::before {
                content: "";
                display: block;
                position: absolute;
                z-index: 1;
                top: -20px;
                left: -20px;
                right: -20px;
                height: 1px;
                background-color: #000000;
            }
        }

        a {
            color: #000000;
            position: relative;
            text-decoration: none;

            &:hover, &:focus {
                color: #828282;
            }

            &:after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                height: 1px;
                border-bottom: 3px dashed currentColor;
                bottom: 6px;

                @media (max-width: $sm_max) {
                    border-width: 2px;
                    bottom: 3px;
                }
            }
        }

        .title {
            color: #ff327c;
        }

        .center {
            color: #000000;
            margin: 0 8px;

            @media (max-width: $sm_max) {
                margin: 0 6px;
            }
        }
    }

    .subtitle {
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        margin: 0 100px 60px;

        @media (max-width: $md_max) {
            font-size: 18px;
            line-height: 22px;
            margin: 0 80px 40px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
        }
    }

    // todo button
    .button {
        color: #ffffff;
        cursor: pointer;
        background: linear-gradient(180deg, #ff9c47 0%, #e600c6 100%);
        border: none;
    }

    // todo button
    &[data-modal-name="login"] .button {
        margin: 0;
        width: 162px;

        @media (max-width: $sm_max) {
            width: 109px;
        }
    }

    // todo button
    &[data-modal-name="register"] .button {
        margin: 0;
        width: 264px;

        @media (max-width: $sm_max) {
            width: 181px;
        }
    }

    // todo button
    &[data-modal-name="success"] .button {
        margin: 0 100px 80px;
        width: 173px;

        @media (max-width: $md_max) {
            margin: 0 80px 60px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
            width: 118px;
        }
    }

    .subtitles {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        color: #000000;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        margin: 0 100px 60px;

        @media (max-width: $md_max) {
            margin: 0 80px 40px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
        }

        &__left, &__right {
            font-size: 18px;
            line-height: 22px;
            width: 460px;

            @media (max-width: $md_max) {
                width: 380px;
            }

            @media (max-width: $sm_max) {
                width: auto;
            }
        }

        &__left {
            @media (max-width: $sm_max) {
                margin-bottom: 20px;
            }
        }

        &__right {
            a {
                color: #000000;
                position: relative;
                text-decoration: none;

                &:hover, &:focus {
                    color: #828282;
                }

                &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 1px;
                    border-bottom: 2px dashed currentColor;
                    bottom: 0;

                    @media (max-width: $sm_max) {
                        border-width: 1px;
                    }
                }
            }
        }
    }

    .form {
        margin: 0 100px 100px;

        @media (max-width: $md_max) {
            margin: 0 80px 40px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
        }

        &__inputs {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 40px;
        }

        &__input {
            display: block;
            position: relative;
            width: 460px;

            @media (max-width: $md_max) {
                width: 380px;
            }

            @media (max-width: $sm_max) {
                width: 100%;
            }

            &.error {
                input {
                    border-color: #ff327c;
                }

                &::before {
                    content: attr(data-error);
                    position: absolute;
                    bottom: 65px;
                    left: 30px;
                    right: 30px;
                    color: #ff327c;
                    font-family: "PF Din Text Cond Pro", sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 14px;

                    @media (max-width: $sm_max) {
                        font-size: 11px;
                    }
                }
            }

            &:not(:last-child) {
                @media (max-width: $sm_max) {
                    margin-bottom: 40px;
                }
            }

            input {
                border-radius: 99999px;
                border: 1px solid #828282;
                color: #828282;
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                padding: 0 39px;
                width: 100%;
                height: 60px;

                &::placeholder {
                    opacity: 1;
                }

                &:focus::placeholder {
                    opacity: 0;
                }
            }
        }
    }
}

.modal_test {
    .title {
        display: block;
        position: relative;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;

        @media (max-width: $sm_max) {
            width: auto !important;

            &::before {
                content: "";
                display: block;
                position: absolute;
                z-index: 1;
                top: -20px;
                left: -20px;
                right: -20px;
                height: 1px;
                background-color: #000000;
            }

            br {
                display: none;
            }
        }
    }

    .subtitle {
        display: block;
        color: #000000;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;

        @media (max-width: $sm_max) {
            width: auto !important;
        }
    }

    .text {
        display: block;
        position: absolute;
    }
}
</style>
