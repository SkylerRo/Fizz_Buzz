for(let i =1; i <=100; i++) {
if (i % 3 == 0 && i % 5 == 0) {
console.log ("Fizz Buzz");

} else if (i % 3 == 0) {
console.log ("Fizz");

} else if (i % 5 == 0) {
console.log ("Buzz");

} else {
console.log (i)
}

}

for (let n = 5; n <= 10; n++) {
let isPrime = true;

for (let i = 2; i < n; i++) {
if (n % i == 0) {
    isPrime = false;
}

}

}

// part 3 

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26/n"


let currentCell = 1
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

for (let i = 0; i < csv.length; i++) {


   
 if (csv[i] === ","){

 currentcell++   

} else if (csv[i] === "\n") {

console.log(cell1,cell2,cell3,cell4);
currentCell = 1;
cell1 = '';
cell2 = '';
cell3 = '';
cell4 = '';

} else {
if (currentCell===1) {
    
}
}  

}
