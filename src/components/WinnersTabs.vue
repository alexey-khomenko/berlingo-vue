<template>
    <section class="section winners-tabs">
        <div class="main main_rel main_winners winners-tabs__main" v-for="(group, idx) in groups" :key="idx">
            <PageTabs>
            <div class="title">
                {{ group.title }}
            </div>
            <div class="subtitle" v-if="group.subtitle">
                {{ group.subtitle }}
            </div>
            <div class="tabs">
                <div class="tabs__head" v-if="group.tabs.head.length">
                    <div :class="`btn btn_${tab.type}`" :data-tab-open="tab.number"
                         :data-selected="group.selected === tab.number ? 'on' : 'off'"
                         v-for="tab in group.tabs.head" :key="tab.number"
                    >
                        <PageButton type="button" :bordered="group.selected !== tab.number"
                                    :color="group.selected === tab.number ? tab.color : 'black'">
                            <span>{{ tab.title }}</span>
                        </PageButton>
                    </div>
                </div>
                <div class="tabs__body"
                     :data-tab-body="tab.number" :data-hidden="group.selected === tab.number ? 'off' : 'on'"
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
            </PageTabs>
        </div>
    </section>
</template>

<script>
import PageTabs from '/src/components/PageTabs';
import PageButton from '/src/components/PageButton';

export default {
    name: 'WinnersTabs',
    components: {
        PageTabs,
        PageButton,
    },
    data() {
        return {
            groups: [
                {
                    title: 'Главные призы',
                    subtitle: null,
                    selected: 0,
                    tabs: {
                        head: [
                            {
                                type: 'bike',
                                color: 'green',
                                title: 'Велосипед',
                                number: 0,
                            },
                            {
                                type: 'playstation',
                                color: 'blue',
                                title: 'PlayStation 5',
                                number: 1,
                            },
                            {
                                type: 'applewatch',
                                color: 'red',
                                title: 'Apple Watch',
                                number: 2,
                            },
                        ],
                        body: [
                            {
                                image: 'bike',
                                winners: [],
                                number: 0,
                            },
                            {
                                image: 'playstation',
                                winners: [],
                                number: 1,
                            },
                            {
                                image: 'applewatch',
                                winners: [],
                                number: 2,
                            },
                        ],
                    },
                },
                {
                    title: 'Еженедельные призы',
                    subtitle: null,
                    selected: 3,
                    tabs: {
                        head: [
                            {
                                type: 'okko',
                                color: 'red',
                                title: 'Подписка Okko',
                                number: 3,
                            },
                            {
                                type: 'yandex',
                                color: 'green',
                                title: 'Подписка Яндекс.Музыка',
                                number: 4,
                            },
                            {
                                type: 'litres',
                                color: 'blue',
                                title: 'Подписка Литрес',
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
                                number: 5,
                            },
                        ],
                    },
                },
                {
                    title: 'Ежедневные призы',
                    subtitle: 'Бокс с канцелярией Berlingo',
                    selected: 6,
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
    .tabs {
        &__head {
            .btn {
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