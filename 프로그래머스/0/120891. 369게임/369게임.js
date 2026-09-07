function solution(order) {
    var answer = 0;
    let arr = [];
    
    arr = String(order).split("")
    for(const i of arr){
        if(i === "3" || i === "6" || i === "9")answer++;
    }
    return answer;
}