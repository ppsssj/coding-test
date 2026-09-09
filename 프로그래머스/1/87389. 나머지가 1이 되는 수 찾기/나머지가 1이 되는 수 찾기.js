function solution(n) {
    var answer = 0;
    let i = 0;
    do{
        if(n % i === 1) break;
        i++;
    }while(i <= n);
    answer = i;
    return answer;
}