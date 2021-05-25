<template>
    <page-wrapper>
        <router-view/>
    </page-wrapper>
    <page-shadow>
        <modal-auth/>
        <modal-receipt @modal-important="modalImportantHandler"/>
        <modal-test/>
    </page-shadow>
</template>

<script>
import {provide, ref} from 'vue';

import PageWrapper from '/src/components/PageWrapper.vue';
import PageShadow from '/src/components/PageShadow.vue';
import ModalAuth from '/src/components/ModalAuth.vue';
import ModalReceipt from '/src/components/ModalReceipt.vue';
import ModalTest from '/src/components/ModalTest.vue';

export default {
    name: 'App',
    components: {
        PageWrapper,
        PageShadow,
        ModalAuth,
        ModalReceipt,
        ModalTest,
    },
    setup() {
        const openedModal = ref(null);
        const openModal = (name) => {
            const modals = [
                null, 'login', 'register', 'success', 'receipt',
                'test_1', 'test_2', 'test_3', 'test_4', 'test_5', 'test_6',
            ];

            if (!modals.includes(name)) console.error(`modal "${name}" not found`);

            openedModal.value = modals.includes(name) ? name : null;
        };

        provide('openedModal', openedModal);
        provide('openModal', openModal);
    },
    data() {
        return {
            modalImportant: false,
        };
    },
    methods: {
        modalImportantHandler(val) {
            // todo modalImportant
            this.modalImportant = val;
        },
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
