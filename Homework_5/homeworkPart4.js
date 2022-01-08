let numArray1 = [2, 23, 56, 71, 44, 678, 434, 22, 55, 6, 15, 100]

function findNumber(array, type){
    let arrOdd = []
    let arrEven = []
    for(let x of array){
        if(type === "odd"){
            if(x % 2 != 0){
                arrOdd.push(x);
            }
        }
        else{
            if(type === "even"){
                if(x % 2 == 0){
                    arrEven.push(x);
                }
            }
        }
    }
    alert(arrEven);
    alert(arrOdd);
}
let oddOrEven = prompt("Enter odd to see the odd numbers or even to see the even numbers");
if(oddOrEven === "odd"){
    findNumber(numArray1, oddOrEven);
}
else if(oddOrEven === "even"){
    findNumber(numArray1, oddOrEven);
}
else{
    alert("Error!")
}