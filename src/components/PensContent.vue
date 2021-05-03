<template>
    <section class="section pens-content">
        <PensContentBack/>
        <PensContentMain/>
    </section>
</template>

<script>
import PensContentBack from '/src/components/PensContentBack';
import PensContentMain from '/src/components/PensContentMain';

export default {
    name: 'PageContent',
    components: {
        PensContentBack,
        PensContentMain,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.pens-content {
    height: 4090px;

    @media (max-width: $md_max_pens) {
        height: 2180px;
    }

    @media (max-width: $sm_max_pens) {
        height: 5650px;
    }
}
</style>