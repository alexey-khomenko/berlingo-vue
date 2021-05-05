<template>
    <section class="section account-top">
        <account-top-back/>
        <account-top-main/>
    </section>
</template>

<script>
import AccountTopBack from '/src/components/AccountTopBack';
import AccountTopMain from '/src/components/AccountTopMain';

export default {
    name: 'AccountTop',
    components: {
        AccountTopBack,
        AccountTopMain,
    },
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