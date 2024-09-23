// asa comentez YAY
/*function go(name, age){
    alert(name);
    alert(age);
}
go("Will",21);
var myList = [2, 17, 827];//asta e o list
//functia shift() scoate primul item din lista si  il insereaza unde trb, pop() ia ultimul el
myList.forEach(function(value,index){
alert("I have" + value);
});
*/
var numOne= document.getElementById("num-one");
var numTwo= document.getElementById("num-two");
var addSum= document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input",add);

function add(){
//console.log("hi");
var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;
console.log(one,two);
var sum= one+two;
addSum.innerHTML = "yous sum is:"+ sum;
}//pot folosi si click in loc de mouseenter si mouseleave, sau focus
//Evenimente specifice: click, mouseenter, mouse leave, mousedown, mouseup, mousemove,keydown,keyup,blur,focus
