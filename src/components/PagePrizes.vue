<template>
    <section class="prizes section" :class="`prizes_${page}`">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'PagePrizes',
    props: {
        page: {
            type: String,
            required: true,
            validator: function (value) {
                return ['account', 'index'].includes(value);
            },
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.prizes {
    &_account {
        height: 1080px;

        @media (max-width: $md_max) {
            height: 961px;
        }

        @media (max-width: $sm_max) {
            height: 1930px;
        }
    }

    &_index {
        height: 1086px;

        @media (max-width: $md_max) {
            height: 999px;
        }

        @media (max-width: $sm_max) {
            height: 1945px;
        }
    }
}
</style>