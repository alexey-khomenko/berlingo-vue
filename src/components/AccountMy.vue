<template>
    <section class="section account-my">
        <account-my-main/>
    </section>
</template>

<script>
import AccountMyMain from '/src/components/AccountMyMain';

export default {
    name: 'AccountMy',
    components: {
        AccountMyMain,
    }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-my {
    height: auto;
}
</style>