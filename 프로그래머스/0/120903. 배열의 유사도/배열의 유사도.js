function solution(s1, s2) {
    var answer = 0;
    for(const i of s1){
        for(const j of s2){
            if(i === j){
                answer++;
            }
        }
    }
    return answer;
}