<template>
    <div class="main main_rel main_index index-stages__main">

        <div class="text text_one">
            Покупай <br/> продукцию <br/> Berlingo
        </div>

        <div class="text text_two">
            <button type="button" @click="blurElement($event); openModal(auth ? 'receipt' : 'register');">
                Регистрируй
            </button>
            чек <br/> на сайте
        </div>

        <div class="text text_three">
            Получи <br/> гарантированный <br/> марафон <br/> от Павла Воли
        </div>

        <div class="text text_four">
            Выигрывай <br/> крутые призы
        </div>

    </div>
</template>

<script>
import {inject} from 'vue';
import {mapGetters} from 'vuex';

export default {
    name: 'IndexStagesMain',
    setup() {
        const openModal = inject('openModal');
        const blurElement = inject('blurElement');

        return {openModal, blurElement};
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

.index-stages__main {
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .text {
        position: absolute;
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        width: 200px;

        @media (max-width: $md_max) {
            font-size: 22px;
            line-height: 26.4px;
            width: 150px;
        }

        @media (max-width: $sm_max) {
            font-size: 18px;
            line-height: 21.6px;
            width: 130px;
        }

        &_one {
            transform: translate(-50%, -50%);
            top: 182px;
            left: 380px;

            @media (max-width: $md_max) {
                top: 158px;
                left: 315px;
            }

            @media (max-width: $sm_max) {
                top: 130px;
                left: 230px;
            }
        }

        &_two {
            transform: translate(-50%, -50%);
            top: 524px;
            left: 460px;

            @media (max-width: $md_max) {
                top: 456px;
                left: 385px;
            }

            @media (max-width: $sm_max) {
                top: 440px;
                left: 230px;
            }
        }

        &_three {
            transform: translate(50%, -50%);
            top: 270px;
            right: 180px;

            @media (max-width: $md_max) {
                top: 245px;
                right: 145px;
            }

            @media (max-width: $sm_max) {
                top: 770px;
                right: 40px;
            }
        }

        &_four {
            transform: translate(50%, -50%);
            top: 610px;
            right: 100px;

            @media (max-width: $md_max) {
                top: 555px;
                right: 75px;
            }

            @media (max-width: $sm_max) {
                top: 1070px;
                right: 30px;
            }
        }

        button {
            display: inline;
            text-decoration: underline;
            cursor: pointer;
            transition: transform 500ms ease;
            border: none;
            padding: 0;
            background-color: transparent;
            color: #ffffff;
            font-family: "PF Din Text Cond Pro", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;

            @media (max-width: $md_max) {
                font-size: 22px;
            }

            @media (max-width: $sm_max) {
                font-size: 18px;
            }

            &:hover, &:focus {
                transform: scale(1.05, 1.15);
            }
        }
    }
}
</style>