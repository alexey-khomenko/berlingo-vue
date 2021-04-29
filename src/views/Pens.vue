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
import PageHeader from '@/components/PageHeader.vue';
import PageHeaderMain from '@/components/PageHeaderMain.vue';
import PageHeaderMobile from '@/components/PageHeaderMobile.vue';
import PensContent from '@/components/PensContent.vue';
import PensContentBack from '@/components/PensContentBack.vue';
import PensContentMain from '@/components/PensContentMain.vue';
import PageFooter from '@/components/PageFooter.vue';
import PageFooterMain from '@/components/PageFooterMain.vue';

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
