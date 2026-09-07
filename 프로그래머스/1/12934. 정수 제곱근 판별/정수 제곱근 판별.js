function solution(n) {
    var answer = 0;
    let i = 0;
    do{
        let j = n / i ;
        if(i === j && n % i === 0){
            break;
        }
        i++;
        if(i > n) return -1
        
    }while(i <= n);
    
    answer = (i + 1) * (i + 1);
    
    return answer;
}