export const authLogin = async (email, password) => {
    let result = '+';

    const data = new FormData();
    data.append('email', email);
    data.append('password', password);

    try {
        const response = await fetch('//berlingo.vue/ajax/auth_login.php', {method: 'POST', body: data});

        if (response.status === 200) {
            result = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return result;
};