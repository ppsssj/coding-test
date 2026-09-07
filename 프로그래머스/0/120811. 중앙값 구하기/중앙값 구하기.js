function solution(array) {
    var answer = 0;
    let temp = 0;
    for(let i = 0; i < array.length-1; i++){
        for(let j = 1; j < array.length; j++)
        if(array[i] < array[j]){
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    console.log(array)
    let j = Math.floor(array.length / 2);
    answer = array[j]
    
    return answer;
}