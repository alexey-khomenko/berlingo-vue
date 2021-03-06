<template>
    <section class="modal" :class="{open}" ref="root" @click.stop>
        <div class="modal__body-0">
            <div class="modal__body-1">
                <div class="back">
                    <slot name="back"></slot>
                </div>
                <div class="modal__body-2">
                    <button type="button" class="modal__close" @click="closeModal($event)">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.6673 0.335559L23.6639 0.332131C23.221 -0.11071 22.5033 -0.11071 22.0605 0.332131L11.9997 10.3935L1.93836 0.332131C1.49552 -0.11071 0.777829 -0.11071 0.334988 0.332131L0.332131 0.335559C-0.11071 0.7784 -0.11071 1.49609 0.332131 1.93893L10.3935 11.9997L0.332131 22.0611C-0.11071 22.5039 -0.11071 23.2216 0.332131 23.6644L0.335559 23.6679C0.7784 24.1107 1.49609 24.1107 1.93893 23.6679L11.9997 13.6059L22.0611 23.6673C22.5039 24.1101 23.2216 24.1101 23.6644 23.6673L23.6679 23.6639C24.1107 23.221 24.1107 22.5033 23.6679 22.0605L13.6059 11.9997L23.6673 1.93836C24.1101 1.49609 24.1101 0.7784 23.6673 0.335559Z"
                                  fill="currentColor"></path>
                        </svg>
                    </button>

                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {inject} from 'vue';

export default {
    name: 'ModalWrapper',
    props: {
        name: {
            type: String,
            required: true,
            validator: function (value) {
                return [
                    'login', 'register', 'success', 'receipt',
                    'test_1', 'test_2', 'test_3', 'test_4', 'test_5', 'test_6',
                ].includes(value);
            },
        },
        important: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const setModalImportant = inject('setModalImportant');

        const openModal = inject('openModal');
        const openedModal = inject('openedModal');

        const blurElement = inject('blurElement');

        return {setModalImportant, openModal, openedModal, blurElement};
    },
    data() {
        return {
            timerId: null,
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

            this.timerId = setTimeout(() => {
                this.$refs.root.focus();
            }, 100);

            this.setModalImportant(this.important);
        },
    },
    methods: {
        closeModal(e) {
            this.blurElement(e);
            this.openModal(null);
        },
    },
    beforeUnmount() {
        clearTimeout(this.timerId);
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.modal__close {
    position: absolute;
    transform: translate(50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    top: 39px;
    right: 39px;

    @media (max-width: $sm_max) {
        top: 20px;
        right: 20px;
    }

    &:hover svg, &:focus svg {
        transform: scale(1.2);
    }

    svg {
        transition: transform 500ms ease;
        color: #000000;
        width: 24px;
        height: 24px;

        @media (max-width: $sm_max) {
            width: 16px;
            height: 16px;
        }
    }
}
</style>
