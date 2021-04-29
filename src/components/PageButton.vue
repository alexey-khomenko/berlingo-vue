<template>
    <a href="#" class="button" :class="classes" v-if="type === 'a'">
        <span><slot></slot></span>
    </a>

    <router-link :to="to" class="button" :class="classes" v-else-if="type === 'link'">
        <span><slot></slot></span>
    </router-link>

    <button type="button" class="button" :class="classes" v-else-if="type === 'button'">
        <span><slot></slot></span>
    </button>

    <button type="submit" class="button" :class="classes" v-else-if="type === 'submit'">
        <span><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'PageButton',
    props: {
        type: {
            type: String,
            required: true,
            validator: function (value) {
                // todo
                // a - tmp
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
        border: {
            type: Boolean,
            default: false,
        },
        // todo
        // dataset - поведение - следить за кликом, передавать обёртке событие
        // width + margin - на обёртке
        // кнопка с svg?
    },
    computed: {
        classes() {
            let classes = [];

            if (this.border) {
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
    padding: 0;
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

    &:not(&_bordered) {
        border-color: transparent;
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