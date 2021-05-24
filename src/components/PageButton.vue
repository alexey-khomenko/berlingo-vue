<template>
    <a :href="to" class="button" :class="classes" @click="blurElem($event)" v-if="type === 'a'">
        <slot></slot>
    </a>

    <router-link :to="to" class="button" :class="classes" @click="blurElem($event)" v-else-if="type === 'link'">
        <slot></slot>
    </router-link>

    <button type="button" class="button" :class="classes" @click="blurElem($event)" v-else-if="type === 'button'">
        <slot></slot>
    </button>

    <button type="submit" class="button" :class="classes" @click="blurElem($event)" v-else-if="type === 'submit'">
        <slot></slot>
    </button>
</template>

<script>
import {blurElemMixin} from '/src/mixins/blurElem';

export default {
    name: 'PageButton',
    props: {
        type: {
            type: String,
            required: true,
            validator: function (value) {
                return ['a', 'link', 'button', 'submit'].includes(value);
            },
        },
        to: {
            type: String,
            default: '/',
        },
        color: {
            type: String,
            required: true,
            validator: function (value) {
                return ['red', 'green', 'blue', 'white', 'black'].includes(value);
            },
        },
        bordered: {
            type: Boolean,
            default: false,
        },
    },
    mixins: [blurElemMixin],
    computed: {
        classes() {
            let classes = [];

            if (this.bordered) {
                classes.push('button_bordered');
            }

            classes.push(`button_${this.color}`);

            return classes.join(' ');
        },
    },
};

</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 99999px;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 80px;

    @media (max-width: $sm_max) {
        height: 60px;
    }

    div:not([data-selected="on"]) > &:hover span,
    div:not([data-selected="on"]) > &:focus span {
        transform: scale(1.05, 1.15);
    }

    span {
        padding-top: 3px;
        transition: transform 500ms ease;
        text-transform: uppercase;
        font-family: "Bebas Neue", sans-serif;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.01em;
        font-size: 20px;

        @media (max-width: $sm_max) {
            font-size: 14px;
        }
    }

    div:not([data-selected="on"]) > &:hover svg,
    div:not([data-selected="on"]) > &:focus svg {
        transform: scale(1.2);
    }

    svg {
        transition: transform 500ms ease;
    }

    &:not(&_bordered) {
        border: none;
    }

    &_bordered {
        border: 2px solid currentColor;
    }

    &_red {
        color: #ffffff;
        background-image: linear-gradient(180deg, #ff9c47 0%, #e600c6 100%);
    }

    &_green {
        color: #ffffff;
        background-image: linear-gradient(180deg, #04bb33 0%, #00b58a 100%);
    }

    &_blue {
        color: #ffffff;
        background-image: linear-gradient(180deg, #00a2f6 0%, #c153ff 100%);
    }

    &_white {
        color: #000000;
        background-color: #ffffff;
    }

    &_black {
        color: #ffffff;
        background-color: #000000;
    }
}
</style>