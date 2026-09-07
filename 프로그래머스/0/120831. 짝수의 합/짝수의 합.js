function solution(n) {
    var answer = 0;
    do{
        if(n % 2 == 0){
            answer += n;
            
        }
        n--;
    }while(n > 0)
    return answer;
}