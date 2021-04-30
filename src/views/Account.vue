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
    <PagePrizes page="account">
        <PagePrizesBack page="account"/>
        <PagePrizesMain page="account"/>
    </PagePrizes>
    <AccountBalls>
        <AccountBallsBack/>
        <AccountBallsMain/>
    </AccountBalls>
    <AccountMy>
        <AccountMyMain/>
    </AccountMy>
    <AccountMarathon>
        <AccountMarathonBack/>
        <AccountMarathonMain/>
    </AccountMarathon>
    <PageBottom page="account">
        <PageBottomBack page="account"/>
        <PageBottomMain page="account">
            <template #title>Пройди тест и определи свою идеальную ручку</template>
            <div class="element element_button" data-modal-open="test_1">
                <div class="element_button__md">
                    <PageButton type="button" color="red">
                        <span>Найди свою идеальную ручку</span>
                    </PageButton>
                </div>
                <div class="element_button__sm">
                    <PageButton type="button" color="red">
                        <span>Смотреть</span>
                    </PageButton>
                </div>
            </div>
        </PageBottomMain>
    </PageBottom>
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
import PagePrizes from '/src/components/PagePrizes';
import PagePrizesBack from '/src/components/PagePrizesBack';
import PagePrizesMain from '/src/components/PagePrizesMain';
import AccountBalls from '/src/components/AccountBalls';
import AccountBallsBack from '/src/components/AccountBallsBack';
import AccountBallsMain from '/src/components/AccountBallsMain';
import AccountMy from '/src/components/AccountMy';
import AccountMyMain from '/src/components/AccountMyMain';
import AccountMarathon from '/src/components/AccountMarathon';
import AccountMarathonBack from '/src/components/AccountMarathonBack';
import AccountMarathonMain from '/src/components/AccountMarathonMain';
import PageBottom from '/src/components/PageBottom';
import PageBottomBack from '/src/components/PageBottomBack';
import PageBottomMain from '/src/components/PageBottomMain';
import PageFooter from '/src/components/PageFooter';
import PageFooterBack from '/src/components/PageFooterBack';
import PageFooterMain from '/src/components/PageFooterMain';
import PageButton from '/src/components/PageButton';

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
        PagePrizes,
        PagePrizesBack,
        PagePrizesMain,
        AccountBalls,
        AccountBallsBack,
        AccountBallsMain,
        AccountMy,
        AccountMyMain,
        AccountMarathon,
        AccountMarathonBack,
        AccountMarathonMain,
        PageBottom,
        PageBottomBack,
        PageBottomMain,
        PageFooter,
        PageFooterBack,
        PageFooterMain,
        PageButton,
    },
};
</script>