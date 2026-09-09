function solution(phone_number) {
    var answer = '';
    
    let num = phone_number.split("");
    
    for(let i = 0; i < num.length-4; i++){
        num.splice(i, 1, "*");
    }
    answer = num.join('');
    return answer;
}