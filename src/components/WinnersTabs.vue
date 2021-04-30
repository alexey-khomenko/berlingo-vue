<template>
    <section class="section winners-tabs">
        <div class="main main_rel main_winners winners-tabs__main" v-for="(group, idx) in groups" :key="idx">
            <div class="title">
                {{ group.title }}
            </div>
            <div class="subtitle" v-if="group.subtitle">
                {{ group.subtitle }}
            </div>
            <div class="tabs">
                <div class="tabs__head" v-if="group.tabs.head.length">
                    <div :class="`btn btn_${tab.type}`"
                         :data-tab-open="tab.number" :data-selected="tab.selected"
                         v-for="tab in group.tabs.head" :key="tab.number"
                    >
                        <PageButton type="button" :bordered="tab.selected === 'off'"
                                    :color="tab.selected === 'off' ? 'black' : tab.color"
                        >
                            <span>{{ tab.title }}</span>
                        </PageButton>
                    </div>
                </div>
                <div class="tabs__body"
                     :data-tab-body="tab.number" :data-hidden="tab.hidden"
                     v-for="tab in group.tabs.body" :key="tab.number"
                >
                    <div class="tabs__image">
                        <img alt="" :src="require(`../assets/images/account-my-${tab.image}.png`)"/>
                    </div>
                    <div class="list-wrapper" v-if="tab.winners.length">
                        <ul class="tabs__list">
                            <li class="winner" v-for="(winner, i) in tab.winners" :key="`${tab.number}-${i}`">
                                <span class="winner__date">
                                    {{ winner.date }}
                                </span>
                                <span class="winner__nick">
                                    {{ winner.nick }}
                                </span>
                                <span class="winner__phone">
                                    {{ winner.phone }}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs__warning" v-else>
                        Победители ещё не определны. Розыгрыш состоится 16.05.2021
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PageButton from '/src/components/PageButton';

