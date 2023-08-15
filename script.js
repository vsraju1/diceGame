function randomNumber2(){
    var randomNum2 = Math.floor(Math.random()*6+1);
    return randomNum2;
}

var finalNum2 = randomNumber2();
console.log(finalNum2);

if (finalNum2 === 1){
    document.querySelector("#p2-n2").style.visibility = "hidden";
    document.querySelector("#p2-n3").style.visibility = "hidden";
    document.querySelector("#p2-n4").style.visibility = "hidden";
    document.querySelector("#p2-n5").style.visibility = "hidden";
    document.querySelector("#p2-n6").style.visibility = "hidden";
}else if(finalNum2 === 2){
    document.querySelector("#p2-n3").style.visibility = "hidden";
    document.querySelector("#p2-n4").style.visibility = "hidden";
    document.querySelector("#p2-n5").style.visibility = "hidden";
    document.querySelector("#p2-n6").style.visibility = "hidden";
}else if(finalNum2 === 3){
    document.querySelector("#p2-n4").style.visibility = "hidden";
    document.querySelector("#p2-n5").style.visibility = "hidden";
    document.querySelector("#p2-n6").style.visibility = "hidden";
}else if(finalNum2 === 4){
    document.querySelector("#p2-n5").style.visibility = "hidden";
    document.querySelector("#p2-n6").style.visibility = "hidden";
}else if(finalNum2 === 5){
    document.querySelector("#p2-n6").style.visibility = "hidden";
}

function randomNumber(){
    var randomNum1 = Math.floor(Math.random()*6+1);
    return randomNum1;
}

var finalNum1 = randomNumber();
console.log(finalNum1);

if (finalNum1 === 1){
    document.querySelector("#p1-n2").style.visibility = "hidden";
    document.querySelector("#p1-n3").style.visibility = "hidden";
    document.querySelector("#p1-n4").style.visibility = "hidden";
    document.querySelector("#p1-n5").style.visibility = "hidden";
    document.querySelector("#p1-n6").style.visibility = "hidden";
}else if(finalNum1 === 2){
    document.querySelector("#p1-n3").style.visibility = "hidden";
    document.querySelector("#p1-n4").style.visibility = "hidden";
    document.querySelector("#p1-n5").style.visibility = "hidden";
    document.querySelector("#p1-n6").style.visibility = "hidden";
}else if(finalNum1 === 3){
    document.querySelector("#p1-n4").style.visibility = "hidden";
    document.querySelector("#p1-n5").style.visibility = "hidden";
    document.querySelector("#p1-n6").style.visibility = "hidden";
}else if(finalNum1 === 4){
    document.querySelector("#p1-n5").style.visibility = "hidden";
    document.querySelector("#p1-n6").style.visibility = "hidden";
}else if(finalNum1 === 5){
    document.querySelector("#p1-n6").style.visibility = "hidden";
}

if (finalNum1 > finalNum2){
    document.querySelector("#winner2").style.visibility = "hidden";
    document.querySelector("#tie").style.visibility = "hidden";
}else if (finalNum2 > finalNum1){
    document.querySelector("#winner1").style.visibility = "hidden";
    document.querySelector("#tie").style.visibility = "hidden";
}else{
    document.querySelector("#winner1").style.visibility = "hidden";
    document.querySelector("#winner2").style.visibility = "hidden";    
}