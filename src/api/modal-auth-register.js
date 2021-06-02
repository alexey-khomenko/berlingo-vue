export const authRegister = async (email, phone, password, city) => {
    const data = new FormData();
    data.append('email', email);
    data.append('phone', phone);
    data.append('password', password);
    data.append('city', city);

    try {
        await fetch('//berlingo.vue/ajax/auth_register.php', {method: 'POST', body: data});
    }
    catch (e) {
        console.log(e);
    }
};