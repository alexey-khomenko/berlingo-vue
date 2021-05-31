export const blurElemMixin = {
    data() {
        return {
            timerIdBlurElem: null,
        }
    },
    methods: {
        blurElem(e) {
            this.timerIdBlurElem = setTimeout(() => {
                e.target.closest('a')?.blur();
                e.target.closest('button')?.blur();
            }, 700);
        },
    },
    beforeUnmount() {
        clearTimeout(this.timerIdBlurElem);
    },
};