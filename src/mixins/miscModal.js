// import {inject} from 'vue';

export const setupModalMixin = {
    // todo setup() in mixin
    // setup() {
    //     const openModal = inject('openModal');
    //     const openedModal = inject('openedModal');
    //
    //     return {openModal, openedModal};
    // },
};

export const openModalMixin = {
    emits: {
        'modal-important': value => typeof value === 'boolean',
    },
    data() {
        return {
            timerIdModalMixin: null,
        };
    },
    computed: {
        open() {
            return this.openedModal === this.name;
        },
    },
    watch: {
        open(val) {
            if (val === null) return;

            this.timerIdModalMixin = setTimeout(() => {
                this.$refs.root.focus();
            }, 100);

            this.$emit('modal-important', this.important);
        },
    },
    beforeUnmount() {
        clearTimeout(this.timerIdModalMixin);
    },
};