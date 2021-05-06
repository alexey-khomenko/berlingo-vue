<template>
    <section class="modal modal_test modal_stage" :data-modal-name="`test_${stage + 1}`" data-modal-important="on"
             v-for="(stage) in stages" :key="stage">
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="modal__body-2">
                    <modal-button-close/>
                    <div class="title">Шаг {{ stage }}/4</div>
                    <div class="subtitle">Выбери знак, который тебе больше нравится</div>
                    <form class="form">
                        <template v-for="(number, idx) in [1,2,3,4]" :key="idx">
                            <input type="radio" :id="`i-${stage}_${number}`"
                                   :name="`step_${stage}`" :value="number * 10"/>
                            <label :for="`i-${stage}_${number}`">
                                <img alt="" :src="require(`../assets/images/modal-test-${stage + 1}-${number}.png`)"
                                     data-selected="off"/>
                                <img alt=""
                                     :src="require(`../assets/images/modal-test-${stage + 1}-${number}-selected.png`)"
                                     data-selected="on"/>
                            </label>
                        </template>
                    </form>
                    <!-- todo button -->
                    <a class="button" href="#" :data-modal-open="`test_${stage + 2}`" data-disabled="on">
                        <span>Дальше</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ModalButtonClose from '/src/components/ModalButtonClose';

export default {
    name: 'ModalTestStage',
    components: {
        ModalButtonClose,
    },
    data() {
        return {
            stages: [1, 2, 3, 4],
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.modal_stage {
    .modal__body-0 {
        height: 660px;

        @media (max-width: 1399px) {
            height: 570px;
        }

        @media (max-width: $md_max) {
            height: 560px;
        }

        @media (max-width: $sm_max) {
            height: 615px;
        }
    }

    .modal__body-1, .modal__body-2 {
        height: 660px;

        @media (max-width: 1399px) {
            height: 570px;
        }

        @media (max-width: $md_max) {
            height: 560px;
        }

        @media (max-width: $sm_max) {
            height: 615px;
        }
    }

    .title {
        color: #828282;
        text-transform: uppercase;
        font-size: 18px;
        line-height: 22px;
        margin: 60px 100px 20px;

        @media (max-width: $md_max) {
            margin: 60px 80px 20px;
        }

        @media (max-width: $sm_max) {
            margin: 60px 20px 20px;
        }
    }

    .subtitle {
        font-size: 36px;
        line-height: 43px;
        margin: 0 100px 65px;

        @media (max-width: 1399px) {
            margin: 0 100px 40px;
        }

        @media (max-width: $md_max) {
            font-size: 30px;
            line-height: 36px;
            margin: 0 80px 40px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
            margin: 0 20px 40px;
        }
    }

    .form {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        margin: 0 100px 100px;
        height: 210px;

        @media (max-width: 1399px) {
            margin: 0 100px 40px;
        }

        @media (max-width: $md_max) {
            margin: 0 80px 72px;
            height: 170px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
            height: 280px;
        }

        input {
            display: none;
        }

        input:not(:checked) + label [data-selected="off"],
        input:checked + label [data-selected="on"] {
            display: block;
        }

        input:checked + label [data-selected="off"],
        input:not(:checked) + label [data-selected="on"] {
            display: none;
        }

        label {
            display: block;

            &:nth-of-type(3), &:nth-of-type(4) {
                @media (max-width: $sm_max) {
                    margin-top: auto;
                }
            }

            img {
                cursor: pointer;
                object-fit: contain;
                width: 210px;
                height: 210px;

                @media (max-width: $md_max) {
                    width: 170px;
                    height: 170px;
                }

                @media (max-width: $sm_max) {
                    width: 130px;
                    height: 130px;
                }
            }
        }
    }

    // todo
    .button {
        margin: 0 100px 54px;
        background: linear-gradient(180deg, #04bb33 0%, #00b58a 100%);
        color: #ffffff;
        width: 176px;

        @media (max-width: $md_max) {
            margin: 0 80px 60px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
            width: 119px;
        }
    }
}
</style>
