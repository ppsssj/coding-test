function solution(n) {
    var answer = 0;
    let num = String(n).split("");
    for(const i of num){
        answer += Number(i);
    }
    return answer;
}