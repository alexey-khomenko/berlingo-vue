export const loadReceipts = async () => {
    let results = [
        {
            type: 'accepted',
            status: 'Принят',
            image: require('../assets/images/0_content-account-receipt.png'),
            city: 'Москва',
            date: '30.04.2021',
        },
        {
            type: 'accepted',
            status: 'Принят',
            image: require('../assets/images/0_content-account-receipt.png'),
            city: 'Санкт-Петербург',
            date: '31.04.2021',
        },
        {
            type: 'error',
            status: 'Не соответствует правилам акции',
            image: require('../assets/images/0_content-account-receipt.png'),
            city: 'Санкт-Петербург',
            date: '31.04.2021',
        },
        {
            type: 'processing',
            status: 'На модерации',
            image: require('../assets/images/0_content-account-receipt.png'),
            city: 'Москва',
            date: '01.05.2021',
        },
        {
            type: 'processing',
            status: 'На модерации',
            image: require('../assets/images/0_content-account-receipt.png'),
            city: 'Москва',
            date: '01.05.2021',
        },
        {
            type: 'processing',
            status: 'На модерации',
            image: require('../assets/images/0_content-account-receipt.png'),
            city: 'Москва',
            date: '01.05.2021',
        },
    ];

    try {
        const response = await fetch('//berlingo.vue/ajax/user_receipts.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};