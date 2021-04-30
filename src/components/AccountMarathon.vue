<template>
    <section class="section account-marathon">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AccountMarathon',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-marathon {
    height: 700px;

    @media (max-width: $md_max) {
        height: 570px;
    }

    @media (max-width: $sm_max) {
        height: 664px;
    }
}
</style>