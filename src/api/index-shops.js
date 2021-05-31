export const loadRetails = async (city) => {
    let results = [
        {
            title: 'Гипермаркет «Анвар»',
            address: 'г. Актобе, ул. Нокина, д. 35',
            link: '#',
        },
        {
            title: '«Мега Анвар»',
            address: 'г. Актобе, ул. Маметова, д. 4',
            link: '#',
        },
        {
            title: '«Школьник»',
            address: 'г. Алексин, ул. Мира, д. 18',
            link: '#',
        },
        {
            title: '«Книги»',
            address: 'г. Алексин, ул. Мира, д. 18/11',
            link: '#',
        },
        {
            title: '«Арт-Изо»',
            address: 'г. Архангельск, пер. Троицкий, д.18',
            link: '#',
        },
        {
            title: '«Арт-Изо»',
            address: 'г. Архангельск, пер. Троицкий, д.18',
            link: '#',
        },
        {
            title: 'Гипермаркет «Анвар»',
            address: 'г. Актобе, ул. Нокина, д. 35',
            link: '#',
        },
        {
            title: '«Мега Анвар»',
            address: 'г. Актобе, ул. Маметова, д. 4',
            link: '#',
        },
        {
            title: '«Школьник»',
            address: 'г. Алексин, ул. Мира, д. 18',
            link: '#',
        },
        {
            title: '«Книги»',
            address: 'г. Алексин, ул. Мира, д. 18/11',
            link: '#',
        },
        {
            title: '«Арт-Изо»',
            address: 'г. Архангельск, пер. Троицкий, д.18',
            link: '#',
        },
        {
            title: '«Арт-Изо»',
            address: 'г. Архангельск, пер. Троицкий, д.18',
            link: '#',
        },
        {
            title: 'Гипермаркет «Анвар»',
            address: 'г. Актобе, ул. Нокина, д. 35',
            link: '#',
        },
        {
            title: '«Мега Анвар»',
            address: 'г. Актобе, ул. Маметова, д. 4',
            link: '#',
        },
        {
            title: '«Школьник»',
            address: 'г. Алексин, ул. Мира, д. 18',
            link: '#',
        },
        {
            title: '«Книги»',
            address: 'г. Алексин, ул. Мира, д. 18/11',
            link: '#',
        },
        {
            title: '«Арт-Изо»',
            address: 'г. Архангельск, пер. Троицкий, д.18',
            link: '#',
        },
        {
            title: '«Арт-Изо»',
            address: 'г. Архангельск, пер. Троицкий, д.18',
            link: '#',
        },
    ];

    const data = new FormData();
    data.append('city', city);

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

export const loadCities = async () => {
    let results = [
        'Абаза',
        'Абакан',
        'Абдулино',
        'Абинск',
        'Агидель',
        'Агрыз',
        'Адыгейск',
        'Азнакаево',
        'Азов',
        'Ак-Довурак',
        'Аксай',
        'Алагир',
        'Алапаевск',
        'Алатырь',
        'Алдан',
        'Алейск',
        'Александров',
        'Александровск',
        'Александровск-Сахалинский',
        'Алексеевка',
    ];

    try {
        const response = await fetch('//berlingo.vue/ajax/retail_cities.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadPrimaries = async () => {
    let results = [
        {
            link: '#',
            photo: '0_content-index-shops-large-1.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-large-2.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-large-3.png',
        },
    ];

    try {
        const response = await fetch('//berlingo.vue/ajax/retail_primaries.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadSecondaries = async () => {
    let results = [
        {
            link: '#',
            photo: '0_content-index-shops-small-1.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-2.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-3.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-1.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-2.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-3.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-1.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-2.png',
        },
        {
            link: '#',
            photo: '0_content-index-shops-small-3.png',
        },
    ];

    try {
        const response = await fetch('//berlingo.vue/ajax/retail_secondaries.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadFederals = async () => {
    let results = [
        '0_content-index-shops-small-4.png',
        '0_content-index-shops-small-5.png',
        '0_content-index-shops-small-6.png',
        '0_content-index-shops-small-4.png',
        '0_content-index-shops-small-5.png',
        '0_content-index-shops-small-6.png',
        '0_content-index-shops-small-4.png',
        '0_content-index-shops-small-5.png',
        '0_content-index-shops-small-6.png',
        '0_content-index-shops-small-4.png',
        '0_content-index-shops-small-5.png',
        '0_content-index-shops-small-6.png',
        '0_content-index-shops-small-4.png',
    ];

    try {
        const response = await fetch('//berlingo.vue/ajax/retail_federals.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};