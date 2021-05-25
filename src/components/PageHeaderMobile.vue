<template>
    <div class="header__mobile" :class="`header__mobile_${page}`" ref="root">
        <div class="content">

            <router-link to="/" class="content__logo">
                <img alt="" class="image_lg" :class="page"
                     :src="require(`../assets/images/${page}-header-main-logo-lg.png`)"/>
                <img alt="" class="image_md" :class="page"
                     :src="require(`../assets/images/${page}-header-main-logo-md.png`)"/>
                <img alt="" class="image_sm" :class="page"
                     :src="require(`../assets/images/${page}-header-main-logo-sm.png`)"/>
            </router-link>

            <nav class="content__right">
                <button type="button" class="text"
                        @click="blurElem($event); openModal(auth ? 'receipt' : 'register');">
                    Зарегистрировать чек
                </button>

                <router-link to="/account" class="link link_user" @click="blurElem($event)" v-show="auth">
                    <svg width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49996 0C6.07366 0 4.1095 1.89182 4.1095 4.22877C4.1095 6.56571 6.07366 8.45754 8.49996 8.45754C10.9263 8.45754 12.8904 6.56571 12.8904 4.22877C12.8904 1.89182 10.9263 0 8.49996 0Z"
                              fill="currentColor"></path>
                        <path d="M16.9999 16.2605C16.9999 12.9443 14.0102 10.2513 10.3284 10.2513H6.6715C2.98979 10.2513 0 12.9443 0 16.2605V17.2802C0 17.2879 0.000945503 17.2953 0.0012236 17.303C0.000889883 17.313 0 17.3229 0 17.333C0 18.8059 3.80557 20 8.5 20C13.1944 20 17 18.806 17 17.333C17 17.3229 16.9992 17.313 16.9988 17.303C16.9991 17.2954 17 17.2879 17 17.2802L16.9999 16.2605Z"
                              fill="currentColor"></path>
                    </svg>
                </router-link>

                <button type="button" class="link link_user" v-show="!auth"
                        @click="blurElem($event); openModal('login');">
                    <svg width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49996 0C6.07366 0 4.1095 1.89182 4.1095 4.22877C4.1095 6.56571 6.07366 8.45754 8.49996 8.45754C10.9263 8.45754 12.8904 6.56571 12.8904 4.22877C12.8904 1.89182 10.9263 0 8.49996 0Z"
                              fill="currentColor"></path>
                        <path d="M16.9999 16.2605C16.9999 12.9443 14.0102 10.2513 10.3284 10.2513H6.6715C2.98979 10.2513 0 12.9443 0 16.2605V17.2802C0 17.2879 0.000945503 17.2953 0.0012236 17.303C0.000889883 17.313 0 17.3229 0 17.333C0 18.8059 3.80557 20 8.5 20C13.1944 20 17 18.806 17 17.333C17 17.3229 16.9992 17.313 16.9988 17.303C16.9991 17.2954 17 17.2879 17 17.2802L16.9999 16.2605Z"
                              fill="currentColor"></path>
                    </svg>
                </button>

                <button type="button" class="link link_menu" @click="closeMenu($event)">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"
                              d="M7.77829 6.36385L14.1421 0L15.5563 1.41421L9.1925 7.77806L15.7784 14.364L14.3642 15.7782L7.77829 9.19227L1.41421 15.5563L0 14.1421L6.36408 7.77806L0.222063 1.63605L1.63628 0.221832L7.77829 6.36385Z"
                        ></path>
                    </svg>
                </button>
            </nav>
        </div>
        <div class="bottom">
            <nav>
                <a href="#" class="text" download @click="blurElem($event)">
                    Правила акции
                </a>
                <button type="button" class="text" @click="goToAnchor($event, 'shops')">
                    Где купить?
                </button>
                <button type="button" class="text" @click="goToAnchor($event, 'prizes')">
                    Призы
                </button>
                <router-link to="/pens" class="text" @click="blurElem($event)">
                    О ручках
                </router-link>
                <router-link to="/winners" class="text" @click="blurElem($event)">
                    Победители
                </router-link>
                <button type="button" class="text text_sm"
                        @click="blurElem($event); openModal(auth ? 'receipt' : 'register');">
                    Зарегистрировать чек
                </button>
            </nav>
        </div>
    </div>
</template>

<script>
import {inject} from 'vue';
import {mapGetters} from 'vuex';
import {blurElemMixin} from '/src/mixins/blurElem';

export default {
    name: 'PageHeaderMobile',
    props: {
        page: {
            type: String,
            required: true,
            validator: function (value) {
                return ['account', 'index', 'winners', 'pens'].includes(value);
            },
        },
    },
    emits: {
        'menu-close': null,
    },
    mixins: [blurElemMixin],
    setup() {
        const openModal = inject('openModal');

        return {openModal};
    },
    computed: {
        ...mapGetters({
            auth: 'getAuth',
        }),
    },
    methods: {
        closeMenu(e) {
            this.blurElem(e);
            this.$emit('menu-close');
        },
        goToAnchor(e, to) {
            this.closeMenu(e);

            setTimeout(() => {
                this.$router.push({name: 'Index', hash: '#' + to});
            }, 760);
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.root.style.visibility = 'visible';
        });
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.header__mobile {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    z-index: 12;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    background: linear-gradient(180deg, #00a2f6 0%, #c153ff 100%);
    transition: transform 700ms ease;
    visibility: hidden;

    .header:not(.open) & {
        transform: translateY(-100%);
    }

    .header.open & {
        transform: translateY(0);
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        z-index: 11;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #ffffff;
        top: 59px;
    }

    img {
        width: 90px;
        height: auto;
    }

    .content, .bottom {
        width: $container_lg;
    }

    .content {
        transform: translate(-50%, -50%);
        position: absolute;
        left: 50%;
        top: 30px;
    }

    .bottom {
        height: 480px;
        margin-top: 60px;

        nav {
            padding-top: 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;

            .text {
                transition: transform 500ms ease;
                text-transform: uppercase;
                font-family: "Bebas Neue", sans-serif;
                font-style: normal;
                font-weight: 700;
                letter-spacing: 0.01em;
                font-size: 30px;
                line-height: 30px;
                margin-top: 40px;

                &:hover, &:focus {
                    transform: scale(1.05, 1.15);
                }

                &_sm {
                    display: none;
                }
            }
        }
    }

    &_account, &_index, &_winners {
        @media (max-width: $md_max) {
            .content, .bottom {
                width: $container_md;
            }
        }

        @media (max-width: $sm_max) {
            &::after {
                top: 39px;
            }

            .content, .bottom {
                width: $container_sm;
            }

            .content {
                top: 20px;
            }

            .bottom {
                height: 400px;
                margin-top: 40px;

                nav {
                    padding-top: 10px;

                    .text {
                        font-size: 24px;
                        line-height: 24px;
                        margin-top: 30px;

                        &_sm {
                            display: block;
                        }
                    }
                }
            }
        }
    }

    &_pens {
        @media (max-width: $md_max_pens) {
            .content, .bottom {
                width: $container_md;
            }
        }

        @media (max-width: $sm_max_pens) {
            &::after {
                top: 39px;
            }

            .content, .bottom {
                width: $container_sm;
            }

            .content {
                top: 20px;
            }

            .bottom {
                height: 400px;
                margin-top: 40px;

                nav {
                    padding-top: 10px;

                    .text {
                        font-size: 24px;
                        line-height: 24px;
                        margin-top: 30px;

                        &_sm {
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>