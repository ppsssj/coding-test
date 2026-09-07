function solution(n) {
    var answer = [];
    answer = String(n).split("").reverse().map(n => Number(n));

    return answer;
}