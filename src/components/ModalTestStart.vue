<template>
    <modal-wrapper class="modal_test modal_start" :name="name">
        <template #back>
            <img alt="" class="image_lg" src="../assets/images/modal-test-1-lg.png"/>
            <img alt="" class="image_md" src="../assets/images/modal-test-1-md.png"/>
            <img alt="" class="image_sm" src="../assets/images/modal-test-1-sm.png"/>
        </template>

        <div class="text">
            Я подготовил для тебя необычный тест. Просто выбирай картинки, которые тебе нравятся, а
            я подберу ручки, которые подчеркнут твою индивидуальность лучше всего! Погнали?
        </div>
        <div class="title">
            Давай узнаем,<br> какая ручка<br> Berlingo подходит<br> именно тебе!
        </div>
        <!-- todo button -->
        <!-- todo href="#" -->
        <a class="button" href="#" @click="openModal('test_2')">
            <span>Начать тест</span>
        </a>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import {setupModalMixin, openModalMixin} from '/src/mixins/miscModal';

import ModalWrapper from '/src/components/ModalWrapper';

export default {
    name: 'ModalTestStart',
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
            name: 'test_1',
            important: false,
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.modal_start {
    .modal__body-0 {
        padding-top: 40px;
        height: 700px;

        @media (max-width: 1399px) {
            height: 570px;
        }

        @media (max-width: $sm_max) {
            padding-top: 0;
            height: 730px;
        }
    }

    .modal__body-1, .modal__body-2 {
        height: 660px;

        @media (max-width: 1399px) {
            height: 530px;
        }

        @media (max-width: $sm_max) {
            height: 730px;
        }
    }

    .back {
        top: -40px;
        right: -120px;

        @media (max-width: $sm_max) {
            top: auto;
            bottom: -106px;
            right: -235px;

            img {
                width: 535px;
                height: 559px;
            }
        }
    }

    .title {
        color: #000000;
        font-size: 48px;
        line-height: 58px;
        margin: 144px 100px 60px;
        width: 330px;

        @media (max-width: 1399px) {
            margin: 144px 100px 40px;
        }

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
            margin: 123px 80px 50px;
            width: 300px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
            margin: 60px 20px 30px;
        }
    }

    .text {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        width: 370px;
        right: 90px;
        bottom: 140px;

        @media (max-width: 1399px) {
            bottom: 29px;
        }

        @media (max-width: $md_max) {
            font-size: 18px;
            line-height: 22px;
            width: 300px;
            right: 80px;
            bottom: 90px;
        }

        @media (max-width: $sm_max) {
            font-size: 16px;
            line-height: 19px;
            width: 206px;
            right: 20px;
            bottom: 40px;
        }
    }

    // todo button
    .button {
        background: linear-gradient(180deg, #ff9c47 0%, #e600c6 100%);
        color: #ffffff;
        margin: 0 100px 34px;
        width: 203px;

        @media (max-width: $md_max) {
            margin: 0 80px 34px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 493px;
            width: 138px;
        }
    }
}
</style>