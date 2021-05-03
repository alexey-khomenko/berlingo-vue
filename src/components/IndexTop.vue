<template>
    <section class="section index-top">
        <IndexTopBack/>
        <IndexTopMain/>
    </section>
</template>

<script>
import IndexTopBack from '/src/components/IndexTopBack';
import IndexTopMain from '/src/components/IndexTopMain';

export default {
    name: 'IndexTop',
    components: {
        IndexTopBack,
        IndexTopMain,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-top {
    height: 780px;

    @media (max-width: $md_max) {
        height: 580px;
    }

    @media (max-width: $sm_max) {
        height: 590px;
    }
}
</style>