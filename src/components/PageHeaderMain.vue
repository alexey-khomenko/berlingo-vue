<template>
    <div class="main main_abs header__main" :class="`main_${page}`">
        <div class="content">

            <router-link to="/" class="content__logo">
                <img alt="" class="image_lg" :class="page"
                     :src="require(`../assets/images/${page}-header-main-logo-lg.png`)"/>
                <img alt="" class="image_md" :class="page"
                     :src="require(`../assets/images/${page}-header-main-logo-md.png`)"/>
                <img alt="" class="image_sm" :class="page"
                     :src="require(`../assets/images/${page}-header-main-logo-sm.png`)"/>
            </router-link>

            <nav class="content__left">
                <a href="#" class="text" download @click="elBlur($event)">
                    Правила акции
                </a>
                <button type="button" class="text" @click="goToAnchor($event, 'shops')">
                    Где купить?
                </button>
                <button type="button" class="text" @click="goToAnchor($event, 'prizes')">
                    Призы
                </button>
                <router-link to="/pens" class="text" @click="elBlur($event)">
                    О ручках
                </router-link>
                <router-link to="/winners" class="text" @click="elBlur($event)">
                    Победители
                </router-link>
            </nav>

            <nav class="content__right">
                <button type="button" class="text" @click="elBlur($event)"
                        :data-modal-open="auth ? 'receipt' : 'register'">
                    Зарегистрировать чек
                </button>

                <router-link to="/account" class="link link_user" @click="elBlur($event)" v-show="auth">
                    <svg width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49996 0C6.07366 0 4.1095 1.89182 4.1095 4.22877C4.1095 6.56571 6.07366 8.45754 8.49996 8.45754C10.9263 8.45754 12.8904 6.56571 12.8904 4.22877C12.8904 1.89182 10.9263 0 8.49996 0Z"
                              fill="currentColor"></path>
                        <path d="M16.9999 16.2605C16.9999 12.9443 14.0102 10.2513 10.3284 10.2513H6.6715C2.98979 10.2513 0 12.9443 0 16.2605V17.2802C0 17.2879 0.000945503 17.2953 0.0012236 17.303C0.000889883 17.313 0 17.3229 0 17.333C0 18.8059 3.80557 20 8.5 20C13.1944 20 17 18.806 17 17.333C17 17.3229 16.9992 17.313 16.9988 17.303C16.9991 17.2954 17 17.2879 17 17.2802L16.9999 16.2605Z"
                              fill="currentColor"></path>
                    </svg>
                </router-link>

                <button type="button" class="link link_user" @click="elBlur($event)" v-show="!auth"
                        data-modal-open="login">
                    <svg width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49996 0C6.07366 0 4.1095 1.89182 4.1095 4.22877C4.1095 6.56571 6.07366 8.45754 8.49996 8.45754C10.9263 8.45754 12.8904 6.56571 12.8904 4.22877C12.8904 1.89182 10.9263 0 8.49996 0Z"
                              fill="currentColor"></path>
                        <path d="M16.9999 16.2605C16.9999 12.9443 14.0102 10.2513 10.3284 10.2513H6.6715C2.98979 10.2513 0 12.9443 0 16.2605V17.2802C0 17.2879 0.000945503 17.2953 0.0012236 17.303C0.000889883 17.313 0 17.3229 0 17.333C0 18.8059 3.80557 20 8.5 20C13.1944 20 17 18.806 17 17.333C17 17.3229 16.9992 17.313 16.9988 17.303C16.9991 17.2954 17 17.2879 17 17.2802L16.9999 16.2605Z"
                              fill="currentColor"></path>
                    </svg>
                </button>

                <button type="button" class="link link_menu" @click="openMenu($event)">
                    <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="2" fill="currentColor"></rect>
                        <rect width="16" height="2" fill="currentColor" y="6"></rect>
                        <rect width="16" height="2" fill="currentColor" y="12"></rect>
                    </svg>
                </button>
            </nav>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'PageHeaderMain',
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
        'menu-open': null,
    },
    data() {
        return {
            //
        };
    },
    computed: {
        ...mapGetters({
            auth: 'getAuth',
        }),
    },
    methods: {
        elBlur(e) {
            setTimeout(() => {
                e.target.blur();
            }, 700);
        },
        openMenu(e) {
            this.elBlur(e);
            this.$emit('menu-open');
        },
        goToAnchor(e, to) {
            this.elBlur(e);

            this.$router.push({ name: 'Index', hash: '#' + to })
        }
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.header__main {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 90px;
        height: auto;
    }

    .content {
        position: relative;
    }
}
</style>