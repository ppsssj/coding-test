function solution(slice, n) {
    var answer = 0;
    let i = 0;

    do {
        answer++;
        i = (slice * answer) / n;
    } while (i < 1);

    return answer;
}