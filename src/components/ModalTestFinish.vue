<template>
    <modal-wrapper class="modal_test modal_finish" :name="name">
        <template #back>
            <img alt="" class="image_lg" src="../assets/images/modal-test-6-lg.png"/>
            <img alt="" class="image_md" src="../assets/images/modal-test-6-md.png"/>
            <img alt="" class="image_sm" src="../assets/images/modal-test-6-sm.png"/>
        </template>

        <template v-for="result in results" :key="result.number">
            <!-- todo data- -->
            <div class="title" :data-result="result.number" data-hidden="on">
                {{ result.title }}
            </div>
            <!-- todo data- -->
            <div class="subtitle" :data-result="result.number" data-hidden="on">
                {{ result.subtitle }}
            </div>
            <!-- todo data- -->
            <div class="pens" :data-result="result.number" data-hidden="on">
                <!-- todo href="#" -->
                <!-- todo data- -->
                <a class="pens__button" href="#" data-pens-toggler>
                    <svg width="16" height="32" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.375854 31.6749L0.377468 31.6765C0.851276 32.1284 1.59387 32.1037 2.03862 31.6221L15.679 16.8468C16.1148 16.3743 16.1059 15.6337 15.658 15.1727L15.5894 15.1026L2.03862 0.379276C1.59387 -0.103996 0.850467 -0.128738 0.375853 0.32402L0.374238 0.324844C-0.102798 0.780077 -0.127013 1.54457 0.320158 2.03032L13.188 15.999L0.320967 29.9694C-0.126205 30.4551 -0.10199 31.2204 0.375854 31.6749Z"
                              fill="currentColor"></path>
                    </svg>
                </a>
                <template v-for="pen in result.pens" :key="pen.number">
                    <!-- todo data- -->
                    <div class="pen" :data-slider="pen.number" data-hidden="off">
                        <a class="pen__link" :href="pen.link">
                            <img alt="" class="pen__image" :src="pen.image"/>
                        </a>
                        <div class="pen__texts">
                            <div class="pen__title">{{ pen.title }}</div>
                            <div class="pen__text">{{ pen.text }}</div>
                        </div>
                    </div>
                </template>
            </div>
        </template>

        <div class="text">
            Я подобрал для тебя ручки, которые подойдут именно тебе и подчеркнут твою
            индивидуальность лучше всех!
        </div>
        <div class="buttons">
            <!-- todo button -->
            <!-- todo href="#" -->
            <a class="button button_shops" href="#"
               @click="goToAnchor('shops')"><span>Где купить?</span></a>
            <a class="button button_prizes" href="#"
               @click="goToAnchor('prizes')"><span>Выигать призы!</span></a>
        </div>
    </modal-wrapper>
</template>

<script>
import {inject} from 'vue';
import {setupModalMixin, openModalMixin} from '/src/mixins/miscModal';

import ModalWrapper from '/src/components/ModalWrapper';

