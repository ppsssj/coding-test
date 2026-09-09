function solution(arr) {
    var answer = 0;
    
    for(const i of arr){
        answer += i;
    }
    
    answer /= arr.length;
    
    return answer;
}