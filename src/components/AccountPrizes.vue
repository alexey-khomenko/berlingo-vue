<template>
    <section class="section account-prizes">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AccountPrizes',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-prizes {
    height: 1080px;

    @media (max-width: $md_max) {
        height: 961px;
    }

    @media (max-width: $sm_max) {
        height: 1930px;
    }
}
</style>