let book1 = {
    name: "Atlas Shrugged",
    author: "Ayn Rand",
    finished: true,
    readingStatus: function (){
        if(this.finished == true){
            alert(`You have read ${book1.name} by ${book1.author}`);
        }
        else{
            alert(`You have not read ${book1.name} by ${book1.author}`);
        }
    }
}

let book2 = {
    name: "Catcher in the Rye",
    author: "J.D. Salinger",
    finished: false,
    readingStatus: function (){
        if(this.finished == true){
            alert(`You have read ${book2.name} by ${book2.author}`);
        }
        else{
            alert(`You have not read ${book2.name} by ${book2.author}`);
        }
    }
}

let pickABook = prompt("Enter the name of the book you want to check")
    if (pickABook == book1.name){
        book1.readingStatus()
    }
    else if (pickABook == book2.name){
        book2.readingStatus()
    }
    