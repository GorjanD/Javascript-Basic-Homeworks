let recipeName = document.getElementById("name");
let ingredients = document.getElementById("ingredients");
let ingredientsList = [];

recipeName.innerText = prompt("Enter recipe name");
let ingredientsNumber = parseInt(prompt("Enter number of ingredients"));

function addIngredientsToList (number){
    let x = 0;
    while (x < number){
        ingredientsList.push(prompt("Enter the ingredient name"));
        x++;
    }
}

function printIngredientsList (ingredients, element){
    element.innerHTML ="";
    element.innerHTML += "<tr>";
    let y = 1
    for(let x of ingredients){
        element.innerHTML += `<td>${y}. ${x}</td>`;
        y++
    }
    element.innerHTML += "</tr>";
}

addIngredientsToList (ingredientsNumber);
printIngredientsList(ingredientsList, ingredients);