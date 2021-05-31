// import {inject} from 'vue';

export const setupModalMixin = {
    // todo setup() in mixin
};

export const openModalMixin = {
    emits: {
        'modal-important': value => typeof value === 'boolean',
    },
    watch: {
        openedModal(value) {
            if (value === this.name) {
                this.$emit('modal-important', this.important);
            }
        },
    },
};