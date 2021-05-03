<template>
    <PageHeader page="pens">
        <PageHeaderMain page="pens"/>
        <PageHeaderMobile page="pens"/>
    </PageHeader>
    <PensContent/>
    <PageFooter page="pens">
        <PageFooterMain page="pens"/>
    </PageFooter>
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
};
</script>