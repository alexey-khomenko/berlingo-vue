<template>
    <div class="back bottom__back">
        <img alt="" class="image_lg" :src="require(`../assets/images/${page}-bottom-back-lg.png`)"/>
        <img alt="" class="image_md" :src="require(`../assets/images/${page}-bottom-back-md.png`)"/>
        <img alt="" class="image_sm" :src="require(`../assets/images/${page}-bottom-back-sm.png`)"/>
    </div>
</template>

<script>
export default {
    name: 'PageBottomBack',
    props: {
        page: {
            type: String,
            required: true,
            validator: function (value) {
                return ['account', 'index'].includes(value);
            },
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.bottom__back {
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