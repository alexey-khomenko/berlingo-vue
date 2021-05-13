const test = [
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
    {
        date: '29.04.2021',
        nick: 'aleksei7676',
        phone: '+7 (***) *** 64 56',
    },
];

export const loadWinnersBike = async () => {
    let results = [];

    try {
        const response = await fetch('//berlingo.vue/ajax/winners_bike.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadWinnersPlaystation = async () => {
    let results = [];

    try {
        const response = await fetch('//berlingo.vue/ajax/winners_playstation.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadWinnersApplewatch = async () => {
    let results = [];

    try {
        const response = await fetch('//berlingo.vue/ajax/winners_applewatch.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadWinnersOkko = async () => {
    let results = test;

    try {
        const response = await fetch('//berlingo.vue/ajax/winners_okko.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadWinnersYandex = async () => {
    let results = test;

    try {
        const response = await fetch('//berlingo.vue/ajax/winners_yandex.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadWinnersLitres = async () => {
    let results = test;

    try {
        const response = await fetch('//berlingo.vue/ajax/winners_litres.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};

export const loadWinnersBox = async () => {
    let results = test;

    try {
        const response = await fetch('//berlingo.vue/ajax/winners_box.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};