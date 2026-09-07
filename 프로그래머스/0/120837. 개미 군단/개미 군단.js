function solution(hp) {
    var answer = 0;
    const a = 5;
    const b = 3;
    const c = 1;
    answer = Math.floor(answer + hp/a);
    hp = hp % a;
    
    answer = Math.floor(answer + hp/b);
    hp = hp % b;
    
    answer = Math.floor(answer + hp/c);
  
    
    return answer;
}