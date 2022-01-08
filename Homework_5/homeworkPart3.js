let numArray1 = [2, 24, 56, 72, 44, 2, 434, 2, 55, 6, 2]
let numArray2 = [32, 55, 5, 2, 567, 65, 2]
let numArray3 = [1, 32, 2, 1]

function numberPicker(num, array){
    let y = 0
    for (let x=0; x < array.length; x++){
        if (num === array[x]){
            y++;
        }
    }
        console.log(`There are ${y} occurrences of ${num} in the array`);
}

numberPicker(2, numArray1);
numberPicker(32, numArray2);
numberPicker(10, numArray3)