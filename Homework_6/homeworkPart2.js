let title = document.getElementById("title");
let paragraph = document.getElementById("paragraph");

title.innerText = "Your weight in chickens:"

function weightInChickens (weight, element){
    element.innerHTML = "";
    let result = (weight / 0.5)
    element.innerHTML = `Your weight is <b>${result}</b> chickens!`
}

let input = prompt("Enter your weight")
weightInChickens (input, paragraph)