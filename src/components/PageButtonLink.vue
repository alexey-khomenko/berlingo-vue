<template>
    <a href="#" class="button" :class="{
        button_bordered: border,
        button_red: color === 'red',
        button_white: color === 'white',
        button_black: color === 'black',
    }">
        <span>
            <slot></slot>
        </span>
    </a>
</template>

<script>
export default {
    name: 'PageButtonLink',
    props: {
        color: {
            type: String,
            required: true,
            validator: function (value) {
                return ['red', 'white', 'black'].includes(value);
            },
        },
        border: {
            type: Boolean,
            default: false,
        },

        // todo router-link
        // todo submit

        // todo
        // dataset - поведение - следить за кликом, передавать обёртке событие
        // width + margin - на обёртке
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

    &:hover span, &:focus span {
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