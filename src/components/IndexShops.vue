<template>
    <section class="section index-shops">
        <!-- todo data-anchor нужен -->
        <div class="main main_rel main_index index-shops__main" data-anchor="#shops">
            <page-tabs>
                <template #title>
                    Где купить?
                </template>

                <template #head>
                    <page-button type="button" :bordered="selected !== 0"
                                 :color="selected === 0 ? 'green' : 'black'"
                                 class="btn btn_retail"
                                 :data-selected="selected === 0 ? 'on' : 'off'"
                                 @click="selected = 0">
                        <span>Розничные магазины</span>
                    </page-button>
                    <page-button type="button" :bordered="selected !== 1"
                                 :color="selected === 1 ? 'blue' : 'black'"
                                 class="btn btn_internet"
                                 :data-selected="selected === 1 ? 'on' : 'off'"
                                 @click="selected = 1">
                        <span>Интернет-магазины</span>
                    </page-button>
                    <page-button type="button" :bordered="selected !== 2"
                                 :color="selected === 2 ? 'red' : 'black'"
                                 class="btn btn_federal"
                                 :data-selected="selected === 2 ? 'on' : 'off'"
                                 @click="selected = 2">
                        <span>Федеральные сети</span>
                    </page-button>
                </template>

                <template #body>
                    <div class="tabs__body" :data-hidden="selected === 0 ? 'off' : 'on'">
                        <form novalidate @submit.prevent="">
                            <input type="text" autocomplete="off" aria-label="Город" placeholder="Введите ваш город"
                                   name="search" v-model="searchCity"
                                   @focusin="focusSearch" @focusout="blurSearch"/>
                            <svg width="26" height="14" viewBox="0 0 26 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.6185 1.00841e-06L0 1.75933L13 14L13.884 13.111L26 1.75933L24.3793 0L13 10.661L1.6185 1.00841e-06Z"
                                      fill="currentColor"></path>
                            </svg>
                        </form>
                        <transition name="fade">
                            <div class="list-wrapper" v-show="showCities">
                                <ul class="cities">
                                    <li v-for="(city, idx) in filteredCities" :key="idx">
                                        <span @click="selectCity(city)">{{ city }}</span>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                        <transition name="fade" @after-leave="showCities = true">
                            <div class="list-wrapper" v-if="retails.length">
                                <ul class="retails">
                                    <li v-for="(retail, idx) in retails" :key="idx">
                                        <div class="retails__lg">
                                            <div class="retails__icon">
                                                <svg width="18" height="20" viewBox="0 0 18 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.962 18.864C13.421 16.828 18 13.038 18 8.468C18 6.207 17.065 4.081 15.366 2.483C13.667 0.881 11.405 0 9 0C6.595 0 4.333 0.881 2.634 2.482C0.935 4.081 0 6.207 0 8.467C0 13.038 4.578 16.827 7.038 18.863L7.094 18.91C7.41 19.171 7.685 19.399 7.906 19.595C8.203 19.856 8.592 20 9 20C9.408 20 9.796 19.856 10.095 19.596C10.312 19.404 10.584 19.179 10.897 18.918L10.962 18.864ZM10.056 17.911C9.708 18.199 9.408 18.449 9.157 18.668C9.113 18.706 9.057 18.726 9 18.726C8.944 18.726 8.887 18.706 8.842 18.668C8.593 18.45 8.293 18.2 7.943 17.911C5.644 16.007 1.364 12.464 1.364 8.468C1.364 4.501 4.789 1.274 8.999 1.274C13.209 1.274 16.634 4.501 16.634 8.467C16.634 12.465 12.355 16.007 10.056 17.911Z"
                                                          fill="currentColor"></path>
                                                    <path d="M8.99998 3.87305C6.56198 3.87305 4.57898 5.81505 4.57898 8.20105C4.57898 10.588 6.56198 12.531 8.99998 12.531C11.437 12.531 13.421 10.589 13.421 8.20205C13.421 5.81505 11.437 3.87305 8.99998 3.87305ZM8.99998 11.04C7.40398 11.04 6.10498 9.76705 6.10498 8.20205C6.10498 6.63705 7.40398 5.36305 8.99998 5.36305C10.596 5.36305 11.894 6.63605 11.894 8.20105C11.894 9.76605 10.596 11.04 8.99998 11.04Z"
                                                          fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="retails__title"><span>{{ retail.title }}</span></div>
                                            <div class="retails__address"><span>{{ retail.address }}</span></div>
                                            <a :href="retail.link" target="_blank" @click="blurElement($event)" class="retails__link">
                                                <span>Посмотреть на карте</span>
                                            </a>
                                        </div>
                                        <div class="retails__sm">
                                            <a :href="retail.link" target="_blank" @click="blurElement($event)">
                                                <svg width="18" height="20" viewBox="0 0 18 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.962 18.864C13.421 16.828 18 13.038 18 8.468C18 6.207 17.065 4.081 15.366 2.483C13.667 0.881 11.405 0 9 0C6.595 0 4.333 0.881 2.634 2.482C0.935 4.081 0 6.207 0 8.467C0 13.038 4.578 16.827 7.038 18.863L7.094 18.91C7.41 19.171 7.685 19.399 7.906 19.595C8.203 19.856 8.592 20 9 20C9.408 20 9.796 19.856 10.095 19.596C10.312 19.404 10.584 19.179 10.897 18.918L10.962 18.864ZM10.056 17.911C9.708 18.199 9.408 18.449 9.157 18.668C9.113 18.706 9.057 18.726 9 18.726C8.944 18.726 8.887 18.706 8.842 18.668C8.593 18.45 8.293 18.2 7.943 17.911C5.644 16.007 1.364 12.464 1.364 8.468C1.364 4.501 4.789 1.274 8.999 1.274C13.209 1.274 16.634 4.501 16.634 8.467C16.634 12.465 12.355 16.007 10.056 17.911Z"
                                                          fill="currentColor"></path>
                                                    <path d="M8.99998 3.87305C6.56198 3.87305 4.57898 5.81505 4.57898 8.20105C4.57898 10.588 6.56198 12.531 8.99998 12.531C11.437 12.531 13.421 10.589 13.421 8.20205C13.421 5.81505 11.437 3.87305 8.99998 3.87305ZM8.99998 11.04C7.40398 11.04 6.10498 9.76705 6.10498 8.20205C6.10498 6.63705 7.40398 5.36305 8.99998 5.36305C10.596 5.36305 11.894 6.63605 11.894 8.20105C11.894 9.76605 10.596 11.04 8.99998 11.04Z"
                                                          fill="currentColor"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                    <div class="tabs__body" :data-hidden="selected === 1 ? 'off' : 'on'">
                        <ul class="grid grid_primary">
                            <li v-for="(primary, idx) in primaries" :key="idx">
                                <a :href="primary.link" target="_blank">
                                    <img alt="" class="image image_large"
                                         :src="require(`../assets/images/${primary.photo}`)"/>
                                </a>
                            </li>
                        </ul>
                        <ul class="grid grid_secondary">
                            <li v-for="(secondary, idx) in secondaries" :key="idx">
                                <a :href="secondary.link" target="_blank">
                                    <img alt="" class="image image_small"
                                         :src="require(`../assets/images/${secondary.photo}`)"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs__body" :data-hidden="selected === 2 ? 'off' : 'on'">
                            <ul class="grid grid_federal">
                                <li v-for="(federal, idx) in federals" :key="idx">
                                    <img alt="" class="image image_small"
                                         :src="require(`../assets/images/${federal}`)"/>
                                </li>
                            </ul>
                        </div>
                </template>
            </page-tabs>
        </div>
    </section>
