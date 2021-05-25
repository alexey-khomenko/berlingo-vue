<template>
    <input type="checkbox" :name="name" :id="name" data-hidden="on"/>
    <label class="form__checkbox" :for="name">
        <span class="form__check">
            <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7368 1.52152C14.0878 1.17389 14.0878 0.608145 13.7365 0.260618C13.3852 -0.0868728 12.8134 -0.0868728 12.4621 0.260618L4.79273 7.84818L1.53821 4.62843C1.36809 4.46013 1.14184 4.36745 0.901202 4.36745C0.660493 4.36745 0.43417 4.46023 0.263908 4.62864C0.0937165 4.79701 0 5.02089 0 5.25906C0 5.49719 0.0937165 5.72107 0.263873 5.88937L4.15519 9.73936C4.50668 10.0868 5.07846 10.0869 5.42963 9.7394L13.7368 1.52152Z"
                      fill="currentColor"></path>
            </svg>
        </span>
        <span>
            Я согласен с
            <a href="#" download="download">политикой обработки персональных данных</a>
            и
            <a href="#" download="download">условиями акции</a>
        </span>
    </label>
</template>

<script>
export default {
    name: 'ModalButtonAgree',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    // todo script submit
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.form {
    &__checkbox {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        height: 40px;
        margin: 0 0 40px;

        @media (max-width: $sm_max) {
            // todo mt
            margin-top: -10px;
            height: 52px;
        }

        span {
            font-family: "PF Din Text Cond Pro", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            @media (max-width: $sm_max) {
                font-size: 14px;
                line-height: 17px;
            }
        }

        a {
            color: #000000;
            display: inline;
            text-decoration: underline;

            &:hover, &:focus {
                color: #828282;
            }
        }
    }

    &__check {
        display: block;
        flex-shrink: 0;
        cursor: pointer;
        position: relative;
        margin-right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 99999px;
        border: 1px solid #000000;

        &.error {
            border-color: #ff327c;
        }

        svg {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 14px;
            height: 10px;
        }
    }
}
</style>
