<template>
    <section class="section account-top">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AccountTop',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-top {
    height: 392px;

    @media (max-width: $md_max) {
        height: 318px;
    }

    @media (max-width: $sm_max) {
        height: 309px;
    }
}
</style>