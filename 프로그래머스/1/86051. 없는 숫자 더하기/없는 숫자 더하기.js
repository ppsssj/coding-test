function solution(numbers) {
    var answer = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9];
    
    for(const i of arr){
        let a = false;
        for(const j of numbers){
            if(j === i) {
                a = true;
                console.log(i, j);
            }
        }
        if(a === false)answer += i;
        
    }
    return answer;
}