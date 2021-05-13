<template>
    <header class="header section" :class="`header_${page}`">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        page: {
            type: String,
            required: true,
            validator: function (value) {
                return ['account', 'index', 'winners', 'pens'].includes(value);
            },
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.header {
    height: 60px;

    &::after {
        content: "";
        display: block;
        position: absolute;
        z-index: 11;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: #ffffff;
    }

    a, span {
        text-decoration: none;
        color: #ffffff;
        cursor: pointer;
    }

    .content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;

        &__logo {
            display: block;
        }

        &__left {
            margin-left: 69px;
        }

        &__right {
            margin-left: auto;
        }

        nav {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;

            & > *:not(:last-child) {
                margin-right: 40px;
            }

            .text {
                padding-top: 4px;
                transition: transform 500ms ease;
                text-transform: uppercase;
                font-family: "Bebas Neue", sans-serif;
                font-style: normal;
                font-weight: 700;
                letter-spacing: 0.01em;
                font-size: 20px;

                &:hover, &:focus {
                    transform: scale(1.05, 1.15);
                }
            }

            .link {
                justify-content: center;
                align-items: center;

                &:hover svg, &:focus svg {
                    transform: scale(1.2);
                }

                svg {
                    transition: transform 500ms ease;
                }

                &_user {
                    display: flex;
                    margin-right: 0 !important;

                    svg {
                        width: 17px;
                        height: 20px;
                    }
                }

                &_menu {
                    border-radius: 99999px;
                    background-color: #ffffff;
                    color: #000000;
                    width: 40px;
                    height: 40px;
                    display: none;

                    svg {
                        width: 16px;
                        height: 14px;
                    }
                }
            }
        }
    }

    &_account, &_index, &_winners {
        @media (max-width: $sm_max) {
            height: 40px;
        }

        @media (max-width: $md_max) {
            .content__left {
                margin-left: 39px;
            }
        }

        .content nav {
            a:not(:last-of-type) {
                @media (max-width: $md_max) {
                    margin-right: 43px;
                }

                @media (max-width: $sm_max) {
                    margin-right: 20px;
                }
            }

            @media (max-width: $sm_max) {
                &.content__left {
                    display: none;
                }

                .text {
                    display: none;
                }

                .link {
                    &_user {
                        margin-right: 20px !important;

                        svg {
                            width: 12px;
                            height: 14px;
                        }
                    }

                    &_menu {
                        display: flex;
                        width: 28px;
                        height: 28px;

                        svg {
                            width: 12px;
                            height: 9px;
                        }
                    }
                }
            }
        }
    }

    &_pens {
        @media (max-width: $sm_max_pens) {
            height: 40px;
        }

        @media (max-width: $md_max_pens) {
            .content__left {
                margin-left: 39px;
            }
        }

        .content nav {
            a:not(:last-of-type) {
                @media (max-width: $md_max_pens) {
                    margin-right: 39px;
                }

                @media (max-width: $sm_max_pens) {
                    margin-right: 20px;
                }
            }

            @media (max-width: $sm_max_pens) {
                &.content__left {
                    display: none;
                }

                .text {
                    display: none;
                }

                .link {
                    &_user {
                        margin-right: 20px !important;

                        svg {
                            width: 12px;
                            height: 14px;
                        }
                    }

                    &_menu {
                        display: flex;
                        width: 28px;
                        height: 28px;

                        svg {
                            width: 12px;
                            height: 9px;
                        }
                    }
                }
            }
        }
    }
}
</style>