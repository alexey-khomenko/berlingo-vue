<template>
    <div class="header__mobile">
        <div class="content">

            <!--        a(href="index.html", class="content__logo")-->
            <!--            img(alt="", src="images/index-header-main-logo-lg.png", class="image_lg")-->
            <!--            img(alt="", src="images/index-header-main-logo-md.png", class="image_md")-->
            <!--            img(alt="", src="images/index-header-main-logo-sm.png", class="image_sm")-->

            <nav class="content__right">
                <a href="#" class="text" :data-modal-open="auth ? 'receipt' : 'register'">
                    Зарегистрировать чек
                </a>

                <!--            //a(href="account.html", class="link link_user")-->
                <!--            a(href="#", class="link link_user", data-modal-open="login")-->
                <!--                svg(width="17", height="20", viewBox="0 0 17 20", xmlns="http://www.w3.org/2000/svg")-->
                <!--                    path(d="M8.49996 0C6.07366 0 4.1095 1.89182 4.1095 4.22877C4.1095 6.56571 6.07366 8.45754 8.49996 8.45754C10.9263 8.45754 12.8904 6.56571 12.8904 4.22877C12.8904 1.89182 10.9263 0 8.49996 0Z", fill="currentColor")-->
                <!--                    path(d="M16.9999 16.2605C16.9999 12.9443 14.0102 10.2513 10.3284 10.2513H6.6715C2.98979 10.2513 0 12.9443 0 16.2605V17.2802C0 17.2879 0.000945503 17.2953 0.0012236 17.303C0.000889883 17.313 0 17.3229 0 17.333C0 18.8059 3.80557 20 8.5 20C13.1944 20 17 18.806 17 17.333C17 17.3229 16.9992 17.313 16.9988 17.303C16.9991 17.2954 17 17.2879 17 17.2802L16.9999 16.2605Z", fill="currentColor")-->

                <a href="#" class="link link_menu" data-menu-close>
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"
                              d="M7.77829 6.36385L14.1421 0L15.5563 1.41421L9.1925 7.77806L15.7784 14.364L14.3642 15.7782L7.77829 9.19227L1.41421 15.5563L0 14.1421L6.36408 7.77806L0.222063 1.63605L1.63628 0.221832L7.77829 6.36385Z"
                        ></path>
                    </svg>
                </a>
            </nav>
        </div>
        <div class="bottom">
            <nav>
                <a href="#" class="text" download>Правила акции</a>
                <a href="#" class="text" data-anchor="shops">Где купить?</a>
                <a href="#" class="text" data-anchor="prizes">Призы</a>

                <!--<a href="/pens" class="text">О ручках</a>-->
                <!--<a href="/winners" class="text">Победители</a>-->

                <a href="#" class="text text_sm" :data-modal-open="auth ? 'receipt' : 'register'">
                    Зарегистрировать чек
                </a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeaderMobile',
    components: {},
    props: {
        page: String,
    },
    data() {
        return {
            auth: false,
        };
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

    // todo visibility: hidden;
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

        @media (max-width: $sm_max) {
            top: 39px;
        }
    }

    img {
        width: 90px;
        height: auto;
    }

    .content, .bottom {
        width: $container_lg;

        @media (max-width: $md_max) {
            width: $container_md;
        }

        @media (max-width: $sm_max) {
            width: $container_sm;
        }
    }

    .content {
        transform: translate(-50%, -50%);
        position: absolute;
        left: 50%;
        top: 30px;

        @media (max-width: $sm_max) {
            top: 20px;
        }
    }

    .bottom {
        height: 480px;
        margin-top: 60px;

        @media (max-width: $sm_max) {
            height: 440px;
            margin-top: 40px;
        }

        nav {
            padding-top: 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;

            @media (max-width: $sm_max) {
                padding-top: 10px;
            }

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

                @media (max-width: $sm_max) {
                    font-size: 24px;
                    line-height: 24px;
                    margin-top: 30px;
                }

                &:hover, &:focus {
                    transform: scale(1.05, 1.15);
                }

                &_sm {
                    display: none;

                    @media (max-width: $sm_max) {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>