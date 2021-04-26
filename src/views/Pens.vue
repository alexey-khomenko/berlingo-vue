<template>
    <PageHeader page="pens">
        <PageHeaderMain page="index"/>
        <PageHeaderMobile page="index"/>
    </PageHeader>
</template>

<script>
import PageHeader from '/src/components/PageHeader.vue';
import PageHeaderMain from '/src/components/PageHeaderMain.vue';
import PageHeaderMobile from '/src/components/PageHeaderMobile.vue';


export default {
    name: 'Pens',
    components: {
        PageHeader,
        PageHeaderMain,
        PageHeaderMobile,
    },
};
</script>

<style scoped lang="scss">

</style>
