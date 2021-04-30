<template>
    <div class="back account-top__back">
        <img alt="" class="image_lg" src="../assets/images/account-top-back-lg.png"/>
        <img alt="" class="image_md" src="../assets/images/account-top-back-md.png"/>
        <img alt="" class="image_sm" src="../assets/images/account-top-back-sm.png"/>
    </div>
</template>

<script>
export default {
    name: 'AccountTopBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-top__back {
    left: 50%;
    top: -20px;
    transform: translateX(180px);

    @media (max-width: $md_max) {
        top: -20px;
        transform: translateX(206px);
    }

    @media (max-width: $sm_max) {
        top: 58px;
        transform: translateX(10px);
    }
}
</style>