<template>
    <page-header page="winners" :class="{open: menuOpen}">
        <page-header-back page="winners"/>
        <page-header-main page="winners" @menu-open="menuOpen = true"/>
        <page-header-mobile page="winners" @menu-close="menuOpen = false"/>
    </page-header>
    <winners-top/>
    <winners-tabs/>
    <page-footer page="winners">
        <page-footer-main page="winners"/>
    </page-footer>
</template>

<script>
import PageHeader from '/src/components/PageHeader';
import PageHeaderBack from '/src/components/PageHeaderBack';
import PageHeaderMain from '/src/components/PageHeaderMain';
import PageHeaderMobile from '/src/components/PageHeaderMobile';
import WinnersTop from '/src/components/WinnersTop';
import WinnersTabs from '/src/components/WinnersTabs';
import PageFooter from '/src/components/PageFooter';
import PageFooterMain from '/src/components/PageFooterMain';

export default {
    name: 'Winners',
    components: {
        PageHeader,
        PageHeaderBack,
        PageHeaderMain,
        PageHeaderMobile,
        WinnersTop,
        WinnersTabs,
        PageFooter,
        PageFooterMain,
    },
    data() {
        return {
            menuOpen: false,
        };
    },
};
</script>