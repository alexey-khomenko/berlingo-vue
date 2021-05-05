<template>
    <div class="main main_rel bottom__main" :class="`main_${page} bottom__main_${page}`">

        <div class="element element_text">
            Подписывайся и следи за результатами конкурса в наших социальных сетях!
        </div>

        <div class="element element_title">
            <slot name="title"></slot>
        </div>

        <slot></slot>

        <div class="element element_socials">
            <div class="link link_vk">
                <page-button type="a" :to="vk" color="white">
                    <svg width="22" height="12" viewBox="0 0 22 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.2757 5.8845C18.2757 5.8845 21.175 2.076 21.4626 0.8235C21.5584 0.3765 21.3479 0.126 20.8481 0.126C20.8481 0.126 19.1777 0.126 18.3339 0.126C17.7571 0.126 17.5466 0.3585 17.3737 0.699C17.3737 0.699 16.0144 3.3975 14.3597 5.0985C13.8286 5.646 13.5583 5.8125 13.266 5.8125C13.0303 5.8125 12.9203 5.6295 12.9203 5.133V0.7875C12.9203 0.1785 12.8433 0 12.3059 0H8.27357C7.96714 0 7.77543 0.1665 7.77543 0.393C7.77543 0.966 8.71671 1.095 8.71671 2.646V5.847C8.71671 6.4905 8.679 6.741 8.35214 6.741C7.48786 6.741 5.434 3.969 4.28214 0.822C4.05114 0.1785 3.80129 0 3.14757 0H0.633286C0.268714 0 0 0.2325 0 0.5715C0 1.1985 0.787285 4.095 3.87829 7.9755C5.951 10.587 8.67743 12 11.1351 12C12.6311 12 12.9957 11.7675 12.9957 11.178V9.174C12.9957 8.673 13.2063 8.4585 13.5143 8.4585C13.86 8.4585 14.4697 8.562 15.895 9.8715C17.5843 11.3745 17.7006 12 18.6214 12H21.4437C21.7313 12 22 11.8755 22 11.427C22 10.8375 21.175 9.7815 19.9069 8.5305C19.3883 7.887 18.5444 7.1895 18.2757 6.867C17.8923 6.492 18.007 6.2775 18.2757 5.8845Z"
                              fill="currentColor"></path>
                    </svg>
                </page-button>
            </div>
            <div class="link link_instagram">
                <page-button type="a" :to="instagram" color="white">
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.56833 0H17.4333C18.845 0 20 1.155 20 2.56667V17.4333C20 18.845 18.845 20 17.4333 20H2.56833C1.155 20 0 18.845 0 17.4333V2.56667C0 1.155 1.155 0 2.56833 0ZM14.57 2.22167C14.075 2.22167 13.67 2.62833 13.67 3.12333V5.27833C13.67 5.775 14.075 6.18 14.57 6.18H16.83C17.325 6.18 17.73 5.775 17.73 5.27833V3.12333C17.73 2.62833 17.325 2.22167 16.83 2.22167H14.57ZM17.7383 8.45833H15.98C16.1467 9.00333 16.2367 9.57833 16.2367 10.175C16.2367 13.5017 13.4517 16.1983 10.0183 16.1983C6.58667 16.1983 3.80167 13.5017 3.80167 10.175C3.80167 9.57667 3.89333 9.00333 4.06 8.45833H2.22333V16.9083C2.22333 17.345 2.58 17.7017 3.01833 17.7017H16.945C17.3833 17.7017 17.7383 17.345 17.7383 16.9083V8.45833ZM10.0183 6.065C7.80167 6.065 6.00167 7.80667 6.00167 9.95833C6.00167 12.1067 7.8 13.85 10.0183 13.85C12.2367 13.85 14.035 12.1067 14.035 9.95833C14.0367 7.80667 12.2367 6.065 10.0183 6.065Z"
                              fill="currentColor"></path>
                    </svg>
                </page-button>
            </div>
        </div>

    </div>
</template>

<script>
import PageButton from '/src/components/PageButton';

export default {
    name: 'AccountBottomMain',
    components: {
        PageButton,
    },
    props: {
        page: {
            type: String,
            required: true,
            validator: function (value) {
                return ['account', 'index'].includes(value);
            },
        },
    },
    data() {
        return {
            vk: '#',
            instagram: '#',
        };
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.bottom__main {
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .element {
        position: absolute;
        transform: translateY(-50%);
        width: 370px;

        @media (max-width: $md_max) {
            width: 300px;
        }

        @media (max-width: $sm_max) {
            width: 280px;
        }

        &_text {
            right: 0;
            display: block;
            color: #ffffff;
            font-family: "PF Din Text Cond Pro", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            top: 169px;

            @media (max-width: $md_max) {
                font-size: 18px;
                line-height: 22px;
                top: 102px;
            }

            @media (max-width: $sm_max) {
                font-size: 16px;
                line-height: 19px;
                top: 248px;
            }
        }

        &_title {
            left: 0;
            display: block;
            color: #ffffff;
            font-family: "PF Din Text Cond Pro", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            top: 169px;

            @media (max-width: $md_max) {
                width: 376px;
                font-size: 24px;
                line-height: 29px;
                top: 102px;
            }

            @media (max-width: $sm_max) {
                width: 280px;
                font-size: 18px;
                line-height: 22px;
                top: 70px;
            }
        }

        &_button {
            left: 0;
            top: 278px;

            @media (max-width: $md_max) {
                top: 204px;
            }

            @media (max-width: $sm_max) {
                top: 139px;
            }

            &__md {
                display: block;

                @media (max-width: $sm_max) {
                    display: none;
                }
            }

            &__sm {
                display: none;

                @media (max-width: $sm_max) {
                    display: block;
                }
            }
        }

        &_socials {
            right: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            top: 278px;

            @media (max-width: $md_max) {
                top: 204px;
            }

            @media (max-width: $sm_max) {
                top: 317px;
            }

            .link {
                width: 80px;

                @media (max-width: $sm_max) {
                    width: 60px;
                }

                &:not(:last-of-type) {
                    margin-right: 20px;
                }

                &_vk svg {
                    width: 22px;
                    height: 12px;

                    @media (max-width: $sm_max) {
                        width: 18px;
                        height: 10px;
                    }
                }

                &_instagram svg {
                    width: 20px;
                    height: 20px;

                    @media (max-width: $sm_max) {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
    }

    &_account .element_button {
        width: 368px;

        @media (max-width: $sm_max) {
            width: 126px;
        }
    }

    &_index .element_button {
        width: 185px;

        @media (max-width: $sm_max) {
            width: 126px;
        }
    }
}
</style>