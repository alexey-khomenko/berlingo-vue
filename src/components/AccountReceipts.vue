<template>
    <section class="section account-receipts">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'AccountReceipts',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-receipts {
    height: auto;
}
</style>