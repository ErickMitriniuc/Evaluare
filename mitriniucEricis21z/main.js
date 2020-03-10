function addition() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    if (isNaN(a) == true) a = 0;
    if (isNaN(b) == true) b = 0;

    var c = a + b;

    document.getElementById('result').innerHTML = a + " + " + b + " = " + c;
}

{

    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);

    if (isNaN(x) == true) x = 0;
    if (isNaN(y) == true) y = 0;

    let temp = x;
    x = y;
    y = temp;

    document.getElementById('results').innerHTML = ( x + " " + y);
}
var div = document.getElementById("container");

div.onmouseover = function(){

    this.setAttribute("style","background-color:red;");
}
setTimeout(function(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
}, 5000);

setTimeout(function(){
    const oldValue = +document.getElementById("counter").value;
    const newValue = oldValue + 1;
    document.getElementById("counter").value = newValue;
}, 1000);
setInterval(function(){
    const oldValue = +document.getElementById("Massive").value;
    if(oldValue < 10){
        const newValue = oldValue + 1;
        document.getElementById("Massive").value = newValue;
    }

}, 1000);
const ex9 = () => {
    const app = document.getElementById('app');
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < array.length; i++) {
        const div = document.createElement('div');
        div.innerText = i;
        app.append(div)
    }
};
const app = document.getElementById('mass');
arr = [10, 2, 3, 4, 5, 6, 8, 7, 9, 1, 15, 12, 13, 14, 11];
app.innerHTML = arr.sort();


var divLength = document.getElementById('circle').length;

var bodyLink = document.getElementsByTagName('body')[0];

var mayDiv = document.createElement("div");

for(var i=0; i < divLength; i++) {
    5
    bodyLink.appendChild(mayDiv );
    6
}
