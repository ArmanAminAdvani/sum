
var a= 15;   // 16 ,  17 

var value= a++ + ++a - --a

// var value= 15  +  17 -  16 

// var value= 16

console.log(value)


var a = 15 ; // 16  +   17  -  16   +  16   +   15 - 15 - 15  - 15

var value1 =  ++a  +  ++a  -  --a  +  a--  +    a  - a  - a++ - --a;

// var value = 16  +   17  -  16   +  16   +    15 - 15 - 15  - 15

// var value =  3


console.log(value1)