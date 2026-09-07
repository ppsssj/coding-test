function solution(numbers, num1, num2) {
    var answer = [];
    let j = 0;
    for(const i of numbers){
        
        if(j >= num1 && j <= num2){
            answer.push(i);
        }
        j++;
    }
    return answer;
}