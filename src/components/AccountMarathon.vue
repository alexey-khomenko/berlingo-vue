<template>
    <section class="section account-marathon">
        <account-marathon-back/>
        <account-marathon-main/>
    </section>
</template>

<script>
import AccountMarathonBack from '/src/components/AccountMarathonBack';
import AccountMarathonMain from '/src/components/AccountMarathonMain';

export default {
    name: 'AccountMarathon',
    components: {
        AccountMarathonBack,
        AccountMarathonMain,
    },
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