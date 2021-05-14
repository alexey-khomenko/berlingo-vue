<template>
    <div class="main main_rel main_account account-top__main">
        <div class="title">
            Привет, lubimov95!
        </div>
        <div class="buttons">
            <page-button type="button" color="white" class="buttons__receipt" data-modal-open="receipt">
                <span>Зарегистрируй чек и получи призы</span>
            </page-button>
            <page-button type="button" color="black" bordered class="buttons__exit" @click="logout">
                <span>Выйти</span>
            </page-button>
        </div>
    </div>
</template>

<script>
import PageButton from '/src/components/PageButton';
import {mapActions} from 'vuex';

export default {
    name: 'AccountTopMain',
    components: {
        PageButton,
    },
    methods: {
        ...mapActions([
            'logout',
        ]),
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-top__main {
    margin: 0 auto;
    padding-top: 80px;

    @media (max-width: $md_max) {
        padding-top: 60px;
    }

    @media (max-width: $sm_max) {
        padding-top: 40px;
    }

    .title {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 72px;
        margin-bottom: 60px;

        @media (max-width: $md_max) {
            font-size: 48px;
            line-height: 58px;
            margin-bottom: 40px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
        }
    }

    .buttons {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;

        &__receipt {
            margin: 0 20px 0 0;
            width: 368px;

            @media (max-width: $sm_max) {
                margin: 0 0 20px 0;
                width: 254px;
            }
        }

        &__exit {
            width: 165px;

            @media (max-width: $sm_max) {
                width: 112px;
            }
        }
    }
}
</style>