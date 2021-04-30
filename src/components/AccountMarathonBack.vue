<template>
    <div class="back account-marathon__back">
        <img alt="" class="image_lg" src="../assets/images/account-marathon-back-lg.png">
        <img alt="" class="image_md" src="../assets/images/account-marathon-back-md.png">
        <img alt="" class="image_sm" src="../assets/images/account-marathon-back-sm.png">
    </div>
</template>

<script>
export default {
    name: 'AccountMarathonBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-marathon__back {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>