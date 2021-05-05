<template>
    <section class="section index-prize">
        <index-prize-back/>
        <index-prize-main/>
    </section>
</template>

<script>
import IndexPrizeBack from '/src/components/IndexPrizeBack';
import IndexPrizeMain from '/src/components/IndexPrizeMain';

export default {
    name: 'IndexPrize',
    components: {
        IndexPrizeBack,
        IndexPrizeMain,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-prize {
    height: 790px;

    @media (max-width: $md_max) {
        height: 647px;
    }

    @media (max-width: $sm_max) {
        height: 722px;
    }
}
</style>