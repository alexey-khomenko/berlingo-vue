<template>
    <section class="section account-receipts">
        <account-receipts-main/>
    </section>
</template>

<script>
import AccountReceiptsMain from '/src/components/AccountReceiptsMain';

export default {
    name: 'AccountReceipts',
    components: {
        AccountReceiptsMain,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-receipts {
    height: auto;
}
</style>