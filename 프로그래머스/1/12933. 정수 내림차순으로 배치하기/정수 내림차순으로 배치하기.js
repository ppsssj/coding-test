function solution(n) {
    var answer = 0;
    let arr = String(n).split("").map(n => Number(n));
    arr.sort((a,b) => b-a);
 
    answer = Number(arr.join(""));
    return answer;
}