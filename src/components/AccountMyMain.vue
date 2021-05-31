<template>
    <div class="main main_rel main_account account-my__main">
        <div class="titles">
            <div class="titles__title">
                Мои призы
            </div>
            <page-button type="link" to="/winners" color="red" class="titles__btn">
                <span>Победители акции</span>
            </page-button>
        </div>
        <ul class="prizes" v-if="prizes.length">
            <li class="prize" v-for="(prize, idx) in prizes" :key="idx">
                <div class="prize__image">
                    <img alt="" :src="prize.image"/>
                </div>
                <div class="prize__texts">
                    <div class="prize__title">
                        {{ prize.title }}
                    </div>
                    <div class="prize__text">
                        {{ $options.PRIZE_TEXT }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import PageButton from '/src/components/PageButton';

export default {
    name: 'AccountMyMain',
    components: {
        PageButton,
    },
    PRIZE_TEXT: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
        'получении приза.',
    data() {
        return {
            prizes: [
                {
                    image: require('../assets/images/account-my-applewatch.png'),
                    title: 'Apple Watch',
                },
                {
                    image: require('../assets/images/account-my-bike.png'),
                    title: 'Велосипед',
                },
                {
                    image: require('../assets/images/account-my-box.png'),
                    title: 'Бокс с канцелярией Berlingo',
                },
                {
                    image: require('../assets/images/account-my-litres.png'),
                    title: 'Подписка на ЛитРес',
                },
                {
                    image: require('../assets/images/account-my-okko.png'),
                    title: 'Подписка на Okko',
                },
                {
                    image: require('../assets/images/account-my-playstation.png'),
                    title: 'PlayStation 5',
                },
                {
                    image: require('../assets/images/account-my-yandex.png'),
                    title: 'Подписка на Яндекс.Музыку',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-my__main {
    margin: 0 auto;
    padding-bottom: 60px;

    @media (max-width: $md_max) {
        padding-bottom: 40px;
    }

    @media (max-width: $sm_max) {
        padding-bottom: 20px;
    }

    .titles {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;

        &__title {
            color: #ffffff;
            font-family: "PF Din Text Cond Pro", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 48px;
            line-height: 58px;

            @media (max-width: $md_max) {
                font-size: 36px;
                line-height: 43px;
            }

            @media (max-width: $sm_max) {
                font-size: 24px;
                line-height: 29px;
                margin-bottom: 30px;
                flex-basis: 100%;
            }
        }

        &__btn {
            width: 252px;

            @media (max-width: $sm_max) {
                width: 172px;
            }
        }
    }

    .prizes {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: stretch;
        padding: 0;
        margin: -20px;

        @media (max-width: $md_max) {
            margin: -10px;
        }

        * {
            box-sizing: border-box;
        }

        .prize {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;
            border: 1px solid #ffffff;
            border-radius: 40px;
            margin: 20px;
            width: 560px;
            min-height: 280px;

            @media (max-width: $md_max) {
                margin: 10px;
                width: 460px;
                min-height: 290px;
            }

            @media (max-width: $sm_max) {
                border-radius: 20px;
            }

            &__image {
                height: 160px;
                width: 160px;
                margin: 59px 80px 59px 59px;

                @media (max-width: $md_max) {
                    height: 135px;
                    width: 135px;
                    margin: 79px 45px 79px 59px;
                }

                @media (max-width: $sm_max) {
                    height: 160px;
                    width: 160px;
                    margin: 39px auto 30px;
                }

                img {
                    height: 100%;
                    width: auto;
                }
            }

            &__texts {
                color: #ffffff;
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                width: 220px;

                @media (max-width: $md_max) {
                    width: 180px;
                }

                @media (max-width: $sm_max) {
                    width: 200px;
                    margin: 0 auto 39px;
                }
            }

            &__title {
                font-size: 24px;
                line-height: 29px;
                margin-bottom: 20px;
            }

            &__text {
                font-size: 16px;
                line-height: 19px;
            }
        }
    }
}
</style>