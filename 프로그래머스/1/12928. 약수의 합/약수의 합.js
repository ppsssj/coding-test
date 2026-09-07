function solution(n) {
    var answer = 0;
    let i = 0;
    do{
        if(n % i === 0){
            answer += i
        }
        i++
    }while(i <= n)
    
    return answer;
}