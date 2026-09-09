function solution(x) {
    var answer = true;
    
    let num = String(x).split("").map(x => Number(x));
    let a = 0;
    for(const i of num){
        a += i;
    }
    
    if(x % a === 0){
        answer = true;
    }else{
        answer = false;
    }
    
    return answer;
}