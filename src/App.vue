<template>
    <page-wrapper/>
    <page-shadow/>
</template>

<script>
import {provide, ref, readonly, onBeforeUnmount} from 'vue';
import PageWrapper from '/src/components/PageWrapper.vue';
import PageShadow from '/src/components/PageShadow.vue';

export default {
    name: 'App',
    components: {
        PageWrapper,
        PageShadow,
    },
    setup() {
        const focusWrap = ref(false);
        const openedShadow = ref(false);
        const openedWrapper = ref(false);
        const openedModal = ref(null);

        const openModal = (name) => {
            if (!openedModal.value?.length && name?.length) {
                showModal(name);
            }
            else if (openedModal.value?.length && name?.length) {
                toggleModal(name);
            }
            else if (openedModal.value?.length && !name?.length) {
                hideModal(name);
            }
        };

        const showModal = (name) => {
            openedModal.value = name;
            openedShadow.value = true;
            openedWrapper.value = true;
        };

        const timerIdHideModal = ref(null);
        const hideModal = (name) => {
            openedWrapper.value = false;

            timerIdHideModal.value = setTimeout(() => {
                openedShadow.value = false;
                openedModal.value = name;

                focusWrap.value = !focusWrap.value;
            }, 600);
        };

        const timerIdToggleModal = ref(null);
        const toggleModal = (name) => {
            openedWrapper.value = false;

            timerIdToggleModal.value = setTimeout(() => {
                openedModal.value = name;
                openedWrapper.value = true;
            }, 500);
        };

        provide('openedShadow', readonly(openedShadow));
        provide('openedWrapper', readonly(openedWrapper));

        provide('openedModal', readonly(openedModal));
        provide('openModal', openModal);

        provide('focusWrap', readonly(focusWrap));

        //

        const timerIdBlurElem = ref(null);

        const blurElement = (e) => {
            timerIdBlurElem.value = setTimeout(() => {
                e.target.closest('a')?.blur();
                e.target.closest('button')?.blur();
            }, 500);
        };

        provide('blurElement', blurElement);

        onBeforeUnmount(() => {
            clearTimeout(timerIdHideModal.value);
            clearTimeout(timerIdToggleModal.value);
            clearTimeout(timerIdBlurElem.value);
        });
    },
};
</script>

<style lang="scss">
@import "/src/assets/scss/_variables.scss";

label, input, textarea, button, select, a, summary {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a:focus, button:focus, input:focus, *:focus {
    outline: none !important;
}

button::-moz-focus-inner, *::-moz-focus-inner {
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

button {
    cursor: pointer;
    padding: 0;
}

[data-hidden="on"]:not([data-slider]) {
    display: none !important;
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

    &_lg:not(.pens) {
        @media (min-width: $lg_min) {
            display: block;
        }
    }

    &_lg.pens {
        @media (min-width: $lg_min_pens) {
            display: block;
        }
    }

    &_md:not(.pens) {
        @media (min-width: $md_min) and (max-width: $md_max) {
            display: block;
        }
    }

    &_md.pens {
        @media (min-width: $md_min_pens) and (max-width: $md_max_pens) {
            display: block;
        }
    }

    &_sm:not(.pens) {
        @media (max-width: $sm_max) {
            display: block;
        }
    }

    &_sm.pens {
        @media (max-width: $sm_max_pens) {
            display: block;
        }
    }
}
</style>
