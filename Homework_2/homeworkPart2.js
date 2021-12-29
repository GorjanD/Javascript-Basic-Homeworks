var year = prompt("Enter the year");

var formula = (year - 4) % 12;
console.log(formula);

if(formula == 0){
    console.log("This is the year of the Rat");
    alert("This is the year of the Rat");
}
else if(formula == 1){
    console.log("This is the year of the Ox");
    alert("This is the year of the Ox");
}
else if(formula == 2){
    console.log("This is the year of the Tiger");
    alert("This is the year of the Tiger");
}
else if(formula == 3){
    console.log("This is the year of the Rabbit");
    alert("This is the year of the Rabbit");
}
else if(formula == 4){
    console.log("This is the year of the Dragon");
    alert("This is the year of the Dragon");
}
else if(formula == 5){
    console.log("This is the year of the Snake");
    alert("This is the year of the Snake");
}
else if(formula == 6){
    console.log("This is the year of the Horse");
    alert("This is the year of the Horse");
}
else if(formula == 7){
    console.log("This is the year of the Goat");
    alert("This is the year of the Goat");
}
else if(formula == 8){
    console.log("This is the year of the Monkey");
    alert("This is the year of the Monkey");
}
else if(formula == 9){
    console.log("This is the year of the Rooster");
    alert("This is the year of the Rooster");
}
else if(formula == 10){
    console.log("This is the year of the Dog");
    alert("This is the year of the Dog");
}
else{
    console.log("This is the year of the Pig");
    alert("This is the year of the Pig");
}

