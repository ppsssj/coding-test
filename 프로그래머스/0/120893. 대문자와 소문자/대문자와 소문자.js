function solution(my_string) {
    var answer = '';
    let arr = my_string.split("");
    
    for(let i = 0; i <= arr.length; i++){
       if('a' <= arr[i] && arr[i]<= 'z'){
           answer += arr[i].toUpperCase();
           console.log("소문자 -> 대문자", i)
       }
        else if('A' <= arr[i]&& arr[i]<= 'Z'){
            answer += arr[i].toLowerCase();
            console.log("대문자 -> 소문자", i)
        }
    }

    return answer;
}