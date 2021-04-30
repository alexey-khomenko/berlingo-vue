<template>
    <div class="main main_rel main_account account-my__main">

        <div class="titles">
            <div class="title">
                Мои призы
            </div>
            <PageButton type="link" to="/winners" color="red" border>
                Победители акции
            </PageButton>
        </div>

        <ul class="prizes">
            <li class="prize" v-for="(prize, idx) in prizes" :key="idx">
                <div class="prize__image">
                    <img alt="" :src="prize.image" />
                </div>
                <div class="prize__texts">
                    <div class="prize__title">
                        {{ prize.title }}
                    </div>
                    <div class="prize__text">
                        {{ prize.text }}
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
    data() {
        return {
            prizes: [
                {
                    image: require('../assets/images/account-my-applewatch.png'),
                    title: 'Apple Watch',
                    text: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
                        'получении приза.',
                },
                {
                    image: require('../assets/images/account-my-bike.png'),
                    title: 'Велосипед',
                    text: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
                        'получении приза.',
                },
                {
                    image: require('../assets/images/account-my-box.png'),
                    title: 'Бокс с канцелярией Berlingo',
                    text: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
                        'получении приза.',
                },
                {
                    image: require('../assets/images/account-my-litres.png'),
                    title: 'Подписка на ЛитРес',
                    text: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
                        'получении приза.',
                },
                {
                    image: require('../assets/images/account-my-okko.png'),
                    title: 'Подписка на Okko',
                    text: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
                        'получении приза.',
                },
                {
                    image: require('../assets/images/account-my-playstation.png'),
                    title: 'PlayStation 5',
                    text: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
                        'получении приза.',
                },
                {
                    image: require('../assets/images/account-my-yandex.png'),
                    title: 'Подписка на Яндекс.Музыку',
                    text: 'В течение 5 (пяти) рабочих дней на указанную вами почту придет письмо с информацией о ' +
                        'получении приза.',
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

        .title {
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