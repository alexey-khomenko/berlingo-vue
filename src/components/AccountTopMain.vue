<template>
    <div class="main main_rel main_account account-top__main">
        <div class="title">
            Привет, lubimov95!
        </div>
        <div class="buttons">
            <div class="buttons__receipt" data-modal-open="receipt">
                <PageButton type="button" color="white">
                    <span>Зарегистрируй чек и получи призы</span>
                </PageButton>
            </div>
            <div class="buttons__exit" data-auth-exit>
                <PageButton type="button" color="black" bordered>
                    <span>Выйти</span>
                </PageButton>
            </div>
        </div>
    </div>
</template>

<script>
import PageButton from '/src/components/PageButton';

export default {
    name: 'AccountTopMain',
    components: {
        PageButton,
    }
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