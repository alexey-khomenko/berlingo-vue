<template>
    <div class="back account-balls__back">
        <img alt="" class="image_lg" src="../assets/images/account-balls-back-lg.png">
        <img alt="" class="image_md" src="../assets/images/account-balls-back-md.png">
        <img alt="" class="image_sm" src="../assets/images/account-balls-back-sm.png">
    </div>
</template>

<script>
export default {
    name: 'AccountBallsBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-balls__back {
    right: 50%;
    top: 134px;
    transform: translateX(-221px);

    @media (max-width: $md_max) {
        top: 124px;
        transform: translateX(-171px);
    }

    @media (max-width: $sm_max) {
        top: 126px;
        transform: translateX(140px);
    }
}
</style>