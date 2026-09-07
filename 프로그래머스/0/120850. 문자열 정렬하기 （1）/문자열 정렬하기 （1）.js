function solution(my_string) {
    var answer = [];
    let arr = [];
    arr = my_string.split("");
    
    for(const i of arr){
        if("a" <= i && i<= "z" ){
            
        }
        else if( "A" <= i && i <= "Z"){
            
        }
        else{
            answer.push(Number(i));
        }
    }
    
    let temp = -1;
    
    for(let i = 0; i < answer.length; i++){
        for(let j = i+1 ; j < answer.length; j++){
            if(answer[i] > answer[j]){
                temp = answer[i];
                answer[i] = answer[j];
                answer[j] = temp;
            }
        }
    }
    
    console.log(arr)
    
    return answer;
}