<template>
    <PageHeader page="index">
        <PageHeaderBack page="index"/>
        <PageHeaderMain page="index"/>
        <PageHeaderMobile page="index"/>
    </PageHeader>
    <IndexTop>
        <IndexTopBack/>
        <IndexTopMain/>
    </IndexTop>
    <!--
        IndexStages
    -->
    <PagePrizes page="index">
        <PagePrizesBack page="index"/>
        <PagePrizesMain page="index"/>
    </PagePrizes>
    <!--
        IndexPrize
        IndexShops
    -->
    <PageBottom page="index">
        <PageBottomBack page="index"/>
        <PageBottomMain page="index">
            <template #title>Победители акции</template>
            <div class="element element_button">
                <PageButton type="link" to="/winners" color="red">
                    <span>Смотреть</span>
                </PageButton>
            </div>
        </PageBottomMain>
    </PageBottom>
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
import IndexTop from '/src/components/IndexTop';
import IndexTopBack from '/src/components/IndexTopBack';
import IndexTopMain from '/src/components/IndexTopMain';

import PagePrizes from '/src/components/PagePrizes';
import PagePrizesBack from '/src/components/PagePrizesBack';
import PagePrizesMain from '/src/components/PagePrizesMain';

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
        IndexTopBack,
        IndexTopMain,

        PagePrizes,
        PagePrizesBack,
        PagePrizesMain,

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