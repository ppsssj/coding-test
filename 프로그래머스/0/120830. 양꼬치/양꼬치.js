function solution(n, k) {
    var answer = 0;
    const food = 12000;
    const water = 2000;
    
    let i = n / 10;
    k -= Math.floor(i);
    
    n *= food;
    k *= water;
    answer = n + k;
    
    return answer;
}