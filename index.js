const numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18];
let len = numbers.length;

for(let i = 0; i < len; i++){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i])     
    }
}

for(let i = 0; i < len; i++){
    if(numbers[i] % 2 != 0){
        console.log(numbers[i])     
    }
}