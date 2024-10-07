function checkPrime(x){
    let count = 0;
    let len = x.length;

    for(let i = 0; i < len; i++){
        if(i % 2 == 0){
            count++;
        }
    }
    if(count == 2){
        return true;
    }
    else{
        return false;
    }
}


const numbers = [19,23,4,16,28,13,31,8,29,14,6,35,2,11,17,5,9,27,12,30];

let sum = 0
for(let i = 0; i < numbers.length; i++){
    if(checkPrime(i)){
        sum += numbers[i];    
    }
}
console.log(sum);