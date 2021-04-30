<template>
    <section class="section account-bottom">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AccountBottom',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-bottom {
    height: 418px;

    @media (max-width: $md_max) {
        height: 324px;
    }

    @media (max-width: $sm_max) {
        height: 407px;
    }
}
</style>