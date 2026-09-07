function solution(array, n) {
    var answer = 0;
    for(const i of array){
        if(i === n){
            answer ++;
        }
    }
    return answer;
}