<template>
    <page-header page="account" :class="{open: menuOpen}">
        <page-header-back page="account"/>
        <page-header-main page="account" @menu-open="menuOpen = true"/>
        <page-header-mobile page="account" @menu-close="menuOpen = false"/>
    </page-header>
    <account-top/>
    <account-receipts/>
    <page-prizes page="account">
        <page-prizes-back page="account"/>
        <page-prizes-main page="account"/>
    </page-prizes>
    <account-balls/>
    <account-my/>
    <account-marathon/>
    <page-bottom page="account">
        <page-bottom-back page="account"/>
        <page-bottom-main page="account">
            <template #title>Пройди тест и определи свою идеальную ручку</template>
            <div class="element element_button" data-modal-open="test_1">
                <div class="element_button__md">
                    <page-button type="button" color="red">
                        <span>Найди свою идеальную ручку</span>
                    </page-button>
                </div>
                <div class="element_button__sm">
                    <page-button type="button" color="red">
                        <span>Смотреть</span>
                    </page-button>
                </div>
            </div>
        </page-bottom-main>
    </page-bottom>
    <page-footer page="account">
        <page-footer-back page="account"/>
        <page-footer-main page="account"/>
    </page-footer>
</template>

<script>
import PageHeader from '/src/components/PageHeader';
import PageHeaderBack from '/src/components/PageHeaderBack';
import PageHeaderMain from '/src/components/PageHeaderMain';
import PageHeaderMobile from '/src/components/PageHeaderMobile';
import AccountTop from '/src/components/AccountTop';
import AccountReceipts from '/src/components/AccountReceipts';
import PagePrizes from '/src/components/PagePrizes';
import PagePrizesBack from '/src/components/PagePrizesBack';
import PagePrizesMain from '/src/components/PagePrizesMain';
import AccountBalls from '/src/components/AccountBalls';
import AccountMy from '/src/components/AccountMy';
import AccountMarathon from '/src/components/AccountMarathon';
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
        AccountReceipts,
        PagePrizes,
        PagePrizesBack,
        PagePrizesMain,
        AccountBalls,
        AccountMy,
        AccountMarathon,
        PageBottom,
        PageBottomBack,
        PageBottomMain,
        PageFooter,
        PageFooterBack,
        PageFooterMain,
        PageButton,
    },
    data() {
        return {
            menuOpen: false,
        };
    },
};
</script>