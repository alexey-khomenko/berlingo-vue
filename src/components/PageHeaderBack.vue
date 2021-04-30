<template>
    <div class="back header__back" :class="`header__back_${page}`">
        <img alt="" class="image_lg" :src="require(`../assets/images/${page}-header-back-lg.png`)"/>
        <img alt="" class="image_md" :src="require(`../assets/images/${page}-header-back-md.png`)"/>
        <img alt="" class="image_sm" :src="require(`../assets/images/${page}-header-back-sm.png`)"/>
    </div>
</template>

<script>
export default {
    name: 'PageHeaderBack',
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

.header__back {
    right: 50%;

    &_account {
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

    &_index {
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

    &_winners {
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
}
</style>