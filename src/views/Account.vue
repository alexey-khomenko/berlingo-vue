<template>
    <PageHeader page="account">
        <PageHeaderBack page="account"/>
        <PageHeaderMain page="account"/>
        <PageHeaderMobile page="account"/>
    </PageHeader>
    <AccountTop>
        <AccountTopBack/>
        <AccountTopMain/>
    </AccountTop>

    <PageFooter page="account">
        <PageFooterBack page="account"/>
        <PageFooterMain page="account"/>
    </PageFooter>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageHeaderBack from '@/components/PageHeaderBack.vue';
import PageHeaderMain from '@/components/PageHeaderMain.vue';
import PageHeaderMobile from '@/components/PageHeaderMobile.vue';
import AccountTop from '@/components/AccountTop';
import AccountTopBack from '@/components/AccountTopBack';
import AccountTopMain from '@/components/AccountTopMain';

import PageFooter from '@/components/PageFooter.vue';
import PageFooterBack from '@/components/PageFooterBack.vue';
import PageFooterMain from '@/components/PageFooterMain.vue';

export default {
    name: 'Account',
    components: {
        PageHeader,
        PageHeaderBack,
        PageHeaderMain,
        PageHeaderMobile,
        AccountTop,
        AccountTopBack,
        AccountTopMain,

        PageFooter,
        PageFooterBack,
        PageFooterMain,
    },
};
</script>

<style scoped lang="scss">

</style>
