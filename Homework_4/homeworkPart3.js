let stringArray = ["Hello","there,","guy","who","checks","my","homework!"]

function sentence(array){
    let x = 0;
    while(x < array.length){
        document.write(array[x] + " ");
        x++;
    }
    
}
sentence(stringArray)