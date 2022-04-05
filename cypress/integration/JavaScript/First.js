

// var general;
// console.log(general);
// general=6;
// console.log(typeof general);
// general = 'hi';
// console.log(typeof general);
// general = 5.333;
// console.log(typeof general);
// general = true;
// console.log(typeof general);

//const { object, func } = require("assert-plus")


// var s1 = 10;
// var s2 = 9;

// if(s1 == s2)
// {
//     console.log("this is equal")
// }
// else if (s1 != s2)
//  {
//     console.log('this is not equal')
// } 
// else
// {
//     console.log('this is s1 more than s2')
// }


////switch statement wiht break
//var weight = parseFloat(prompt('enter the weight'))
// switch(weight)
// {
//     case 1 : document.write("weight is 1");
//                    break;
//     case 2 : document.write("weight is 2");
//                    break;
//     case 3 : document.write("weight is 3");
//                    //break;
//     case 4 : document.write("weight is 4");
// }

////////while loop
// var i =10;

// while(i<12){
//     console.log(i);
//     i++;
// }

// do
// { 
//     console.log(i)
// }while(i<12)


//////functions

// function addNumber(a,b,c)
// {
//     console.log('funciton is added now');
//     return a+b+c;
// }
// console.log(addNumber(2,3,4))
// console.log(addNumber(4,5,6))

//////////anonymous function
// function addNumber(a,b,c)
// {
//     console.log('funciton is added now');
//     return a+b+c;
// }
// var anon = function(a,b,c)
// {
//     console.log('anonamous fun is called');
//     return a+b+c;
// }
// console.log(anon(3+3+3));
// console.log(addNumber(4+3+3));



//////////self invoking function
// (function(a,b){
//     console.log("self invoking function called");
//     return a+b;

// })(21+3)


///////////obhect creation
// function madhanMohan(){
//     var person = new object();
//     person.name = "madhan";
//     person.mn=9550099259;

// }

// var madhan = madhanMohan();
// alert("this is madhan")

///////////object creation wiht constructor
// function Person(){
//     this.name = "madhan";
//     this.mn = 9550099259;
// }
// var person = new Person();
// console.log(person)




// function windowOpen(){
//     var newWindow = window.open("http://www.google.com","newWindow","height=1000,width=1000");
//     newWindow.moveTo(150,200);


// }
// windowOpen();
// //newWindow.close();