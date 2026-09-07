function solution(str1, str2) {
    var answer = 0;
    let arr1 = str1.split("");
    
    if(str1.includes(str2)){
        answer = 1;
    }
    else{
        answer  = 2;
    }
    return answer;
}