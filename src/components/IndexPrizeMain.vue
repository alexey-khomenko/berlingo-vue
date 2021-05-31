<template>
    <div class="main main_rel main_index index-prize__main">
        <div class="title">
            Гарантированный приз
        </div>
        <div class="text">
            Каждый участник, зарегистрировавший чек, автоматически в личном кабинете получит подарок – марафон с
            Павлом Волей
        </div>
        <page-button type="button" color="white" class="btn" @click="openModal(auth ? 'receipt' : 'register')">
            <span>Зарегистрируй чек</span>
        </page-button>
    </div>
</template>

<script>
import {inject} from 'vue';
import {mapGetters} from 'vuex';
import PageButton from '/src/components/PageButton';

export default {
    name: 'IndexPrizeMain',
    components: {
        PageButton,
    },
    setup() {
        const openModal = inject('openModal');

        return {openModal};
    },
    computed: {
        ...mapGetters({
            auth: 'getAuth',
        }),
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-prize__main {
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .title {
        display: block;
        position: absolute;
        transform: translateY(-50%);
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        top: 212px;
        left: 100px;
        width: 460px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
            top: 180px;
            left: 80px;
            width: 380px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
            top: 94px;
            left: 0;
            width: 280px;
        }
    }

    .text {
        display: block;
        position: absolute;
        transform: translateY(-50%);
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        top: 325px;
        left: 100px;
        width: 460px;

        @media (max-width: $md_max) {
            font-size: 24px;
            line-height: 29px;
            top: 255px;
            left: 80px;
            width: 460px;
        }

        @media (max-width: $sm_max) {
            font-size: 18px;
            line-height: 22px;
            top: 173px;
            left: 0;
            width: 280px;
        }
    }

    .btn {
        position: absolute;
        transform: translateY(-50%);
        top: 468px;
        left: 100px;
        width: 253px;

        @media (max-width: $md_max) {
            top: 368px;
            left: 80px;
        }

        @media (max-width: $sm_max) {
            top: 287px;
            left: 0;
            width: 173px;
        }
    }
}
</style>