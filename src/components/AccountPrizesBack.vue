<template>
    <div class="back account-prizes__back">
        <img alt="" class="image_lg" src="../assets/images/account-prizes-back-lg.png">
        <img alt="" class="image_md" src="../assets/images/account-prizes-back-md.png">
        <img alt="" class="image_sm" src="../assets/images/account-prizes-back-sm.png">
    </div>
</template>

<script>
export default {
    name: 'AccountPrizesBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-prizes__back {
    right: 50%;
    top: 0;
    transform: translateX(639px);

    @media (max-width: $md_max) {
        transform: translateX(576px);
    }

    @media (max-width: $sm_max) {
        transform: translateX(386px);
    }
}
</style>