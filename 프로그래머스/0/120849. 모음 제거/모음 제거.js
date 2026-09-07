function solution(my_string) {
    let answer = '';
    const arr = ['a', 'e', 'i', 'o', 'u'];

    for (const i of my_string) {
        if (!arr.includes(i)) {
            answer += i;
        }
    }

    return answer;
}