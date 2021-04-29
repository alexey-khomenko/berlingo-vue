<template>
    <PageHeader page="winners">
        <PageHeaderBack page="winners"/>
        <PageHeaderMain page="winners"/>
        <PageHeaderMobile page="winners"/>
    </PageHeader>
    <WinnersTop>
        <WinnersTopBack/>
        <WinnersTopMain/>
    </WinnersTop>
    <WinnersTabs/>
    <PageFooter page="winners">
        <PageFooterMain page="winners"/>
    </PageFooter>
</template>

<script>
import PageHeader from '/src/components/PageHeader.vue';
import PageHeaderBack from '/src/components/PageHeaderBack.vue';
import PageHeaderMain from '/src/components/PageHeaderMain.vue';
import PageHeaderMobile from '/src/components/PageHeaderMobile.vue';
import WinnersTop from '/src/components/WinnersTop.vue';
import WinnersTopBack from '/src/components/WinnersTopBack.vue';
import WinnersTopMain from '/src/components/WinnersTopMain.vue';
import WinnersTabs from '/src/components/WinnersTabs.vue';
import PageFooter from '/src/components/PageFooter.vue';
import PageFooterMain from '/src/components/PageFooterMain.vue';

export default {
    name: 'Winners',
    components: {
        PageHeader,
        PageHeaderBack,
        PageHeaderMain,
        PageHeaderMobile,
        WinnersTop,
        WinnersTopBack,
        WinnersTopMain,
        WinnersTabs,
        PageFooter,
        PageFooterMain,
    },
};
</script>