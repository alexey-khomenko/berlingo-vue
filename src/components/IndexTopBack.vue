<template>
    <div class="back index-top__back"
         :data-hidden="selected === idx ? 'off' : 'on'"
         v-for="(slide, idx) in slides" :key="idx"
    >
        <img alt="" class="image_lg" :src="require(`../assets/images/${slide}-lg.png`)"/>
        <img alt="" class="image_md" :src="require(`../assets/images/${slide}-md.png`)"/>
        <img alt="" class="image_sm" :src="require(`../assets/images/${slide}-sm.png`)"/>
    </div>
</template>

<script>
export default {
    name: 'IndexTopBack',
    data() {
        return {
            selected: 0,
            slides: [
                'index-top-back-1',
                'index-top-back-2',
                'index-top-back-3',
            ],
            timerId: null,
        };
    },
    mounted() {
        const that = this;

        this.timerId = setTimeout(function tick() {
            that.selected = that.selected < (that.slides.length - 1) ? that.selected + 1 : 0;

            this.timerId = setTimeout(tick, 3200);
        }, 3200);
    },
    beforeUnmount() {
        clearTimeout(this.timerId);
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-top__back {
    right: 50%;
    top: -40px;
    transform: translateX(1128px);
    transition: opacity 1s ease;

    @media (max-width: $md_max) {
        top: -12px;
        transform: translateX(839px);
    }

    @media (max-width: $sm_max) {
        top: 280px;
        transform: translateX(320px);
    }

    &[data-hidden="on"] {
        opacity: 0;
    }

    &[data-hidden="off"] {
        opacity: 1;
    }

    img {
        width: auto;
        height: 880px;

        @media (max-width: $md_max) {
            height: 580px;
        }

        @media (max-width: $sm_max) {
            height: 290px;
        }
    }
}
</style>