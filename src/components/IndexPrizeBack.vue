<template>
    <div class="back index-prize__back">
        <img alt="" class="image_lg" src="../assets/images/index-prize-back-lg.png"/>
        <img alt="" class="image_md" src="../assets/images/index-prize-back-md.png"/>
        <img alt="" class="image_sm" src="../assets/images/index-prize-back-sm.png"/>
    </div>
</template>

<script>
export default {
    name: 'IndexPrizeBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-prize__back {
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    img {
        height: auto;
        width: 1160px;

        @media (max-width: $md_max) {
            width: 940px;
        }

        @media (max-width: $sm_max) {
            width: 460px;
        }
    }
}
</style>