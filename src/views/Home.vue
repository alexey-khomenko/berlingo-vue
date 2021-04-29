<template>
    <PageHeader page="index">
        <PageHeaderBack page="index"/>
        <PageHeaderMain page="index"/>
        <PageHeaderMobile page="index"/>
    </PageHeader>

    <div style="height: 100vh"></div>

    <PageFooter page="index">
        <PageFooterBack page="index"/>
        <PageFooterMain page="index"/>
    </PageFooter>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageHeaderBack from '@/components/PageHeaderBack.vue';
import PageHeaderMain from '@/components/PageHeaderMain.vue';
import PageHeaderMobile from '@/components/PageHeaderMobile.vue';

import PageFooter from '@/components/PageFooter.vue';
import PageFooterBack from '@/components/PageFooterBack.vue';
import PageFooterMain from '@/components/PageFooterMain.vue';

export default {
    name: 'Home',
    components: {
        PageHeader,
        PageHeaderBack,
        PageHeaderMain,
        PageHeaderMobile,

        PageFooter,
        PageFooterBack,
        PageFooterMain,
    },
};
</script>

<style scoped lang="scss">

</style>
