<template>
    <PageHeader page="pens">
        <PageHeaderMain page="pens"/>
        <PageHeaderMobile page="pens"/>
    </PageHeader>
    <PensContent>
        <PensContentBack/>
        <PensContentMain/>
    </PensContent>
    <PageFooter page="pens">
        <PageFooterMain page="pens"/>
    </PageFooter>
</template>

<script>
import PageHeader from '/src/components/PageHeader.vue';
import PageHeaderMain from '/src/components/PageHeaderMain.vue';
import PageHeaderMobile from '/src/components/PageHeaderMobile.vue';
import PensContent from '/src/components/PensContent.vue';
import PensContentBack from '/src/components/PensContentBack.vue';
import PensContentMain from '/src/components/PensContentMain.vue';
import PageFooter from '/src/components/PageFooter.vue';
import PageFooterMain from '/src/components/PageFooterMain.vue';

export default {
    name: 'Pens',
    components: {
        PageHeader,
        PageHeaderMain,
        PageHeaderMobile,
        PensContent,
        PensContentBack,
        PensContentMain,
        PageFooter,
        PageFooterMain,
    },
};
</script>
