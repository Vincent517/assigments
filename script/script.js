document.getElementById('text').innerHTML=('this is javascript text');

// document.write('hello');

// window.alert('We are here');

// console.log('5');

// window.print();

// let num1=3;
// var num2=3;
// console.log(num1+num2);

// let rice,beans,yam,garri;
// rice=1000
// beans=500
// console.log(rice-beansrice+beans);


// var total=3+5
// alert(total)

// function add(){
// var total=2+2;
// alert(total);
// }
// add();

// function add(){
//     return(2+2)

// }
// alert(add())
// nb:this returns both number and strings(not a number)

// let num1;
// let num2;
// let total;
// var x=2, y=32, z;
// function add(x,y){
// return(total)
// }
// alert((add 20, 30))
// var num1= parseInt(prompt("enter your first number"));
// var num2= parseInt(prompt("enter second number"));

// function add(x,y){
// z=x+y;
// return z;

// }
// alert(add(num1,num2));

// var person={name:"cj", age:"24", gender:"male"};

// var person2={name:"chris", age:"21", gender:"female"};

// console.log(person.name);

// console.log(person2.gender);

// function greet(){
//     return alert("good morning");
// }

// function bg() {
//     return alert("good morning");
// }

var fruits = ['orange', 'banana', 'apple', 'melon'];

// console.log(fruits.length);
// console.log( fruits.pop());

// console.log(fruits.length);
// console.log(fruits.push('pawpaw'))

// console.log(fruits[fruits.length] =('guava'))

// console.log(fruits.length)

// // console.pop()



// var a= 3;

// if(a > 20){
//     console.log(a);
// }
// else{
//     console.log(false);
// }

// var a = 30;

// if(  a > 20 || a < 40){
//     console.log(a);

// }
// else if(a = 0){
//     console.log("a is zero");
// }

// var num1 = parseInt(prompt("Enter your first number"));

// var num2 = parseInt(prompt("Enter second number"));

// var operation = prompt("select an operator");

// function cal(x, y, z) {

//     if (z == '+') {

//         return (alert(x + y));

//     }else if (z== '-'){

//             return(alert(x-y));
//     }
//            else if (z== '*'){
//                 return(alert(x*y))

//             }else{
//                 return(alert("oga yo be mumu"));

//     }
// }
// cal(num1,num2,operation);




// for (i = 0; i < 5; i++) {
//     var text = "The number is " + i + "<br>";
//     document.write(text);

// }

// var data = ['Money','Benz','iphone','shoes',];
// for (let i = 0; i < data.length; i++){
//     var field = data[i];
//     document.write(field + "<br>" );


// }

// var num = 0;

// while ( num <11){
// num++
// document.write(num);

// }

// do{
//     var result = 0;
//     result = 2 + 5;

//     document.write(2 + 5);

// }
// while (result < 2);

document.getElementById('elemid').style.background="green";

var classname=document.getElementsByClassName('elemclass');
console.log(classname);

var tag=document.getElementsByTagName('li');
console.log(tag);

document.querySelector('#elemid').style.cssText="font-size:50px;color:red";

// creating new html with js
var main=document.getElementById('main');

//creating the p tag
var new_p=document.createElement('p');

//creating text in the p tag
var text=document.createTextNode('this is our new p');

//appending text to p and p to div(main)
var tag=new_p.appendChild(text);
var newtag=main.appendChild(tag);

//creating a ul

var ul=document.createElement('ul');
console.log(ul);
var li=document.createElement('li');

var list=['home', 'about','contact','sign in'];

for (let index=0; index<list.length; index++){

    var li_text=document.createTextNode(list[index]);
    console.log(li_text);
    var li_number=li.appendChild(li_text);
    var new_ul=ul.appendChild(li_number);
    main.appendChild(new_ul);
}
    //li.innerHTML=list[li]


    var h1=document.getElementById('click')

    var btn=document.getElementById('event')
    btn.onclick = function  bg(){

        h1.style.background='red';
        return
    }

    btn.onscroll = function scroll(){

        h1.style.font
    }
    


   











