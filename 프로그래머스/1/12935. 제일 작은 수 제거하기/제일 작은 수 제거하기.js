function solution(arr) {
    var answer = [];
    let min = arr[0];
    let ind = 0;
    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            ind = i
            console.log(i)
        }
    }
    console.log(ind);
    
    if(ind != 0){
        arr.splice(ind,1);
    }
    else if(ind === 0){
        arr.splice(ind,1);
        arr.push(-1);
    }
    
    
    
  
    console.log(arr)
    answer = arr
    return answer;
}