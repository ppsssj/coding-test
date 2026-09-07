function solution(sides) {
    var answer = 0;
    let max = 0;
    let index = 0;
    
    for(let i = 0; i < sides.length; i++){
        if(max<sides[i]){
            max = sides[i];
            index = i;
        }
    }

    sides.splice(index,1);
    console.log(index, sides)
    let a = 0;
    for(const i of sides){
        a +=i
    }
    console.log(max, a)
    if(a > max) answer = 1;
    else if(a <= max) answer = 2;
    
    return answer;
}