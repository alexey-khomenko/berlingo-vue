export const sendReceipt = async (shop, file) => {
    const data = new FormData();
    data.append('shop', shop);
    data.append('file', file);

    try {
        await fetch('//berlingo.vue/ajax/modal_receipt.php', {method: 'POST', body: data});
    }
    catch (e) {
        console.log(e);
    }
};