function solution(numbers) {
    let max1 = 0;
    let max2 = 0;
    let index = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (max1 < numbers[i]) {
            max1 = numbers[i];
            index = i;
        }
    }

    numbers.splice(index, 1);

    for (const i of numbers) {
        if (max2 < i) {
            max2 = i;
        }
    }

    return max1 * max2;
}