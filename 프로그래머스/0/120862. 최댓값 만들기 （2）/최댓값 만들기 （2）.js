function solution(numbers) {
let answer = -Infinity;
    
    let arr = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            arr.push(numbers[i] * numbers[j]);
        }
    }
    console.log(arr)
    for(const j of arr){
        if(answer < j){
            answer = j
        }
    }
    
    return answer;
}