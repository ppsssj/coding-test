function solution(num_list) {
    var answer = [];

    let j = 1;
    for(const i of num_list){
        answer[num_list.length-j] = i;
        j++;
    }
    return answer;
}