export default {
    name: 'WinnersTabs',
    components: {
        PageButton,
    },
    data() {
        return {
            groups: [
                {
                    title: 'Главные призы',
                    subtitle: null,
                    tabs: {
                        head: [
                            {
                                type: 'bike',
                                color: 'green',
                                title: 'Велосипед',
                                selected: 'on',
                                number: 0,
                            },
                            {
                                type: 'playstation',
                                color: 'blue',
                                title: 'PlayStation 5',
                                selected: 'off',
                                number: 1,
                            },
                            {
                                type: 'applewatch',
                                color: 'red',
                                title: 'Apple Watch',
                                selected: 'off',
                                number: 2,
                            },
                        ],
                        body: [
                            {
                                image: 'bike',
                                winners: [],
                                hidden: 'off',
                                number: 0,
                            },
                            {
                                image: 'playstation',
                                winners: [],
                                hidden: 'on',
                                number: 1,
                            },
                            {
                                image: 'applewatch',
                                winners: [],
                                hidden: 'on',
                                number: 2,
                            },
                        ],
                    },
                },
                {
                    title: 'Еженедельные призы',
                    subtitle: null,
                    tabs: {
                        head: [
                            {
                                type: 'okko',
                                color: 'red',
                                title: 'Подписка Okko',
                                selected: 'on',
                                number: 3,
                            },
                            {
                                type: 'yandex',
                                color: 'green',
                                title: 'Подписка Яндекс.Музыка',
                                selected: 'off',
                                number: 4,
                            },
                            {
                                type: 'litres',
                                color: 'blue',
                                title: 'Подписка Литрес',
                                selected: 'off',
                                number: 5,
                            },
                        ],
                        body: [
                            {
                                image: 'okko',
                                winners: [
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                ],
                                hidden: 'off',
                                number: 3,
                            },
                            {
                                image: 'yandex',
                                winners: [
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                ],
                                hidden: 'on',
                                number: 4,
                            },
                            {
                                image: 'litres',
                                winners: [
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                ],
                                hidden: 'on',
                                number: 5,
                            },
                        ],
                    },
                },
                {
                    title: 'Ежедневные призы',
                    subtitle: 'Бокс с канцелярией Berlingo',
                    tabs: {
                        head: [],
                        body: [
                            {
                                image: 'box',
                                winners: [
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                    {
                                        date: '29.04.2021',
                                        nick: 'aleksei7676',
                                        phone: '+7 (***) *** 64 56',
                                    },
                                ],
                                hidden: 'off',
                                number: 6,
                            },
                        ],
                    },
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.winners-tabs__main {
    margin: 0 auto 100px;

    @media (max-width: $md_max) {
        margin-bottom: 80px;
    }

    @media (max-width: $sm_max) {
        margin-bottom: 60px;
    }

    .title {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 40px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
        }
    }

    .subtitle {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 80px;

        @media (max-width: $md_max) {
            font-size: 18px;
            line-height: 22px;
            margin-top: -20px;
            margin-bottom: 60px;
        }

        @media (max-width: $sm_max) {
            margin-bottom: 40px;
        }
    }

    .tabs {
        display: block;

        &__head {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 80px;

            @media (max-width: $md_max) {
                margin-bottom: 60px;
            }

            @media (max-width: $sm_max) {
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 40px;
            }

            .btn {
                &:not(:last-of-type) {
                    margin: 0 20px 0 0;

                    @media (max-width: $sm_max) {
                        margin: 0 0 20px 0;
                    }
                }

                &_bike {
                    width: 196px;

                    @media (max-width: $sm_max) {
                        width: 134px;
                    }
                }

                &_playstation {
                    width: 214px;

                    @media (max-width: $sm_max) {
                        width: 146px;
                    }
                }

                &_applewatch {
                    width: 206px;

                    @media (max-width: $sm_max) {
                        width: 140px;
                    }
                }

                &_okko {
                    width: 226px;

                    @media (max-width: $sm_max) {
                        width: 154px;
                    }
                }

                &_yandex {
                    width: 304px;

                    @media (max-width: $sm_max) {
                        width: 209px;
                    }
                }

                &_litres {
                    width: 241px;

                    @media (max-width: $sm_max) {
                        width: 165px;
                    }
                }
            }
        }

        &__body {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            background: rgba(0, 0, 0, 0.6);
            overflow: hidden;
            color: #ffffff;
            font-family: "PF Din Text Cond Pro", sans-serif;
            font-style: normal;
            font-weight: 400;
            border: 1px solid #ffffff;
            border-radius: 40px;
            padding: 59px 99px;
            width: 1160px;
            height: 420px;

            @media (max-width: $md_max) {
                padding: 59px 37px;
                width: 940px;
            }

            @media (max-width: $sm_max) {
                flex-direction: column;
                border-radius: 20px;
                padding: 39px 19px;
                width: 280px;
                height: auto;
            }
        }

        &__image {
            width: 240px;
            height: 240px;

            @media (max-width: $sm_max) {
                width: 160px;
                height: 160px;
                margin-bottom: 40px;
            }

            img {
                height: 100%;
                width: auto;
            }
        }

        .list-wrapper {
            overflow: hidden;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 100px;
                background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                transform: scale(1, -1);
                pointer-events: none;
            }
        }

        &__list {
            display: block;
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: auto;
            margin: 0;
            padding: 0 40px;
            max-height: 300px;
            width: 600px;

            @media (max-width: $md_max) {
                width: 580px;
            }

            @media (max-width: $sm_max) {
                padding: 0 20px;
                max-height: 400px;
                width: 100%;
            }

            .winner {
                margin: 0;
                padding: 11px 0;
                box-sizing: border-box;
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;
                min-height: 50px;
                font-size: 16px;
                line-height: 22px;

                @media (max-width: $sm_max) {
                    flex-wrap: wrap;
                    min-height: 80px;
                }

                &:last-child {
                    margin-bottom: 10px;

                    @media (max-width: $sm_max) {
                        margin-bottom: 20px;
                    }
                }

                &__date {
                    flex-shrink: 0;
                    width: 75px;
                }

                &__nick {
                    flex-shrink: 1;
                    flex-grow: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 0 10px 0 30px;

                    @media (max-width: $sm_max) {
                        margin: 0 0 0 27px;
                        max-width: 98px;
                    }
                }

                &__phone {
                    flex-shrink: 0;
                    margin-left: auto;
                }
            }
        }

        &__warning {
            font-size: 24px;
            line-height: 29px;

            @media (max-width: $sm_max) {
                font-size: 18px;
                line-height: 22px;
                padding: 0 40px;
            }
        }
    }
}
</style>