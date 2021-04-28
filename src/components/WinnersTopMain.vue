<template>
    <div class="main main_rel main_winners winners-top__main">
        <div class="title">
            Победители
        </div>
    </div>
</template>

<script>
export default {
    name: 'WinnersTopMain',
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.winners-top__main {
    margin: 0 auto;
    padding-top: 80px;

    @media (max-width: $md_max) {
        padding-top: 60px;
    }

    @media (max-width: $sm_max) {
        padding-top: 40px;
    }

    .title {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 72px;

        @media (max-width: $md_max) {
            font-size: 48px;
            line-height: 58px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
        }
    }
}
</style>