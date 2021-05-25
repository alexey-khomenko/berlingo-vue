export const blurElemMixin = {
    methods: {
        blurElem(e) {
            setTimeout(() => {
                e.target.closest('a')?.blur();
                e.target.closest('button')?.blur();
            }, 700);
        },
    },
};