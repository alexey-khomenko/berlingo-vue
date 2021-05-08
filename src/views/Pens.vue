<template>
    <page-header page="pens" :class="{open: menuOpen}">
        <page-header-main page="pens" @menu-open="menuOpen = true"/>
        <page-header-mobile page="pens" @menu-close="menuOpen = false"/>
    </page-header>
    <pens-content/>
    <page-footer page="pens">
        <page-footer-main page="pens"/>
    </page-footer>
</template>

<script>
import PageHeader from '/src/components/PageHeader';
import PageHeaderMain from '/src/components/PageHeaderMain';
import PageHeaderMobile from '/src/components/PageHeaderMobile';
import PensContent from '/src/components/PensContent';
import PageFooter from '/src/components/PageFooter';
import PageFooterMain from '/src/components/PageFooterMain';

export default {
    name: 'Pens',
    components: {
        PageHeader,
        PageHeaderMain,
        PageHeaderMobile,
        PensContent,
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