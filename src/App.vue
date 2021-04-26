<template>
    <PageWrapper>
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/account">Account</router-link>
            |
            <router-link to="/winners">Winners</router-link>
            |
            <router-link to="/pens">Pens</router-link>
        </div>
        <router-view/>
    </PageWrapper>
    <PageShadow>
        <ModalAuth/>

        <section class="modal modal_receipt" data-modal-name="receipt" data-modal-important="off">
            <div class="modal__body-0">
                <div class="modal__body-1">
                    <div class="modal__body-2"><a class="modal__close" href="#" data-modal-close>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.6673 0.335559L23.6639 0.332131C23.221 -0.11071 22.5033 -0.11071 22.0605 0.332131L11.9997 10.3935L1.93836 0.332131C1.49552 -0.11071 0.777829 -0.11071 0.334988 0.332131L0.332131 0.335559C-0.11071 0.7784 -0.11071 1.49609 0.332131 1.93893L10.3935 11.9997L0.332131 22.0611C-0.11071 22.5039 -0.11071 23.2216 0.332131 23.6644L0.335559 23.6679C0.7784 24.1107 1.49609 24.1107 1.93893 23.6679L11.9997 13.6059L22.0611 23.6673C22.5039 24.1101 23.2216 24.1101 23.6644 23.6673L23.6679 23.6639C24.1107 23.221 24.1107 22.5033 23.6679 22.0605L13.6059 11.9997L23.6673 1.93836C24.1101 1.49609 24.1101 0.7784 23.6673 0.335559Z"
                                  fill="currentColor"></path>
                        </svg>
                    </a>
                        <div class="title">Зарегистрируй чек</div>
                        <div class="subtitle">
                            После регистрации чека, он поступит на модерирование. Статус модерации чека ты сможешь
                            отследить
                            в личном кабинете
                        </div>
                        <form class="form">
                            <div class="form__inputs">
                                <label class="form__input">
                                    <input type="text" name="receipt-shop" maxlength="200"
                                           placeholder="Укажи магазин покупки">
                                </label>
                                <label class="button form__file" data-text="только JPG, JPEG, PNG до 20Мб"
                                       data-hidden="off">
                                    <input type="file" name="receipt-file"><span>Загрузи фото Чека</span>
                                </label>
                                <div class="form__file-selected" data-hidden="on"><img alt="" src=""><span></span><a
                                        href="#" data-receipt-shop-reset>
                                    <svg width="16" height="16" viewBox="0 0 16 16"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6673 0.335559L15.6639 0.332131C15.221 -0.11071 14.5033 -0.11071 14.0605 0.332131L7.99971 6.39349L1.93836 0.332131C1.49552 -0.11071 0.777829 -0.11071 0.334988 0.332131L0.332131 0.335559C-0.11071 0.7784 -0.11071 1.49609 0.332131 1.93893L6.39349 7.99971L0.332131 14.0611C-0.11071 14.5039 -0.11071 15.2216 0.332131 15.6644L0.335559 15.6679C0.7784 16.1107 1.49609 16.1107 1.93893 15.6679L7.99971 9.60594L14.0611 15.6673C14.5039 16.1101 15.2216 16.1101 15.6644 15.6673L15.6679 15.6639C16.1107 15.221 16.1107 14.5033 15.6679 14.0605L9.60594 7.99971L15.6673 1.93836C16.1101 1.49609 16.1101 0.7784 15.6673 0.335559Z"
                                              fill="currentColor"></path>
                                    </svg>
                                </a></div>
                            </div>
                            <input type="checkbox" name="receipt-agree" id="receipt-agree" data-hidden="on">
                            <label class="form__checkbox" for="receipt-agree">
                                <div class="form__check">
                                    <svg width="14" height="10" viewBox="0 0 14 10"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7368 1.52152C14.0878 1.17389 14.0878 0.608145 13.7365 0.260618C13.3852 -0.0868728 12.8134 -0.0868728 12.4621 0.260618L4.79273 7.84818L1.53821 4.62843C1.36809 4.46013 1.14184 4.36745 0.901202 4.36745C0.660493 4.36745 0.43417 4.46023 0.263908 4.62864C0.0937165 4.79701 0 5.02089 0 5.25906C0 5.49719 0.0937165 5.72107 0.263873 5.88937L4.15519 9.73936C4.50668 10.0868 5.07846 10.0869 5.42963 9.7394L13.7368 1.52152Z"
                                              fill="currentColor"></path>
                                    </svg>
                                </div>
                                <span>Я согласен с
                      <a href="#" download>политикой обработки персональных данных</a>
                      и
                      <a href="#" download>условиями акции</a>
                                    </span>
                            </label>
                            <button class="button form__button" type="submit"><span>Зарегистрировать чек</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    </PageShadow>
</template>

<script>
import PageWrapper from '/src/components/PageWrapper.vue';
import PageShadow from '/src/components/PageShadow.vue';
import ModalAuth from '/src/components/ModalAuth.vue';

export default {
    name: 'App',
    components: {
        PageWrapper,
        PageShadow,
        ModalAuth,
    },
};
</script>

<style lang="scss">
@import "/src/assets/scss/_variables.scss";

label, input, textarea, button, select, a, summary {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a:focus, button:focus, input:focus {
    outline: none !important;
}

button::-moz-focus-inner {
    outline: none !important;
    border: 0 !important;
}

img {
    display: block;
    border: none;
}

svg {
    display: block;
}

[data-hidden="on"]:not([data-slider]) {
    display: none !important;
}

// todo header__mobile

.header__mobile {
    visibility: hidden;
}

//----------------------------------------------------------------------------------------------------------------------

@font-face {
    font-family: "PF Din Text Cond Pro";
    font-style: normal;
    font-weight: 400;
    src: local(""),
    url("assets/fonts/PF-Din-Text-Cond-Pro.woff2") format("woff2"),
    url("assets/fonts/PF-Din-Text-Cond-Pro.woff") format("woff");
    font-display: swap;
}

@font-face {
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    src: local(""),
    url("assets/fonts/Bebas-Neue-Bold.woff2") format("woff2"),
    url("assets/fonts/Bebas-Neue-Bold.woff") format("woff");
    font-display: swap;
}

@font-face {
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 400;
    src: local(""),
    url("assets/fonts/Bebas-Neue-Regular.woff2") format("woff2"),
    url("assets/fonts/Bebas-Neue-Regular.woff") format("woff");
    font-display: swap;
}

//----------------------------------------------------------------------------------------------------------------------

.image {
    &_lg, &_md, &_sm {
        display: none;
    }

    &_lg {
        @media (min-width: $lg_min) {
            display: block;
        }
    }

    &_md {
        @media (min-width: $md_min) and (max-width: $md_max) {
            display: block;
        }
    }

    &_sm {
        @media (max-width: $sm_max) {
            display: block;
        }
    }
}

.image-pens {
    &_lg, &_md, &_sm {
        display: none;
    }

    &_lg {
        @media (min-width: $lg_min_pens) {
            display: block;
        }
    }

    &_md {
        @media (min-width: $md_min_pens) and (max-width: $md_max_pens) {
            display: block;
        }
    }

    &_sm {
        @media (max-width: $sm_max_pens) {
            display: block;
        }
    }
}
</style>
