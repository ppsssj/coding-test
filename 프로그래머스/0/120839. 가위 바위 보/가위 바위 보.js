function solution(rsp) {
    var answer = '';
    let a = "2";
    let b = "0";
    let c = "5";
    
    let arr = [];
    arr = rsp.split("")
    for(const i of arr){
        if(i === a){
        answer += b;
    }
    else if(i === b){
        answer += c;
    }
    else if(i === c){
        answer += a;
    }
    }
    
    
    return answer;
}