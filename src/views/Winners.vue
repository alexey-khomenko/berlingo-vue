<template>
    <PageHeader page="winners">
        <PageHeaderBack page="winners"/>
        <PageHeaderMain page="winners"/>
        <PageHeaderMobile page="winners"/>
    </PageHeader>

    <div style="height: 100vh"></div>

    <PageFooter page="winners">
        <PageFooterMain page="winners"/>
    </PageFooter>
</template>

<script>
import PageHeader from '/src/components/PageHeader.vue';
import PageHeaderBack from '/src/components/PageHeaderBack.vue';
import PageHeaderMain from '/src/components/PageHeaderMain.vue';
import PageHeaderMobile from '/src/components/PageHeaderMobile.vue';

import PageFooter from '/src/components/PageFooter.vue';
import PageFooterMain from '/src/components/PageFooterMain.vue';

export default {
    name: 'Winners',
    components: {
        PageHeader,
        PageHeaderBack,
        PageHeaderMain,
        PageHeaderMobile,

        PageFooter,
        PageFooterMain,
    },
};
</script>

<style scoped lang="scss">

</style>
