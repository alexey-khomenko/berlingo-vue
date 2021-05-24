export const blurElemMixin = {
    methods: {
        blurElem(e) {
            setTimeout(() => {
                console.log('mixin');
                e.target.closest('a')?.blur();
                e.target.closest('button')?.blur();
            }, 700);
        },
    },
};