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
import PageHeader from '/src/components/PageHeader';
import PageHeaderBack from '/src/components/PageHeaderBack';
import PageHeaderMain from '/src/components/PageHeaderMain';
import PageHeaderMobile from '/src/components/PageHeaderMobile';
import WinnersTop from '/src/components/WinnersTop';
import WinnersTopBack from '/src/components/WinnersTopBack';
import WinnersTopMain from '/src/components/WinnersTopMain';
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
        WinnersTopBack,
        WinnersTopMain,
        WinnersTabs,
        PageFooter,
        PageFooterMain,
    },
};
</script>