let numArray = [2,65,787,23,6];

function sumArray(array){
    let x = 0;
    let y = 0;
        while (x < array.length){
            y = y + array[x];
            x++;
        }
    console.log(y)
    alert(y)
}
sumArray(numArray)