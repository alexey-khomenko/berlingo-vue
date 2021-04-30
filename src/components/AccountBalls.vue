<template>
    <section class="section account-balls">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AccountBalls',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-balls {
    height: 565px;

    @media (max-width: $md_max) {
        height: 451px;
    }

    @media (max-width: $sm_max) {
        height: 504px;
    }
}
</style>