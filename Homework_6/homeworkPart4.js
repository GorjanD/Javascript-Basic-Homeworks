let button = document.getElementById ("button");

let myName = (prompt("Enter your name first"))

function buttonClick(){
    alert(`Hello ${myName}!`);

}

button.onclick = buttonClick;