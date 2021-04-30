<template>
    <div class="back footer__back">
        <img alt="" class="image_lg" :src="require(`../assets/images/${page}-footer-back-lg.png`)"/>
        <img alt="" class="image_md" :src="require(`../assets/images/${page}-footer-back-md.png`)"/>
        <img alt="" class="image_sm" :src="require(`../assets/images/${page}-footer-back-sm.png`)"/>
    </div>
</template>

<script>
export default {
    name: 'PageFooterBack',
    props: {
        page: {
            type: String,
            required: true,
            validator: function (value) {
                return ['account', 'index', 'winners', 'pens'].includes(value);
            },
        },
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.footer__back {
    left: 50%;
    top: -398px;
    transform: translateX(0);

    @media (max-width: $md_max) {
        top: -304px;
        transform: translateX(0);
    }

    @media (max-width: $sm_max) {
        top: -232px;
        transform: translateX(-320px);
    }
}
</style>