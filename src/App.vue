<template>
    <page-wrapper/>
    <page-shadow/>
</template>

<script>
import {provide, ref} from 'vue';
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
            name = checkModalName(name);

            if (!openedModal.value?.length && name?.length) {
                openModalInner(name);
            }
            else if (openedModal.value?.length && !name?.length) {
                closeModalInner(name);
            }
            else if (openedModal.value?.length && name?.length) {
                toggleModalInner(name);
            }
        };

        const checkModalName = (name) => {
            const modals = [
                null, 'login', 'register', 'success', 'receipt',
                'test_1', 'test_2', 'test_3', 'test_4', 'test_5', 'test_6',
            ];

            if (!modals.includes(name)) console.error(`modal "${name}" not found`);

            return modals.includes(name) ? name : null;
        };

        const openModalInner = (name) => {
            openedModal.value = name;
            openedShadow.value = true;
            openedWrapper.value = true;
        };

        const closeModalInner = (name) => {
            openedWrapper.value = false;

            setTimeout(() => {
                openedShadow.value = false;
                openedModal.value = name;

                focusWrap.value = !focusWrap.value;
            }, 600);
        };

        const toggleModalInner = (name) => {
            openedWrapper.value = false;

            setTimeout(() => {
                openedModal.value = name;
                openedWrapper.value = true;
            }, 500);
        };

        provide('openedShadow', openedShadow);
        provide('openedWrapper', openedWrapper);
        provide('openedModal', openedModal);

        provide('openModal', openModal);

        provide('focusWrap', focusWrap);
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
