<template>
    <div class="main main_rel main_index index-top__main">

        <div class="text">
            Участвуй в акции и получи призы <br/> от Berlingo и Павла Воли
        </div>

        <page-button type="button" color="white"
                     class="btn btn_check"
                     :data-modal-open="auth ? 'receipt' : 'register'">
            <span>Зарегистрируй чек и получи призы</span>
        </page-button>

        <page-button type="button" color="black" bordered
                     class="btn btn_pen"
                     data-modal-open="test_1">
            <span>Найди свою идеальную ручку</span>
        </page-button>

    </div>
</template>

<script>
import PageButton from '/src/components/PageButton';
import {mapGetters} from 'vuex';

export default {
    name: 'IndexTopMain',
    components: {
        PageButton,
    },
    data() {
        return {
            // auth: false,
        };
    },
    computed: {
        computed: {
            ...mapGetters({
                auth: 'getAuth',
            }),
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-top__main {
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .text {
        transform: translateY(-50%);
        position: absolute;
        display: block;
        left: 0;
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        top: 138px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
            top: 103px;
        }

        @media (max-width: $sm_max) {
            font-size: 22px;
            line-height: 26px;
            top: 66px;
        }
    }

    .btn {
        transform: translateY(-50%);
        position: absolute;
        left: 0;
        width: 368px;

        @media (max-width: $sm_max) {
            width: 254px;
        }

        &_check {
            top: 276px;

            @media (max-width: $md_max) {
                top: 226px;
            }

            @media (max-width: $sm_max) {
                top: 162px;
            }
        }

        &_pen {
            top: 396px;

            @media (max-width: $md_max) {
                top: 346px;
            }

            @media (max-width: $sm_max) {
                top: 242px;
            }
        }
    }
}
</style>