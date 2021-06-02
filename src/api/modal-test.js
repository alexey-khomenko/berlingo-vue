export const getPens = async (answer) => {
    let results = [
        {
            link: '#',
            image: require('../assets/images/0_content-modal-pens.png'),
            title: 'Color Zone 1 0',
            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
        },
        {
            link: '#',
            image: require('../assets/images/0_content-modal-pens.png'),
            title: 'Color Zone 1 1',
            text: 'Эффектная шариковая ручка Berlingo Color Zone с клипом является частью ' +
                'одноименной яркой серии. Прорезиненное покрытие корпуса и утолщение в зоне захвата ' +
                'ручки обеспечивают высокий уровень комфорта при ее использовании.',
        },
    ];

    const data = new FormData();
    data.append('answer', answer);

    try {
        const response = await fetch('//berlingo.vue/ajax/retail_stores.php', {method: 'POST', body: data});

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};