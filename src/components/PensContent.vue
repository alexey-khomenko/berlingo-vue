<template>
    <section class="section pens-content">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'PageContent',
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