export default {
    name: 'ModalTestFinish',
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
            name: 'test_6',
            important: true,
            results: [
                {
                    number: 1,
                    title: 'Добряк',
                    subtitle: 'Нежные оттенки для легких и солнечных людей, которые ценят свой комфорт и спойную, ' +
                        'теплую атмосферу вокруг них.',
                    pens: [
                        {
                            number: 0,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 1 0',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                        {
                            number: 1,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 1 1',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                    ],
                },
                {
                    number: 2,
                    title: 'Бунтарь',
                    subtitle: 'Буйство красок для дерзких и активных личностей, которые всегда хотят выделяться из ' +
                        'общей массы и быть заметными. Не боятся отстаивать свои позиции.',
                    pens: [
                        {
                            number: 0,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 2 0',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                        {
                            number: 1,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 2 1',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                    ],
                },
                {
                    number: 3,
                    title: 'Прагматик',
                    subtitle: 'Классическая простота - для людей, которые предпочитают практичность вещей и всегда ' +
                        'страются держать фокус на важных задачах, не отвлекаясь на мелочи.',
                    pens: [
                        {
                            number: 0,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 3 0',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                        {
                            number: 1,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 3 1',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                    ],
                },
                {
                    number: 4,
                    title: 'Мечтатель',
                    subtitle: 'Ручки с необычными узорами для творческих и воздушных людей с горящими глазами, ' +
                        'которых вдохновляет мир вокруг них.',
                    pens: [
                        {
                            number: 0,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 3 0',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                        {
                            number: 1,
                            link: '#',
                            image: require('../assets/images/0_content-modal-pens.png'),
                            title: 'Color Zone 3 1',
                            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
                        },
                    ],
                },
            ],
            timerId: null,
        };
    },
    methods: {
        goToAnchor(to) {
            this.openModal(null);

            this.timerId = setTimeout(() => {
                this.$router.push({name: 'Index', hash: '#' + to});
            }, 760);
        },
    },
    beforeUnmount() {
        clearTimeout(this.timerId);
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.modal_finish {
    .modal__body-0 {
        padding-top: 40px;
        height: 700px;

        @media (max-width: 1399px) {
            height: 570px;
        }

        @media (max-width: $sm_max) {
            padding-top: 0;
            height: auto;
        }
    }

    .modal__body-1, .modal__body-2 {
        height: 660px;

        @media (max-width: 1399px) {
            height: 530px;
        }

        @media (max-width: $sm_max) {
            height: auto;
        }
    }

    .back {
        top: -40px;
        right: -180px;

        @media (max-width: $md_max) {
            right: -212px;
        }

        @media (max-width: $sm_max) {
            top: auto;
            bottom: -164px;
            right: -235px;

            img {
                width: 535px;
                height: 560px;
            }
        }
    }

    .title {
        color: #000000;
        font-size: 36px;
        line-height: 43px;
        margin: 60px 100px 25px;
        width: 560px;

        @media (max-width: 1399px) {
            margin: 55px 100px 10px;
        }

        @media (max-width: $md_max) {
            margin: 40px 80px 18px;
            width: 460px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
            margin: 60px 20px 20px;
        }
    }

    .subtitle {
        font-size: 18px;
        line-height: 22px;
        margin: 0 100px 40px;
        width: 560px;

        @media (max-width: 1399px) {
            margin: 0 100px 15px;
        }

        @media (max-width: $md_max) {
            margin: 0 80px 28px;
            width: 460px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 40px;
        }
    }

    .text {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        width: 260px;
        right: 100px;
        bottom: 100px;

        @media (max-width: 1399px) {
            bottom: 26px;
        }

        @media (max-width: $md_max) {
            font-size: 18px;
            line-height: 22px;
            width: 160px;
            right: 80px;
            bottom: 65px;
        }

        @media (max-width: $sm_max) {
            font-size: 16px;
            line-height: 19px;
            width: 206px;
            right: 20px;
            bottom: 40px;
        }
    }

    .pens {
        display: block;
        overflow: visible;
        position: relative;
        border: 1px solid #000000;
        border-radius: 20px;
        margin: 0 100px 50px;
        width: 500px;

        @media (max-width: 1399px) {
            margin: 0 100px 15px;
        }

        @media (max-width: $md_max) {
            margin: 0 80px 35px;
            width: 460px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 41px;
            width: 244px;
        }

        &__button {
            display: block;
            position: absolute;
            left: 100%;
            top: 50%;
            color: #000000;
            transform: translate(44px, -50%);
            text-decoration: none;
            width: 16px;
            height: 32px;

            @media (max-width: $md_max) {
                transform: translate(20px, -50%);
            }

            &:hover svg, &:focus svg {
                transform: scale(1.2);
            }

            svg {
                transition: transform 500ms ease;
            }
        }

        .pen {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            transition: opacity 1s ease;
            overflow: hidden;
            border-radius: 20px;
            height: 240px;

            @media (max-width: $md_max) {
                height: 200px;
            }

            @media (max-width: $sm_max) {
                flex-direction: column;
                height: auto;
            }

            &[data-hidden="on"] {
                opacity: 0;
                height: 0;
            }

            &[data-hidden="off"] {
                opacity: 1;
            }

            &__link {
                flex-shrink: 0;
                width: 240px;

                @media (max-width: $md_max) {
                    height: 200px;
                    width: 200px;
                }

                @media (max-width: $sm_max) {
                    width: auto;
                    max-width: 100%;
                    margin-bottom: 20px;
                }
            }

            &__image {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            &__texts {
                flex-shrink: 1;
                display: block;
                overflow: auto;
                color: #000000;
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                margin: 0 20px;
                padding-right: 20px;
                max-height: 200px;

                @media (max-width: $md_max) {
                    max-height: 190px;
                }

                @media (max-width: $sm_max) {
                    margin: 0 40px 40px;
                    padding-right: 0;
                    max-height: 100%;
                }
            }

            &__title {
                display: block;
                font-size: 18px;
                line-height: 22px;
                margin-bottom: 10px;
            }

            &__text {
                display: block;
                font-size: 14px;
                line-height: 17px;
            }
        }
    }

    .buttons {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        margin: 0 100px 26px;

        @media (max-width: $md_max) {
            margin: 0 80px 40px;
        }

        @media (max-width: $sm_max) {
            margin: 0 20px 436px;
        }

        // todo button
        .button {

            &:not(:last-of-type) {
                margin: 0 20px 0 0;

                @media (max-width: $sm_max) {
                    margin: 0 0 20px 0;
                }
            }

            &_shops {
                color: #ffffff;
                background: linear-gradient(180deg, #ff9c47 0%, #e600c6 100%);
                width: 206px;

                @media (max-width: $sm_max) {
                    width: 140px;
                }
            }

            &_prizes {
                color: #000000;
                background-color: #ffffff;
                border: 2px solid #000000;
                width: 237px;

                @media (max-width: $sm_max) {
                    width: 162px;
                }
            }
        }
    }
}
</style>