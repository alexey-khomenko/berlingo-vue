<template>
    <div class="back account-bottom__back">
        <img alt="" class="image_lg" src="../assets/images/account-bottom-back-lg.png">
        <img alt="" class="image_md" src="../assets/images/account-bottom-back-md.png">
        <img alt="" class="image_sm" src="../assets/images/account-bottom-back-sm.png">
    </div>
</template>

<script>
export default {
    name: 'AccountBottomBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-bottom__back {
    left: 50%;
    top: 176px;
    transform: translateX(-113px);

    @media (max-width: $md_max) {
        top: 86px;
        transform: translateX(-63px);
    }

    @media (max-width: $sm_max) {
        top: 89px;
        transform: translateX(79px);
    }
}
</style>