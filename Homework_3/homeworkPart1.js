let year = prompt("Enter the year");

switch((year - 4) % 12){
    case 0:
        console.log("This is the year of the Rat");
        break;
    case 1:
        console.log("This is the year of the Ox");
        break;
    case 2:
        console.log("This is the year of the Tiger");
        break;
    case 3:
        console.log("This is the year of the Rabbit");
        break;
    case 4:
        console.log("This is the year of the Dragon");
        break;
    case 5:
        console.log("This is the year of the Snake");
        break;
    case 6:
        console.log("This is the year of the Horse");
        break;
    case 7:
        console.log("This is the year of the Goat");
        break;    
    case 8:
        console.log("This is the year of the Monkey");
        break;
    case 9:
        console.log("This is the year of the Rooster");
        break;
    case 10:
        console.log("This is the year of the Dog");
        break;
    case 11:
        console.log("This is the year of the Pig");
        break;      
    default:
        console.log("Enter a real year, you idiot");
        break;           
}

