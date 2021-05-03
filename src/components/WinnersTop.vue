<template>
    <section class="section winners-top">
        <WinnersTopBack/>
        <WinnersTopMain/>
    </section>
</template>

<script>
import WinnersTopBack from '/src/components/WinnersTopBack';
import WinnersTopMain from '/src/components/WinnersTopMain';

export default {
    name: 'WinnersTop',
    components: {
        WinnersTopBack,
        WinnersTopMain,
    },
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