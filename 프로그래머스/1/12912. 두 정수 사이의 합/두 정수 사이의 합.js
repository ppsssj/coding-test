function solution(a, b) {
    var answer = 0;
    let arr = [];
    let temp = -1;
    if(a > b){
        temp = a;
        a = b;
        b = temp;
    }
    
    do{
        answer += a;
        a++
    }while(a<=b);
    
    return answer;
}