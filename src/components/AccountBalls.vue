<template>
    <section class="section account-balls">
        <account-balls-back/>
        <account-balls-main/>
    </section>
</template>

<script>
import AccountBallsBack from '/src/components/AccountBallsBack';
import AccountBallsMain from '/src/components/AccountBallsMain';

export default {
    name: 'AccountBalls',
    components: {
        AccountBallsBack,
        AccountBallsMain,
    },
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