<template>
    <section class="bottom section" :class="`bottom_${page}`">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'PageBottom',
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

.bottom {
    height: 418px;

    @media (max-width: $md_max) {
        height: 324px;
    }

    @media (max-width: $sm_max) {
        height: 407px;
    }
}
</style>