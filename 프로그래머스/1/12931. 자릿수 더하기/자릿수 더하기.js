function solution(n)
{
    var answer = 0;
    
    let arr = (String(n).split(""));
    for(const i of arr){
            answer += Number(i);
    }


    return answer;
}