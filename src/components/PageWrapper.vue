<template>
    <div class="wrapper-outer">
        <div class="wrapper-inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageWrapper',
};
</script>

<style lang="scss">
@import "/src/assets/scss/_variables.scss";
.wrapper {
    &-outer {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: #000000;
    }

    &-inner {
        overflow: hidden;
    }
}

.section {
    display: block;
    position: relative;
}

.back {
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 0;
}

.main {
    display: block;
    z-index: 10;
    width: $container_lg;

    @media (max-width: $md_max) {
        width: $container_md;
    }

    @media (max-width: $sm_max) {
        width: $container_sm;
    }

    &_abs {
        position: absolute;
    }

    &_rel {
        position: relative;
    }
}

.main-pens {
    display: block;
    z-index: 10;
    width: $container_lg_pens;

    @media (max-width: $md_max_pens) {
        width: $container_md_pens;
    }

    @media (max-width: $sm_max_pens) {
        width: $container_sm_pens;
    }
}

</style>
