<template>
    <div class="back prizes__back" :class="`prizes__back_${page}`">
        <img alt="" class="image_lg" :src="require(`../assets/images/${page}-prizes-back-lg.png`)"/>
        <img alt="" class="image_md" :src="require(`../assets/images/${page}-prizes-back-md.png`)"/>
        <img alt="" class="image_sm" :src="require(`../assets/images/${page}-prizes-back-sm.png`)"/>
    </div>
</template>

<script>
export default {
    name: 'PagePrizesBack',
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

.prizes__back {
    right: 50%;
    transform: translateX(639px);

    @media (max-width: $md_max) {
        transform: translateX(576px);
    }

    @media (max-width: $sm_max) {
        transform: translateX(386px);
    }

    &_account {
        top: 0;
    }

    &_index {
        top: 11px;

        @media (max-width: $md_max) {
            top: -9px;
        }

        @media (max-width: $sm_max) {
            top: 20px;
        }
    }
}
</style>