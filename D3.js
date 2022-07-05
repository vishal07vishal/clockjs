console.log("working")

//Arithmatic operators-
//1.Addition
//2.Substraction
//3.Multiply
//4.Division-Quotient
//5.Modulus-Reminder

console.log(2+3);//5
console.log(2-3);//-1
console.log(2*3);//6
console.log(2/3);//0.66666666
console.log(2%3);//2

console.log("Hi"+"Shyam");//HiShyam//Constration of string
console.log("Hi"-"Shyam");//Nan//Hi Shyam
console.log("Hi"*"Shyam");//Nan//
console.log("Hi"/"Shyam");//Nan//
console.log("Hi"%"Shyam");//Nan//
//No arithmatic operation are possible for the string except addition which basically is concentration.


//compariosonoperators
//==,===,!=,!==,>,<,>=,<=

console.log(2>3);//false
console.log(2<3);//true
console.log(2<=3);//true if any one of the condition is met then it will be true
console.log(2>=3);//false- if no condition met. hence flse
console.log(2==3);//false
console.log(2!=3);//true

console.log(2=='2');//true check only values
console.log(2==='2');//false - check both value and type of data

console.log("Hi"=="Hi");//true
console.log("Hi"==="Hi");

console.log(typeof("hi"));//string


//Bitwise operator
//Bitwise And - a&b
//Bitwise OR - a/b
//Bitwise XOR - a^b
//Bitwise NOT - ~a
//Left Shift - a << b
//Sign propagatting Right Shift - a >> b
//xero fill Right shift - a >>> b

//o/p type - true/false
console.log(2&3);//2
console.log(2|3);//3
console.log(2^3);//1
console.log(~2);//-3
console.log(~12);//-13 //for negative value will -




console.log(8>>3);//1
console.log(5<<3);//40
console.log(17>>>3);//2

//Increment and Decrement operator


//prefix and postfix operator(++a)
//pre - before and post is after(a++)

let a = 2;
//a = a++;//a+1//increment the value of a with 1;

//a = a++;
console.log(a++);//2++//2+1//3
console.log(a);//3
console.log(++a);//4prefix first executes the operation (add /substract) and then execute the statement

let b = 3;
console.log(b--);//3
console.log(b);//2
console.log(++b);//3
console.log(b);//3

let c = 2;
let d = 3;
console.log(c++ + ++d);//2+4//6
console.log(c,d);


//Logical operators

//&&(AND) , ||(OR) , !(NOT)

let f = 3;
let g = 2;
console.log(f&&g);//2 the first variable is non zero/true then second variable is output
//................. //if the first variable ia zero the second variable will naver be checked and o/p will be 0.


 console.log(f || g);//3 if the variable is zero/false, the the second variable will be checked and o/p will be second variable.
 
 
 console.log(!(f>0));//false
 console.log(!f);//boolean values i.e. either true or false only
 //a number which is non zero is considered as true ny default and negation on true is suppose to give a false
 //negation is always going to give u values  in true/false.



 //ternary operator

 let h =1;

 h < 1 ? console.log("statement is true") : console.log("statement is false");//ststement is true

 h != 1 ? console.log(++h) : console.log(h++);//1
console.log(h++);//2  /2++//2+1//h=3
console.log(++h);//4    /3++//3+1//4

//comma operator

let x = 1;
x = (x++,x);
console.log(x);//2





