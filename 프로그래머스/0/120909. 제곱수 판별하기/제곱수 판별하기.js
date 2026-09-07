function solution(n) {
    var answer = 0;
    let i = 0;
    do{
        i++;
        if(n / i === i&&n % i === 0){
            answer = 1;
            break;
        }else{
            answer = 2;
        }
    }while(i<=n)
    
    return answer;
}