</template>

<script>
import {inject} from 'vue';
import {loadRetails, loadCities, loadPrimaries, loadSecondaries, loadFederals} from '/src/api/index-shops';

import PageTabs from '/src/components/PageTabs';
import PageButton from '/src/components/PageButton';

export default {
    name: 'IndexShops',
    components: {
        PageTabs,
        PageButton,
    },
    setup(){
        const blurElement = inject('blurElement');

        return {blurElement};
    },
    data() {
        return {
            selected: 0,
            searchCity: '',
            showCities: false,
            cities: [],
            retails: [],
            primaries: [],
            secondaries: [],
            federals: [],
            timerIdBlur: null,
            timerIdSelect: null,
        };
    },
    computed: {
        filteredCities() {
            return this.cities.filter(city => city.toLowerCase().includes(this.searchCity.trim().toLowerCase()));
        },
    },
    methods: {
        blurSearch() {
            this.timerIdBlur = setTimeout(() => {
                if (this.searchCity.trim().length > 0) return;
                this.showCities = false;
            }, 100);
        },
        focusSearch() {
            if (this.retails.length) {
                this.retails = [];
            }
            else {
                this.showCities = true;
            }
        },
        selectCity(city) {
            this.searchCity = city;
            this.showCities = false;

            this.timerIdSelect = setTimeout(async () => {
                this.retails = await loadRetails(city);
            }, 500);
        },
    },
    async created() {
        this.cities = await loadCities();
        this.primaries = await loadPrimaries();
        this.secondaries = await loadSecondaries();
        this.federals = await loadFederals();
    },
    beforeUnmount() {
        clearTimeout(this.timerIdBlur);
        clearTimeout(this.timerIdSelect);
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-shops__main {
    margin: 0 auto;

    .tabs {
        &__head {
            .btn {
                &_retail {
                    width: 274px;

                    @media (max-width: $sm_max) {
                        width: 188px;
                    }
                }

                &_internet {
                    width: 262px;

                    @media (max-width: $sm_max) {
                        width: 180px;
                    }
                }

                &_federal {
                    width: 253px;

                    @media (max-width: $sm_max) {
                        width: 174px;
                    }
                }
            }
        }

        &__body {
            display: block;
        }

        form {
            display: block;
            position: relative;

            input {
                display: block;
                width: 100%;
                border: 1px solid #828282;
                border-radius: 99999px;
                background-color: #000000;
                color: #ffffff;
                font-family: "PF Din Text Cond Pro", sans-serif;
                font-style: normal;
                font-weight: 400;
                box-sizing: border-box;
                padding: 0 39px;
                height: 80px;
                line-height: 78;
                font-size: 20px;

                @media (max-width: $sm_max) {
                    padding: 0 19px;
                    height: 60px;
                    line-height: 58;
                    font-size: 16px;
                }

                &::placeholder {
                    color: #ffffff;
                    opacity: 1;
                }

                &:focus::placeholder {
                    opacity: 0;
                }
            }

            svg {
                color: #ffffff;
                pointer-events: none;
                position: absolute;
                transform: translateY(-50%);
                top: 50%;
                right: 40px;

                @media (max-width: $sm_max) {
                    right: 20px;
                    width: 18px;
                    height: 10px;
                }
            }
        }

        .list-wrapper {
            ul {
                display: block;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0;
                margin: 0;
                max-height: 400px;

                @media (max-width: $sm_max) {
                    margin: 10px 0 0;
                    max-height: 360px;
                }

                li {
                    margin: 0;
                    padding: 0 40px;
                    border-radius: 99999px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    min-height: 50px;

                    @media (max-width: $sm_max) {
                        padding: 0 20px;
                        min-height: 60px;
                    }

                    &:hover {
                        background-color: #4f4f4f;

                        @media (max-width: $sm_max) {
                            background-color: transparent;
                        }
                    }

                    &:first-child {
                        margin-top: 20px;
                    }

                    &:last-child {
                        margin-bottom: 20px;
                    }
                }
            }
        }

        .cities li {

            span {
                cursor: pointer;
                padding-top: 3px;
                color: #ffffff;
                font-family: "PF Din Text Cond Pro", sans-serif;
                transition: transform 500ms ease;
                text-transform: uppercase;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;

                @media (max-width: $sm_max) {
                    font-size: 14px;
                    line-height: 17px;
                }

                &:hover, &:focus {
                    transform: scale(1.05, 1.15);
                }
            }
        }

        .retails li {

            .retails__lg {
                display: flex;
                flex-basis: 100%;
                flex-flow: row wrap;
                justify-content: flex-start;
                align-items: center;

                @media (max-width: $sm_max) {
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    padding-right: 10px;
                }

                .retails__icon {
                    color: #ffffff;
                    display: block;
                    margin-right: 10px;

                    @media (max-width: $sm_max) {
                        display: none;
                    }

                    svg {
                        display: block;
                    }
                }

                .retails__title {
                    flex-basis: 332px;
                    flex-grow: 0;
                    flex-shrink: 0;

                    @media (max-width: $sm_max) {
                        flex-basis: auto;
                        flex-shrink: 1;
                    }

                    span {
                        color: #ffffff;
                        font-family: "PF Din Text Cond Pro", sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;

                        @media (max-width: $sm_max) {
                            font-size: 14px;
                            line-height: 17px;
                        }
                    }
                }

                .retails__address {

                    span {
                        color: #bdbdbd;
                        font-family: "PF Din Text Cond Pro", sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;

                        @media (max-width: $sm_max) {
                            font-size: 14px;
                            line-height: 17px;
                        }
                    }
                }

                .retails__link {
                    display: flex;
                    margin-left: auto;
                    text-decoration: none;

                    @media (max-width: $sm_max) {
                        display: none;
                    }

                    &:hover span, &:focus span {
                        transform: scale(1.05, 1.15);
                    }

                    span {
                        color: #bdbdbd;
                        text-transform: uppercase;
                        transition: transform 500ms ease;
                        font-family: "Bebas Neue", sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 20px;
                    }
                }
            }

            .retails__sm {
                display: none;
                margin: 0 0 0 auto;

                @media (max-width: $sm_max) {
                    display: block;
                }

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 99999px;
                    background-color: rgba(255, 255, 255, 0.2);
                    text-decoration: none;
                    width: 40px;
                    height: 40px;

                    &:hover svg, &:focus svg {
                        transform: scale(1.2);
                    }

                    svg {
                        transition: transform 500ms ease;
                        color: #ffffff;
                    }
                }
            }
        }


        .grid {
            padding: 0;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;

            li {
                padding: 0;

                .image {
                    background-color: #ffffff;
                    object-fit: contain;
                    border-radius: 10px;

                    &_large {
                        width: 360px;
                        height: 220px;

                        @media (max-width: $md_max) {
                            width: 300px;
                            height: 180px;
                        }

                        @media (max-width: $sm_max) {
                            width: 280px;
                            height: 180px;
                        }
                    }

                    &_small {
                        width: 216px;
                        height: 120px;

                        @media (max-width: $md_max) {
                            width: 172px;
                            height: 100px;
                        }

                        @media (max-width: $sm_max) {
                            width: 130px;
                            height: 80px;
                        }
                    }
                }
            }

            &_primary {
                margin: 0 0 40px 0;

                @media (max-width: $md_max) {
                    margin: 0 0 20px 0;
                }

                li {
                    display: block;

                    &:not(:last-of-type) {
                        margin: 0 40px 0 0;

                        @media (max-width: $md_max) {
                            margin: 0 20px 0 0;
                        }

                        @media (max-width: $sm_max) {
                            margin: 0 0 20px 0;
                        }
                    }

                    a {
                        display: block;
                    }
                }
            }

            &_secondary {
                margin: -10px;

                li {
                    display: block;
                    margin: 10px;
                }
            }

            &_federal {
                margin: -10px;

                @media (max-width: $md_max) {
                    margin: -20px -10px 20px;
                }

                @media (max-width: $sm_max) {
                    margin: -10px;
                }

                li {
                    display: block;
                    margin: 10px;

                    @media (max-width: $md_max) {
                        margin: 20px 10px;
                    }

                    @media (max-width: $sm_max) {
                        margin: 10px;
                    }
                }
            }
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

</style>