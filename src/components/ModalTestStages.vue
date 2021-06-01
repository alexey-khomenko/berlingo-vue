<template>
    <modal-wrapper class="modal_test modal_stage" :name="name" :important="important">
        <div class="title">
            Шаг {{ step }}/4
        </div>
        <div class="subtitle">
            Выбери знак, который тебе больше нравится
        </div>

        <form class="form" ref="form">
            <template v-for="(n, idx) in [1,2,3,4]" :key="idx">
                <input type="radio" :id="`i-${step}_${n}`"
                       :name="`step_${step}`" @change="selectAnswer(n * 10)"/>
                <label :for="`i-${step}_${n}`">
                    <!-- todo data-selected нужен -->
                    <img alt="" data-selected="off"
                         :src="require(`../assets/images/modal-test-${step + 1}-${n}.png`)"/>
                    <!-- todo data-selected нужен -->
                    <img alt="" data-selected="on"
                         :src="require(`../assets/images/modal-test-${step + 1}-${n}-selected.png`)"/>
                </label>
            </template>
        </form>
        <page-button type="button" class="btn_test_stage" color="green" @click="openModal(`test_${step + 2}`)"
                     :disabled="isDisabled">
            <span>Дальше</span>
        </page-button>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import ModalWrapper from '/src/components/ModalWrapper';
import PageButton from '/src/components/PageButton';

export default {
    name: 'ModalTestStage',
    components: {
        ModalWrapper,
        PageButton,
    },
    props: {
        step: {
            type: Number,
            required: true,
            validator: function (value) {
                return value > 0;
            },
        },
    },
    setup() {
        const openModal = inject('openModal');
        const openedModal = inject('openedModal');
        const testResult = inject('testResult');
        const setTestResult = inject('setTestResult');

        return {openModal, openedModal, testResult, setTestResult};
    },
    data() {
        return {
            important: true,
            isDisabled: true,
        };
    },
    computed: {
        name() {
            return `test_${this.step + 1}`;
        },
    },
    watch: {
        openedModal(value) {
            if (value !== this.name) return;

            this.$refs.form.reset();
            this.isDisabled = true;
        },
    },
    methods: {
        selectAnswer(value) {
            this.isDisabled = false;
            this.setTestResult(Number(this.testResult) + Number(value));
        },
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

    .btn_test_stage {
        margin: 0 100px 54px;
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