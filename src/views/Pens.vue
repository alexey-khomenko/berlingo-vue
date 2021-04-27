<template>
    <PageHeader page="pens">
        <PageHeaderMain page="pens"/>
        <PageHeaderMobile page="pens"/>
    </PageHeader>

    <div style="height: 100vh"></div>

    <PageFooter page="pens">
        <PageFooterMain page="pens"/>
    </PageFooter>
</template>

<script>
import PageHeader from '/src/components/PageHeader.vue';
import PageHeaderMain from '/src/components/PageHeaderMain.vue';
import PageHeaderMobile from '/src/components/PageHeaderMobile.vue';

import PageFooter from '/src/components/PageFooter.vue';
import PageFooterMain from '/src/components/PageFooterMain.vue';

export default {
    name: 'Pens',
    components: {
        PageHeader,
        PageHeaderMain,
        PageHeaderMobile,

        PageFooter,
        PageFooterMain,
    },
};
</script>

<style scoped lang="scss">

</style>
