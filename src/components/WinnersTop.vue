<template>
    <section class="section winners-top">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'WinnersTop',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.winners-top {
    height: 252px;

    @media (max-width: $md_max) {
        height: 198px;
    }

    @media (max-width: $sm_max) {
        height: 129px;
    }
}
</style>