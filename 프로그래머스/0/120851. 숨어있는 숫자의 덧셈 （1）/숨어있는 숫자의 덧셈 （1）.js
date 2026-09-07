function solution(my_string) {
    var answer = 0;
    const arr = my_string.split("")

    for(const i of arr){
        if (i >= 0 && i <= 9) {
            answer += Number(i);
        }
    }
    return answer;
}