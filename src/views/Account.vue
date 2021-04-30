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
    <AccountReceipts>
        <AccountReceiptsMain/>
    </AccountReceipts>
    <AccountPrizes>
        <AccountPrizesBack/>
        <AccountPrizesMain/>
    </AccountPrizes>

<!--    todo balls -->
<!--    todo my -->
<!--    todo marathon -->
<!--    todo bottom -->

    <PageFooter page="account">
        <PageFooterBack page="account"/>
        <PageFooterMain page="account"/>
    </PageFooter>
</template>

<script>
import PageHeader from '/src/components/PageHeader';
import PageHeaderBack from '/src/components/PageHeaderBack';
import PageHeaderMain from '/src/components/PageHeaderMain';
import PageHeaderMobile from '/src/components/PageHeaderMobile';
import AccountTop from '/src/components/AccountTop';
import AccountTopBack from '/src/components/AccountTopBack';
import AccountTopMain from '/src/components/AccountTopMain';
import AccountReceipts from '/src/components/AccountReceipts';
import AccountReceiptsMain from '/src/components/AccountReceiptsMain';
// todo PagePrizes?
import AccountPrizes from '/src/components/AccountPrizes';
import AccountPrizesBack from '/src/components/AccountPrizesBack';
import AccountPrizesMain from '/src/components/AccountPrizesMain';

import PageFooter from '/src/components/PageFooter';
import PageFooterBack from '/src/components/PageFooterBack';
import PageFooterMain from '/src/components/PageFooterMain';

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
        AccountReceipts,
        AccountReceiptsMain,

        AccountPrizes,
        AccountPrizesBack,
        AccountPrizesMain,

        PageFooter,
        PageFooterBack,
        PageFooterMain,
    },
};
</script>

<style scoped lang="scss">

</style>
