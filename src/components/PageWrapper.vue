<template>
    <div class="wrapper-outer" ref="wrap">
        <div class="wrapper-inner">
            <router-view/>
        </div>
    </div>
</template>

<script>
import {inject} from 'vue';

export default {
    name: 'PageWrapper',
    setup() {
        const focusWrap = inject('focusWrap');

        return {focusWrap};
    },
    data() {
        return {
            timerId: null,
        };
    },
    watch: {
        focusWrap() {
            this.timerId = setTimeout(() => {
                this.$refs.wrap.focus();
            }, 100);
        },
    },
    mounted() {
        // todo ...
        setTimeout(() => {
            this.focusWrap = !this.focusWrap;
        }, 900);
    },
    beforeUnmount() {
        clearTimeout(this.timerId);
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.wrapper {
    &-outer {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: #000000;
    }

    &-inner {
        overflow: hidden;
    }
}

.section {
    display: block;
    position: relative;
}

.back {
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 0;
}

.main {
    display: block;
    z-index: 10;

    &_abs {
        position: absolute;
    }

    &_rel {
        position: relative;
    }

    &_account, &_index, &_winners {
        width: $container_lg;

        @media (max-width: $md_max) {
            width: $container_md;
        }

        @media (max-width: $sm_max) {
            width: $container_sm;
        }
    }

    &_pens {
        width: $container_lg_pens;

        @media (max-width: $md_max_pens) {
            width: $container_md_pens;
        }

        @media (max-width: $sm_max_pens) {
            width: $container_sm_pens;
        }
    }
}
</style>
