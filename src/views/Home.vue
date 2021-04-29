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
import PageHeader from '/src/components/PageHeader.vue';
import PageHeaderBack from '/src/components/PageHeaderBack.vue';
import PageHeaderMain from '/src/components/PageHeaderMain.vue';
import PageHeaderMobile from '/src/components/PageHeaderMobile.vue';

import PageFooter from '/src/components/PageFooter.vue';
import PageFooterBack from '/src/components/PageFooterBack.vue';
import PageFooterMain from '/src/components/PageFooterMain.vue';

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
