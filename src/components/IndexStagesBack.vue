<template>
    <div class="back index-stages__back">
        <img alt="" class="image_lg" src="../assets/images/index-stages-back-lg.png"/>
        <img alt="" class="image_md" src="../assets/images/index-stages-back-md.png"/>
        <img alt="" class="image_sm" src="../assets/images/index-stages-back-sm.png"/>
    </div>
</template>

<script>
export default {
    name: 'IndexStagesBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-stages__back {
    top: 0;
    transform: translateX(-50%);
    left: 50%;

    img {
        height: auto;
        width: 1160px;

        @media (max-width: $md_max) {
            width: 940px;
        }

        @media (max-width: $sm_max) {
            width: 350px;
        }
    }
}
</style>