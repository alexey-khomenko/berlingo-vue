<template>
    <page-header page="index">
        <page-header-back page="index"/>
        <page-header-main page="index"/>
        <page-header-mobile page="index"/>
    </page-header>
    <index-top/>
    <index-stages/>
    <page-prizes page="index">
        <page-prizes-back page="index"/>
        <page-prizes-main page="index"/>
    </page-prizes>
    <index-prize/>
    <index-shops/>
    <page-bottom page="index">
        <page-bottom-back page="index"/>
        <page-bottom-main page="index">
            <template #title>Победители акции</template>
            <div class="element element_button">
                <page-button type="link" to="/winners" color="red">
                    <span>Смотреть</span>
                </page-button>
            </div>
        </page-bottom-main>
    </page-bottom>
    <page-footer page="index">
        <page-footer-back page="index"/>
        <page-footer-main page="index"/>
    </page-footer>
</template>

<script>
import PageHeader from '/src/components/PageHeader';
import PageHeaderBack from '/src/components/PageHeaderBack';
import PageHeaderMain from '/src/components/PageHeaderMain';
import PageHeaderMobile from '/src/components/PageHeaderMobile';
import IndexTop from '/src/components/IndexTop';
import IndexStages from '/src/components/IndexStages';
import PagePrizes from '/src/components/PagePrizes';
import PagePrizesBack from '/src/components/PagePrizesBack';
import PagePrizesMain from '/src/components/PagePrizesMain';
import IndexPrize from '/src/components/IndexPrize';
import IndexShops from '/src/components/IndexShops';
import PageBottom from '/src/components/PageBottom';
import PageBottomBack from '/src/components/PageBottomBack';
import PageBottomMain from '/src/components/PageBottomMain';
import PageFooter from '/src/components/PageFooter';
import PageFooterBack from '/src/components/PageFooterBack';
import PageFooterMain from '/src/components/PageFooterMain';
import PageButton from '/src/components/PageButton';

export default {
    name: 'Index',
    components: {
        PageHeader,
        PageHeaderBack,
        PageHeaderMain,
        PageHeaderMobile,
        IndexTop,
        IndexStages,
        PagePrizes,
        PagePrizesBack,
        PagePrizesMain,
        IndexPrize,
        IndexShops,
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