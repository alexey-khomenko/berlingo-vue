<template>
    <slot></slot>
</template>

<script>
export default {
    name: 'PageTabs',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.index-shops__main, .winners-tabs__main {
    .title {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 40px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
        }
    }

    .subtitle {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 80px;

        @media (max-width: $md_max) {
            font-size: 18px;
            line-height: 22px;
            margin-top: -20px;
            margin-bottom: 60px;
        }

        @media (max-width: $sm_max) {
            margin-bottom: 40px;
        }
    }

    .tabs {
        display: block;

        &__head {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 80px;

            @media (max-width: $md_max) {
                margin-bottom: 60px;
            }

            @media (max-width: $sm_max) {
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 40px;
            }

            .btn:not(:last-of-type) {
                margin: 0 20px 0 0;

                @media (max-width: $sm_max) {
                    margin: 0 0 20px 0;
                }
            }
        }

        .list-wrapper {
            overflow: hidden;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 100px;
                background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                transform: scale(1, -1);
                pointer-events: none;
            }
        }
    }
}

</style>