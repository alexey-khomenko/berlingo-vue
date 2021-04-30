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
import PageHeader from '/src/components/PageHeader';
import PageHeaderBack from '/src/components/PageHeaderBack';
import PageHeaderMain from '/src/components/PageHeaderMain';
import PageHeaderMobile from '/src/components/PageHeaderMobile';

import PageFooter from '/src/components/PageFooter';
import PageFooterBack from '/src/components/PageFooterBack';
import PageFooterMain from '/src/components/PageFooterMain';

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