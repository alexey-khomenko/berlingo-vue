<template>
    <div class="main main_abs prizes__main" :class="`main_${page} prizes__main_${page}`">
        <!-- todo -->
        <div class="content">
            <div class="card card_primary">
                <div class="text title_primary">
                    Главные призы
                    <svg width="160" height="6" viewBox="0 0 160 6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.95534C6.63764 4.20012 13.2876 3.58872 19.9457 3.05186L29.9364 2.29256L39.9358 1.6404C53.276 0.878187 66.6349 0.411779 80.0026 0.191094C86.6865 0.0431935 93.3727 0.03912 100.062 0.000689237C101.735 -0.00629817 103.406 0.0414504 105.078 0.0711468L110.093 0.177118L115.108 0.340156C116.778 0.405954 118.448 0.525908 120.118 0.616745L130.13 1.29627C133.462 1.60896 136.793 1.91582 140.119 2.27742L145.107 2.81196L150.081 3.4938C153.393 3.9771 156.703 4.45458 160 5.01823L159.964 5.36585C146.581 5.07704 133.29 4.37306 119.965 4.10812C106.652 3.79951 93.344 3.06292 80.0108 2.98722C66.6817 2.85854 53.3438 2.97499 40.0112 3.38725C26.6769 3.73895 13.3449 4.37073 0.0333472 5.30413L0 4.95534Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div class="images images_primary">
                    <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-main-bike-lg.png`)"/>
                    <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-main-bike-md.png`)"/>
                    <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-main-bike-sm.png`)"/>

                    <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-main-playstation-lg.png`)"/>
                    <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-main-playstation-md.png`)"/>
                    <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-main-playstation-sm.png`)"/>

                    <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-main-applewatch-lg.png`)"/>
                    <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-main-applewatch-md.png`)"/>
                    <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-main-applewatch-sm.png`)"/>
                </div>
            </div>
            <div class="card card_week">
                <div class="text title_secondary">
                    Еженедельные призы
                </div>
                <div class="text subtitle_secondary">
                    3 победителя каждую неделю
                </div>
                <div class="images images_week">
                    <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-main-okko-lg.png`)"/>
                    <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-main-okko-md.png`)"/>
                    <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-main-okko-sm.png`)"/>

                    <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-main-yandex-lg.png`)"/>
                    <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-main-yandex-md.png`)"/>
                    <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-main-yandex-sm.png`)"/>

                    <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-main-litres-lg.png`)"/>
                    <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-main-litres-md.png`)"/>
                    <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-main-litres-sm.png`)"/>
                </div>
            </div>
            <div class="card card_day">
                <div class="text title_secondary">
                    Ежедневные призы
                </div>
                <div class="text subtitle_secondary">
                    Бокс с канцелярией Berlingo
                </div>
                <div class="images images_day">
                    <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-main-box-lg.png`)"/>
                    <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-main-box-md.png`)"/>
                    <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-main-box-sm.png`)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PagePrizesMain',
    props: {
        page: {
            type: String,
            required: true,
            validator: function (value) {
                return ['account', 'index'].includes(value);
            },
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.prizes__main {
    transform: translate(-50%, -50%);
    left: 50%;

    .content {
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        height: 926px;

        @media (max-width: $md_max) {
            height: 839px;
        }

        @media (max-width: $sm_max) {
            height: 1865px;
        }
    }

    .card {
        display: block;
        position: relative;
        background: rgba(0, 0, 0, 0.6);
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 40px;

        @media (max-width: $sm_max) {
            border-radius: 20px;
        }

        &_primary {
            flex-basis: 100%;
            min-height: 488px;
            margin: 0 0 40px 0;

            @media (max-width: $md_max) {
                min-height: 443px;
                margin: 0 0 20px 0;
            }

            @media (max-width: $sm_max) {
                min-height: 828px;
            }
        }

        &_week {
            flex-basis: 760px;
            min-height: 398px;
            margin: 0 40px 0 0;

            @media (max-width: $md_max) {
                flex-basis: 620px;
                min-height: 376px;
                margin: 0 20px 0 0;
            }

            @media (max-width: $sm_max) {
                flex-basis: 100%;
                min-height: 661px;
                margin: 0 0 20px 0;
            }
        }

        &_day {
            flex-basis: 360px;
            min-height: 398px;

            @media (max-width: $md_max) {
                flex-basis: 300px;
                min-height: 376px;
            }

            @media (max-width: $sm_max) {
                flex-basis: 100%;
                min-height: 336px;
            }
        }
    }

    .text {
        display: block;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        color: #ffffff;

        &.title {
            &_primary {
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                line-height: 1.125;
                font-size: 48px;
                top: 87px;

                @media (max-width: $md_max) {
                    font-size: 36px;
                    top: 80px;
                }

                @media (max-width: $sm_max) {
                    font-size: 24px;
                    top: 53px;
                }

                svg {
                    position: absolute;
                    top: 100%;
                    right: 50%;
                    transform: translateX(19px);
                    width: 160px;
                    height: auto;

                    @media (max-width: $md_max) {
                        transform: translateX(11px);
                        width: 114px;
                    }

                    @media (max-width: $sm_max) {
                        transform: translateX(5px);
                        width: 73px;
                    }
                }
            }

            &_secondary {
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                line-height: 1.125;
                font-size: 30px;
                top: 77px;

                @media (max-width: $md_max) {
                    font-size: 28px;
                    top: 76px;
                }

                @media (max-width: $sm_max) {
                    font-size: 24px;
                    top: 56px;
                }
            }
        }

        &.subtitle {
            &_secondary {
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                line-height: 1.125;
                font-size: 18px;
                top: 126px;

                @media (max-width: $md_max) {
                    top: 124px;
                }

                @media (max-width: $sm_max) {
                    top: 104px;
                }
            }
        }
    }

    .images {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        bottom: 59px;

        @media (max-width: $sm_max) {
            bottom: 39px;
        }

        img {
            width: auto;
        }

        &_primary {
            width: 1040px;

            @media (max-width: $md_max) {
                width: 860px;
            }

            @media (max-width: $sm_max) {
                width: 180px;
                margin-left: -20px;
            }

            img {
                height: 270px;

                @media (max-width: $md_max) {
                    height: 240px;
                }

                @media (max-width: $sm_max) {
                    height: 200px;

                    &:not(:last-of-type) {
                        margin-bottom: 40px;
                    }
                }
            }
        }

        &_week {
            width: 640px;

            @media (max-width: $md_max) {
                width: 540px;
            }

            @media (max-width: $sm_max) {
                width: 140px;
            }

            img {
                height: 140px;

                @media (max-width: $sm_max) {
                    &:not(:last-of-type) {
                        margin-bottom: 25px;
                    }
                }
            }
        }

        &_day {
            width: 140px;

            img {
                height: 140px;
            }
        }
    }

    &_account{
        top: 540px;

        @media (max-width: $md_max) {
            top: 480px;
        }

        @media (max-width: $sm_max) {
            top: 972px;
        }
    }

    &_index {
        top: 563px;

        @media (max-width: $md_max) {
            top: 500px;
        }

        @media (max-width: $sm_max) {
            top: 993px;
        }
    }
}
</style>