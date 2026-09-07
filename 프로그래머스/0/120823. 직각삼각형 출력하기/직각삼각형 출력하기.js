const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let i = 0;
    do{
        for(let j = 0; j <= i; j++){
            process.stdout.write("*");

        }
        i++;
      console.log();
    }while(input[0]>i)
});
