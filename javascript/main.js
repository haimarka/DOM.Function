//1.1
// const element = document.getElementById("first");
//1.2
// const classa = document.getElementsByClassName("second");
//1.3
// console.log(element.innerText);
//1.4
// const button1 = document.getElementById("buttonClick");
// const input1 = document.getElementById("inputClick");
// button1.addEventListener("click", function(){
//     console.log(input1.value);
// })
//1.5
// const button1 = document.getElementById("buttonClick");
// button1.addEventListener("click", function(){
    
// })


//1

// const button = document.getElementById("buttonClick");
// button.addEventListener("click", function(){
//     button.innerText = "לחצו עלי"
//     console.log(button.innerText);

// })

//2

// const buttonOne = document.getElementById("happyButton");
// const buttonTwo = document.getElementById("smartButton");
// const buttonThree = document.getElementById("beutyButton");
// const buttonFour = document.getElementById("strongButton");

// buttonOne.addEventListener("click", function(){
//     alert("you are happy")
// });

// buttonTwo.addEventListener("click", function(){
//     alert("you are smart")
// });

// buttonThree.addEventListener("click", function(){
//     alert("you are beautiful")
// });

// buttonFour.addEventListener("click", function(){
//     alert("you are strong")
// });

//3

// const list = document.getElementsByClassName("listDote");
//     for (let i = 0; i < list.length; i++) {
//         list[i].addEventListener("click", function(){
//             console.log(list[i].innerText);
//         })
//     }

//4

// const buttonUp = document.getElementById("buttonClickUp");
// const buttonDown = document.getElementById("buttonClickDown");
// const paragraph = document.getElementById("pClick");
// let num = 0;
// buttonUp.addEventListener("click", function(){
//     num++
//     paragraph.innerText = num;
    
// })

//5

// buttonDown.addEventListener("click", function(){
//     num--
//     paragraph.innerText = num;
    
// })

//6

    // (;

    
//7

// const products = [
//     {
//         name: "milki",
//         price: 800,
//         Description: "Very tasty"
//     },
//     {
//         name: "kotej",
//         price: 700,
//         Description: "Very tasty"
//     },
//     {
//         name: "dani",
//         price: 600,
//         Description: "Very tasty"
//     }
// ];

//a

// let maxNum = 0;
// for (let i = 0; i < products.length; i++) {
//     if( products[i].price > maxNum){
//         maxNum = products[i].price; 
//     }
// }
// console.log(maxNum);

//b

// for (let i = 0; i < products.length; i++) {
//     if(products[i].price < maxNum){
//         maxNum = products[i].price;
//     }    
// }
// console.log(maxNum);

//c

// for (let i = 0; i < products.length; i++) {
//     products[i].price = products[i].price * 70 /100;
    
// }
// console.log(products);