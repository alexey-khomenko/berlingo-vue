<template>
    <PageWrapper>
        <div>
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
        <ModalReceipt/>
        <ModalTest/>
    </PageShadow>
</template>

<script>
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
    }
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
