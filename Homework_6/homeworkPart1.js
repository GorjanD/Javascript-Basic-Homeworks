let arrayList = document.getElementById("list");
let sum = document.getElementById("sum");
let mathEquation = document.getElementById("equation")

let numArray = [1, 12, 54, 123, 66, 74];

function printNumbersList (array, element){
    element.innerHTML += "<ul>";
    for(let x of array){
        element.innerHTML += `<li>${x}</li>`;
    }
    element.innerHTML += "</ul>";
}

function sumNumbersInArray (array, element){
    element.innerHTML = "";
    let y = 0
    for(let x of array){
        y = y + x
    }
    element.innerHTML = `<h3>The sum of the numbers in the array is: ${y}</h3>`;
}


printNumbersList(numArray, arrayList)
sumNumbersInArray(numArray, sum)
printMathematicalEquation(numArray, mathEquation)
