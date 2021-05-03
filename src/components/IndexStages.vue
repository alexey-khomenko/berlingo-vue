<template>
    <section class="section index-stages">
        <IndexStagesBack/>
        <IndexStagesMain/>
    </section>
</template>

<script>
import IndexStagesBack from '/src/components/IndexStagesBack';
import IndexStagesMain from '/src/components/IndexStagesMain';

export default {
    name: 'IndexStages',
    components: {
        IndexStagesBack,
        IndexStagesMain,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-stages {
    height: 760px;

    @media (max-width: $md_max) {
        height: 680px;
    }

    @media (max-width: $sm_max) {
        height: 1138px;
    }
}
</style>