let firstNames = ["Bob", "Johnny", "Joey", "Joe"]
let lastNames = ["Dylan", "Cash", "Ramone", "Strummer"]

function namesList(array1,array2){
for (let x=0; x < array1.length; x++){
    console.log(`${x+1}. ${array1[x]} ${array2[x]}`)
    }
}
namesList(firstNames,lastNames)