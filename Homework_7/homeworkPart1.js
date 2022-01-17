let dog = {
    name: "",
    kind: "",
    speak: function (){
        alert (`Your dog ${dog.name} the ${dog.kind} says: Hello bro!!!`);
    }
}

dog.name = prompt("Enter the dogs name");
dog.kind = prompt("Enter the breed of the dog")

dog.speak();