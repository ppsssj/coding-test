function solution(s){
    var answer = true;

    let a = s.split("");
    let num1= 0;
    let num2 =0;
    for(const i of a){
        if('p' === i || 'P' === i){
            num1++;
        }
        else if('y' === i || 'Y' === i){
            num2++;
        }
    }
    if(num1 != num2) return false;

    return answer;
}