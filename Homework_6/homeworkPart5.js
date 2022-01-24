let rowNumber = parseInt(prompt("Enter the number of rows"));
let columnNumber = parseInt(prompt("Enter the number of columns"));
let rowsArray = [];
let columnsArray = [];

let table = document.getElementById("table")

function rowsArrayFunction(rowNumber){
    let x = 0;
    while (x < rowNumber){
        rowsArray.push(`Row ${x+1}`);
        x++;
    }
    console.log(rowsArray)
}

function columnsArrayFunction(columnNumber){
    let x = 0;
    while (x < columnNumber){
        columnsArray.push(`Column ${x+1}`);
        x++;
    }
    console.log(columnsArray)
}

function createTable(array, array2, element){
    for(let x = 0; x < array.length; x++){
        element.innerHTML += "<tr>";
            for(let y = 0; y < array2.length; y++){
                var element2 = document.createElement("td");
                element2.innerHTML += `${array[x]}, ${array2[y]}`;
                document.getElementById("table").appendChild(element2);
            }
        element.innerHTML += "</tr>";
    }
}


rowsArrayFunction (rowNumber);
columnsArrayFunction (columnNumber);
createTable(rowsArray, columnsArray, table);