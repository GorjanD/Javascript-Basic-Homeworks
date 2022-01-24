function Animal(name, type, age){
    this.animalName = name;
    this.animalType = type;
    this.animalAge = age;
}

let animals = [];
let button = document.getElementsByTagName("button")[0];
let animalForm = document.getElementById("animalForm");
let animalsList = document.getElementById("list")

function printAnimals (array, element){
    element.innerHTML = "";
    element.innerHTML += "<ul>";
    for (let animal of array){
        element.innerHTML += `<li><i>Name:</i> ${animal.animalName} <i>Type:</i> ${animal.animalType} <i>Age:</i> ${animal.animalAge}</li>`;
    }
    element.innerHTML += "</ul>";
}

button.addEventListener("click", function(){
    let newAnimal = new Animal(animalForm.children[0].value, animalForm.children[1].value, animalForm.children[2].value);
    animals.push(newAnimal);
    animalForm.children[0].value = "";
    animalForm.children[1].value = "";
    animalForm.children[2].value = "";
    console.log(animals)
    printAnimals(animals, animalsList)
});
