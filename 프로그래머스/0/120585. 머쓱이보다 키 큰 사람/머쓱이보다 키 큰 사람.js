function solution(array, height) {
    var answer = 0;
    let temp = 0;
    for(let i = 0; i < array.length; i++){
            if(array[i+1] < array[i]){
                temp = array[i];
                array[i] = array[i+1]
                array[i+1] = temp;
            }
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] > height) {
            answer ++;
        }
    }
    return answer;
}