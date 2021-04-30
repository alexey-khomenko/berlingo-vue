<template>
    <div class="main main_rel main_account account-marathon__main">
        <div class="title">
            Участвуй в марафоне с Павлом Волей
        </div>
        <div class="btn" data-modal-open="receipt">
            <PageButton type="button" color="white">
                <span>Участвовать</span>
            </PageButton>
        </div>
    </div>
</template>

<script>
import PageButton from '/src/components/PageButton';

export default {
    name: 'AccountMarathonMain',
    components: {
        PageButton,
    },
    data() {
        return {
            balls: 260,
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-marathon__main {
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
        top: 281px;
        left: 100px;
        width: 460px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
            top: 210px;
            left: 80px;
            width: 380px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
            top: 170px;
            left: 0;
            width: 280px;
        }
    }

    .btn {
        position: absolute;
        transform: translateY(-50%);
        top: 440px;
        left: 100px;
        width: 209px;

        @media (max-width: $md_max) {
            top: 368px;
            left: 80px;
        }

        @media (max-width: $sm_max) {
            top: 270px;
            left: 0;
            width: 143px;
        }
    }
}
</style>