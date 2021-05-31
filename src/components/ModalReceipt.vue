<template>
    <modal-wrapper class="modal_receipt" :class="{open}" ref="root" @click.stop>
        <div class="title">
            Зарегистрируй чек
        </div>
        <div class="subtitle">
            После регистрации чека, он поступит на модерирование. Статус модерации чека ты сможешь
            отследить в личном кабинете
        </div>

        <form class="form" @submit.prevent>
            <div class="form__inputs">
                <label class="form__input">
                    <input type="text" name="receipt-shop" maxlength="200"
                           placeholder="Укажи магазин покупки">
                </label>
                <!-- todo button -->
                <!-- todo data- -->
                <label class="button form__file" data-text="только JPG, JPEG, PNG до 20Мб"
                       data-hidden="off">
                    <input type="file" name="receipt-file">
                    <span>Загрузи фото Чека</span>
                </label>
                <!-- todo data- -->
                <div class="form__file-selected" data-hidden="on">
                    <img alt="" src="">
                    <span></span>
                    <!-- todo href="#" -->
                    <!-- todo data- -->
                    <a href="#" data-receipt-shop-reset>
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6673 0.335559L15.6639 0.332131C15.221 -0.11071 14.5033 -0.11071 14.0605 0.332131L7.99971 6.39349L1.93836 0.332131C1.49552 -0.11071 0.777829 -0.11071 0.334988 0.332131L0.332131 0.335559C-0.11071 0.7784 -0.11071 1.49609 0.332131 1.93893L6.39349 7.99971L0.332131 14.0611C-0.11071 14.5039 -0.11071 15.2216 0.332131 15.6644L0.335559 15.6679C0.7784 16.1107 1.49609 16.1107 1.93893 15.6679L7.99971 9.60594L14.0611 15.6673C14.5039 16.1101 15.2216 16.1101 15.6644 15.6673L15.6679 15.6639C16.1107 15.221 16.1107 14.5033 15.6679 14.0605L9.60594 7.99971L15.6673 1.93836C16.1101 1.49609 16.1101 0.7784 15.6673 0.335559Z"
                                  fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <modal-button-agree name="receipt-agree"/>

            <!-- todo button -->
            <button class="button form__button" type="submit">
                <span>Зарегистрировать чек</span>
            </button>
        </form>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import {setupModalMixin, openModalMixin} from '/src/mixins/miscModal';

import ModalWrapper from '/src/components/ModalWrapper';
import ModalButtonAgree from '/src/components/ModalButtonAgree';

export default {
    name: 'ModalReceipt',
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
            name: 'receipt',
            important: false,
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.modal_receipt {
    .modal__body-0, .modal__body-1, .modal__body-2 {
        height: 570px;

        @media (max-width: $md_max) {
            height: 517px;
        }

        @media (max-width: $sm_max) {
            height: auto;
        }
    }

    .title {
        display: block;
        position: relative;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        margin: 60px 100px 20px;

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
    }

    .subtitle {
        display: block;
        color: #000000;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin: 0 100px 60px;
        width: 460px;

        @media (max-width: $md_max) {
            margin: 0 80px 40px;
            width: auto;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 30px;
        }
    }

    .form {
        margin: 0 50px 68px 100px;

        @media (max-width: $md_max) {
            margin: 0 80px 40px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
        }

        &__inputs {
            margin: 0 0 40px;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;

            @media (max-width: $md_max) {
                margin: 0 0 30px;
            }

            @media (max-width: $sm_max) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        &__input {
            margin: 0 40px 0 0;
            width: 460px;

            @media (max-width: $md_max) {
                margin: 0 20px 0 0;
                width: 380px;
            }

            @media (max-width: $sm_max) {
                margin: 0 0 20px 0;
                width: 100%;
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

        &__file {
            margin: 0;
            position: relative;
            cursor: pointer;
            color: #000000;
            border: 2px solid #000000;
            background-color: #ffffff;
            height: 60px !important;
            width: 252px;

            @media (max-width: $sm_max) {
                width: 173px;
            }

            &::after {
                content: attr(data-text);
                position: absolute;
                transform: translate(20px, -50%);
                left: 100%;
                top: 50%;
                color: #828282;
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                width: 150px;

                @media (max-width: $md_max) {
                    width: 78px;
                }
            }

            input {
                display: none;
            }
        }

        &__file-selected {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
            border-radius: 99999px;
            border: 2px solid #000000;
            background-color: #ffffff;
            width: 496px;

            @media (max-width: $md_max) {
                width: 380px;
            }

            @media (max-width: $sm_max) {
                width: 100%;
            }

            img {
                flex-shrink: 0;
                object-fit: cover;
                width: 98px;
                height: 56px;

                @media (max-width: $sm_max) {
                    width: 58px;
                }
            }

            span {
                max-height: 56px;
                margin: 0 20px;
                overflow: hidden;
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
            }

            a {
                flex-shrink: 0;
                margin-left: auto;
                margin-right: 38px;
                text-decoration: none;
                width: 16px;
                height: 16px;

                @media (max-width: $md_max) {
                    margin-right: 20px;
                }

                &:hover svg, &:focus svg {
                    transform: scale(1.2);
                }

                svg {
                    transition: transform 500ms ease;
                    color: #000000;
                }
            }
        }

        // todo button
        &__button {
            margin: 0;
            cursor: pointer;
            color: #ffffff;
            background: linear-gradient(180deg, #ff9c47 0%, #e600c6 100%);
            border: none;
            width: 276px;

            @media (max-width: $sm_max) {
                width: 189px;
            }
        }
    }
}
</style>