<template>
    <div class="main main_abs footer__main" :class="`main_${page} footer__main_${page}`">
        <div class="content">
            
            <div class="content__left">
                <p>
                    Общий срок проведения акции: с 26.04.2021 г. по 10.06.2021 г. включительно.
                </p>
                <p>
                    Срок регистрации кассовых чеков: с 26.04.2021 г. по 06.06.2021 г. включительно.
                </p>
                <p>
                    Акция проводится на территории Российской Федерации.
                </p>
                <p>
                    Количество призов ограничено.
                </p>
            </div>

            <div class="content__right">
                <a href="#" download="download">
                    Правила акции
                </a>
                <a href="#" download="download">
                    Политика обработки персональных данных
                </a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooterMain',
    props: {
        page: String,
    },
    data() {
        return {

        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.footer__main {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 99px;

    .content {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        &__left {
            p {
                display: block;
                margin: 0;
                padding: 0;
                color: #ffffff;
            }
        }

        &__right {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;

            a {
                transition: transform 500ms ease;
                color: #ffffff;
                text-decoration: underline;
                letter-spacing: 0.01em;

                &:hover, &:focus {
                    transform: scale(1.05, 1.15);
                }

                &:not(:last-of-type) {
                    margin: 0 40px 0 0;
                }
            }
        }
    }

    &_account, &_index, &_winners {
        @media (max-width: $md_max) {
            top: 74px;
        }

        @media (max-width: $sm_max) {
            top: 137px;
        }

        .content {
            @media (max-width: $md_max) {
                font-size: 14px;
                line-height: 17px;
            }

            &__left {
                @media (max-width: $sm_max) {
                    margin-bottom: 20px;
                }
            }

            &__right {
                a:not(:last-of-type) {
                    @media (max-width: $md_max) {
                        margin: 0 51px 0 0;
                    }

                    @media (max-width: $sm_max) {
                        margin: 0 0 20px 0;
                    }
                }
            }
        }
    }

    &_pens {
        @media (max-width: $md_max_pens) {
            top: 74px;
        }

        @media (max-width: $sm_max_pens) {
            top: 137px;
        }

        .content {
            @media (max-width: $md_max_pens) {
                font-size: 14px;
                line-height: 17px;
            }

            &__left {
                @media (max-width: $sm_max_pens) {
                    margin-bottom: 20px;
                }
            }

            &__right {
                a:not(:last-of-type) {
                    @media (max-width: $md_max_pens) {
                        margin: 0 51px 0 0;
                    }

                    @media (max-width: $sm_max_pens) {
                        margin: 0 0 20px 0;
                    }
                }
            }
        }
    }
}
</style>