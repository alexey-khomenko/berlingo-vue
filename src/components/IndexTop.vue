<template>
    <section class="section index-top">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'IndexTop',
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