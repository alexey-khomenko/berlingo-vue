<template>
    <section class="section account-my">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AccountMy',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-my {
    height: auto;
}
</style>