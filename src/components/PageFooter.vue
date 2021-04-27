<template>
    <footer class="footer section" :class="`footer_${page}`">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter',
    props: {
        page: String,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.footer {
    height: 197px;

    &::before {
        content: "";
        display: block;
        position: absolute;
        z-index: 12;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #ffffff;
    }

    &_account, &_index, &_winners {
        @media (max-width: $md_max) {
            height: 149px;
        }

        @media (max-width: $sm_max) {
            height: 274px;
        }
    }

    &_pens {
        @media (max-width: $md_max_pens) {
            height: 149px;
        }

        @media (max-width: $sm_max_pens) {
            height: 274px;
        }
    }
}
</style>