<template>
    <div class="back" :class="`${page}-header__back`">
        <img alt="" class="image_lg" :src="require(`../assets/images/${page}-header-back-lg.png`)">
        <img alt="" class="image_md" :src="require(`../assets/images/${page}-header-back-md.png`)">
        <img alt="" class="image_sm" :src="require(`../assets/images/${page}-header-back-sm.png`)">
    </div>
</template>

<script>
export default {
    name: 'PageHeaderBack',
    components: {

    },
    props: {
        page: String,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-header__back {
    right: 50%;
    top: -290px;
    transform: translateX(-35px);

    @media (max-width: $md_max) {
        top: -267px;
        transform: translateX(35px);
    }

    @media (max-width: $sm_max) {
        top: -113px;
        transform: translateX(126px);
    }
}

.index-header__back {
    right: 50%;
    top: -230px;
    transform: translateX(156px);

    @media (max-width: $md_max) {
        top: -160px;
        transform: translateX(112px);
    }

    @media (max-width: $sm_max) {
        transform: translateX(230px);
    }
}

.winners-header__back {
    right: 50%;
    top: -397px;
    transform: translateX(220px);

    @media (max-width: $md_max) {
        top: -407px;
        transform: translateX(123px);
    }

    @media (max-width: $sm_max) {
        top: -153px;
        transform: translateX(175px);
    }
}
</style>