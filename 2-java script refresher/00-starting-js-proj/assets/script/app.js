// // import {apiKey} from "./utils";
// // import apiKey from "./utils";
// // import { apiKey, adc  } from  "./utils";
// // console.log(apiKey);
// // console.log(adc);
// import * as util from "./utils";// {* as} used group all element in one object
// console.log(util);
// console.log(util.adc);
// import { great, goat as gooat  } from  "./utils";// in this as can be used as assigned new allias
// console.log(gooat);
//----------------------------Revisiting Functions & Parameters---------------------------------
// function greet(){
//     console.log("hello.com")
// };
//  greet()
// function greet(userName,message= "Hello!!"){
//     console.log("userName: ",userName);
//     console.log("message: ",message)
// };
//  greet("Murtaza");
//  greet("Max","Hello,Whatsup?");
// function createGreeting(userName,message= "Hello!!"){
//     return "Hi, I am " + userName + "." + message;
// };
// // console.log(createGreeting("Max"));
// // instead we  use const
// const greating1 = createGreeting("Max");
// const greating2 = createGreeting("Murtaza","Hello,Whatsup?");
// console.log(greating1);
// console.log(greating2);
// basic js Exercise: Working with Functions Your task is to write a new function that should be named combine and have the following characteristics: Accept three input values Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values) Return the calculated result
// function combine (a,b,c) {
//     let result = a * b / c;
//     return result;
// }
// console.log(combine(2,2,2))
//-----------------------20. Arrow Functions : a functions that doesnt need name 
// let arrowFunc=(userName,message) =>{
//      console.log("hello.com");
//      return "Hi, I am " + userName + "& Message is" + message;

// };
// let Naam = prompt("enter your name");
// let sms = prompt("enter your message");
// let text1= arrowFunc("murtaza","how are you");
// console.log(text1);
//-----------------------------------------------22. Revisiting Objects & Classes
// const user={
//      name :'murtaza',
//      age: 12,//object can also stores function in which it dont required fumction keyword
//      class(classs){
//           console.log("12th");
//           return classs;
//      }

// };
// console.log(user.name);
// user.class(22);
// console.log(user.class(23));
//With the class keyword,you can create a blueprint that can then later be used to create the actual objects.
// class User{
//      constructor(name, age){
//           this.name=name;;
//           this.age=age;

//      }
//      greer(){
//           console.log("hi");
//      }
// }
// const user1=new User("murtaz",20);
// console.log(user1);
//--------------23. Arrays & Array Methods like map() map is ussed mainly for react
// const hobbies = ["Sports", "Cooking","sleeping"];
// console.log(hobbies);
// hobbies.push("singing");
// console.log(hobbies);
// hobbies.pop();
// console.log(hobbies);
// const index = hobbies.findIndex((item)=>item === "sleeping");
// console.log(index);
// //map: it s to transform any item to other kind of item
// const newHobbies = hobbies.map((ite)=>ite + " fav");
// console.log(newHobbies);
// const obbHobbies = hobbies.map((ite)=>({text : ite}));
// console.log(obbHobbies);
//----------------------24. Destructuring arrays and object
// const userName=["RAJ","KUNDAN"];//WE WANNA WORK WITH BITH FIRST AND LAST NAME 
// const firstName = userName[0];
// const lastName = userName[1]; // this can be shortened by
//instead fo using this code here we can create this two constant or variable in single step BY ADDIN [] OF THE LEFT SIDE OF EQUAL SIGN , ON THE RIGHT SIDE THEY  WILL CREATE ARRAY WHICH SIMPLY MEANS THAT THIS SYNTAX CAN BE USED TO PULL VALUES OUT OF THIS ARRAY
// const [firstName,lastName  ]=["RAJ","KUNDAN"];
// console.log(firstName);
// console.log(lastName);
// // THIS DESTRUCTURING ALSO EXIST FOR ARRAY SO WE CAN ALSO USE IT FOR OBJECT NOT ONLY FOR ARRAY 
// const {name:userName,age}={
//     name:"murtaza",
//     age:20,
// };
// // const name=user.name;
// // const age=user.age; this can be shortened here by 
// //writing {} on right side  of equal a sign


// console.log(userName);
// console.log(age);
//----------------------26. The Spread Operator-->'...' 
// const hobbies = ["Sports", "Cooking","sleeping"];//for ex we have to emerge this hobbies list withnother hobies list 
// const user={
//     name:"murtaza",
//     age:20,
// };
// const newHobbies=["Reading"];
// // const mergedHobbies=[hobbies,newHobbies]; if i had done it like this it will form two array 
// // console.log(mergedHobbies);
// const mergedHobbies=[...hobbies,...newHobbies];
// console.log(mergedHobbies); //it can be also used in object
// const extendedUser = {
//     class: 12+"th",
//     subject: 'CSE',
// //  ...user,
// };  //console.log(extendedUser);
// const mergedUser = {...user,...extendedUser};
// console.log(mergedUser);
//--------------------------27. Revisiting Control Structures
// const password=prompt("enter your password");

// if(password==="Hello"){
//     console.log("Hello works");
// }
// else if(password==="hello"){
//     console.log("hello works");   
// }
// else{
//     console.log("wrong password");
// }
// const hobbies = ["Sports", "Cooking","sleeping"];
// for(const hobby of hobbies){
//     console.log(hobby);
// }

//-----------------------------------------------29. Using Functions as Values-->WE CAN USE FUNCTION AS VALUE TO OTHER FUNCTION
// function handleTimeout(){
//     console.log("Timed out....");
// }
// const handleTimeout2=()=>{
//     console.log("Timed out.... again");
// }
// setTimeout(handleTimeout,2000);
// setTimeout(handleTimeout2,3000);
// setTimeout(()=>{
//     console.log("more Timed Out");
// },4000);
// // it can also done for another function not only for  buil-in function
// function greater(great){// it done to all function which accept function as input
//     great();
// }
// greater(()=>{console.log("Welcome User  ")});
//-------30. Defining Functions Inside Of Functions -->mainly for react 
// function init(){
//     function greet(){
//         console.log("hello User!");
    
//     }
//     greet();

// }// in this greet function in=s only availble at inside of function and cannot called outside of  init function so that it can executed inside of init not outside of init
// //here we can exute init because inite is scopped in overall file and it is not nested in another function
// init();
//---- last crucial concept for react 31. Reference vs Primitive Values
