<template>
    <div class="main main_rel main_account account-balls__main">
        <div class="title">
            Мои баллы
        </div>
        <div class="balls-number">
            {{ balls }}
        </div>
        <div class="balls-text">
            баллов
        </div>
        <div class="text">
            Повышай баллы и выигрывай призы.
            <br/>
            Больше баллов — больше призов!
        </div>
    </div>
</template>

<script>
import {loadBalls} from '/src/api/account-balls-main';

export default {
    name: 'AccountBallsMain',
    data() {
        return {
            balls: 0,
        };
    },
    async created() {
        this.balls = await loadBalls();
    }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-balls__main {
    margin: 0 auto;
    height: 565px;
    padding-top: 23px;
    box-sizing: border-box;

    @media (max-width: $md_max) {
        height: 451px;
    }

    @media (max-width: $sm_max) {
        height: 504px;
    }

    .title {
        display: block;
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        padding-top: 10px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
            padding-top: 20px;
        }
    }

    .balls-number, .balls-text, .text {
        top: 50%;
        left: 50%;
        position: absolute;
        display: block;
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    .balls-number {
        text-align: center;
        font-size: 120px;
        line-height: 144px;
        width: 260px;
        transform: translate(-530px, -83px);

        @media (max-width: $md_max) {
            font-size: 90px;
            line-height: 108px;
            width: 220px;
            transform: translate(-430px, -42px);
        }

        @media (max-width: $sm_max) {
            transform: translate(-110px, -70px);
        }
    }

    .balls-text {
        text-align: center;
        font-size: 48px;
        line-height: 58px;
        width: 260px;
        transform: translate(-530px, 30px);

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
            width: 220px;
            transform: translate(-430px, 45px);
        }

        @media (max-width: $sm_max) {
            transform: translate(-110px, 18px);
        }
    }

    .text {
        font-size: 30px;
        line-height: 36px;
        width: 560px;
        transform: translate(-180px, -30px);

        @media (max-width: $md_max) {
            font-size: 24px;
            line-height: 29px;
            width: 540px;
            transform: translate(-69px, -2px);
        }

        @media (max-width: $sm_max) {
            font-size: 18px;
            line-height: 22px;
            width: 280px;
            transform: translate(-140px, 156px);
        }
    }
}
</style>