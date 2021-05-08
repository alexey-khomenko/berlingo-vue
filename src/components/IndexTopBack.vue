<template>
    <div class="back index-top__back"
         :data-slider="slide.number" :data-hidden="slide.hidden"
         v-for="slide in slides" :key="slide.number"
    >
        <img alt="" class="image_lg" :src="require(`../assets/images/index-top-back-${slide.number + 1}-lg.png`)"/>
        <img alt="" class="image_md" :src="require(`../assets/images/index-top-back-${slide.number + 1}-md.png`)"/>
        <img alt="" class="image_sm" :src="require(`../assets/images/index-top-back-${slide.number + 1}-sm.png`)"/>
    </div>
</template>

<script>
export default {
    name: 'IndexTopBack',
    data() {
        return {
            slides: [
                {
                    number: 0,
                    hidden: 'off',
                },
                {
                    number: 1,
                    hidden: 'on',
                },
                {
                    number: 2,
                    hidden: 'on',
                },
            ],
        };
    },
    mounted() {
        const that = this;
        let oldNumber = 0;
        const max = this.slides.length - 1;

        setTimeout(function tick() {
            let newNumber = oldNumber < max ? oldNumber + 1 : 0;

            for (let slide of that.slides) {
                if (slide.number === oldNumber) slide.hidden = 'on';
                if (slide.number === newNumber) slide.hidden = 'off';
            }

            oldNumber = newNumber;

            setTimeout(tick, 3200);
        }, 3200);
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