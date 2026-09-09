function solution(arr, divisor) {
    var answer = [];
    let a = false;
    for(const i of arr){
        if( i % divisor === 0){
            answer.push(i);
            a = true
        }
    }
    if(a === false) answer.push(-1);
    answer.sort((a,b) => a-b);
    
    return answer;
}