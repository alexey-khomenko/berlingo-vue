// import {inject} from 'vue';

export const emitsModalMixin = {
    emits: {
        'modal-important': value => typeof value === 'boolean',
    },
};

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
    computed: {
        open() {
            return this.openedModal === this.name;
        },
    },
    watch: {
        open(val) {
            if (val) this.$emit('modal-important', this.important);
        },
    },
}