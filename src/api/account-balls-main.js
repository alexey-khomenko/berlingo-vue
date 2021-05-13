export const loadBalls = async () => {
    let results = 260;

    try {
        const response = await fetch('//berlingo.vue/ajax/user_balls.php');

        if (response.status === 200) {
            results = await response.json();
        }
    }
    catch (e) {
        console.log(e);
    }

    return results;
};