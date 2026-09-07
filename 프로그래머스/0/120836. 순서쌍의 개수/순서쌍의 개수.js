function solution(n) {
    var answer = 0;
    let i = 1;
    do{
        if(n % i == 0){
            ++answer;
            console.log(i, answer)
        }
        i++;
    }while(i <= n)

    return answer;
}