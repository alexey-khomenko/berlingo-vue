<template>
    <div class="back pens-content__back">
        <img alt="" class="image_lg pens" src="../assets/images/pens-content-back-lg.png"/>
        <img alt="" class="image_md pens" src="../assets/images/pens-content-back-md.png"/>
        <img alt="" class="image_sm pens" src="../assets/images/pens-content-back-sm.png"/>
    </div>
</template>

<script>
export default {
    name: 'PageContentBack',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.pens-content__back {
    top: -60px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: $sm_max_pens) {
        top: -40px;
    }
}
</style>