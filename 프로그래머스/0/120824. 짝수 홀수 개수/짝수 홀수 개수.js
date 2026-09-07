function solution(num_list) {
    var answer = [];
    let a = 0;
    let b = 0;
    for(const i of num_list){
        if(i % 2 === 1){
            b++;
        }
        else{
            a++;
        }
            
    }
    answer.push(a,b);
    return answer;
}