<template>
    <PageHeader page="account">
        <PageHeaderBack page="account"/>
        <PageHeaderMain page="account"/>
        <PageHeaderMobile page="account"/>
    </PageHeader>

    <div style="height: 100vh"></div>

    <PageFooter page="account">
        <PageFooterBack page="account"/>
        <PageFooterMain page="account"/>
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
    name: 'Account',
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
