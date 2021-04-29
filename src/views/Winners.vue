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
import PageHeader from '@/components/PageHeader.vue';
import PageHeaderBack from '@/components/PageHeaderBack.vue';
import PageHeaderMain from '@/components/PageHeaderMain.vue';
import PageHeaderMobile from '@/components/PageHeaderMobile.vue';
import WinnersTop from '@/components/WinnersTop.vue';
import WinnersTopBack from '@/components/WinnersTopBack.vue';
import WinnersTopMain from '@/components/WinnersTopMain.vue';
import WinnersTabs from '@/components/WinnersTabs.vue';
import PageFooter from '@/components/PageFooter.vue';
import PageFooterMain from '@/components/PageFooterMain.vue';

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