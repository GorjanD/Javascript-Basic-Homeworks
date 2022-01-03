let numArray = [2,10,5,65,102,56,23,1];

    function sum(array){
        let x = 0;
        let y = 0;
            while (x < array.length){
                y = y + array[x];
                x++;
            }
        alert(`The sum of the array is: ${y}`);
    }
    function max(array){
        let x = 0;
        let z = - Infinity;

        while(x < array.length){
            if(array[x] > z){
                z = array[x];
            }
        x++;
        }
        alert(`The highest number in the array is: ${z}`);
    }
    function min(array){
        let x = 0;
        let z = Infinity;
    
        while(x < array.length){
            if(array[x] < z){
                z = array[x];
            }
        x++;
        }
        alert(`The lowest number in the array is: ${z}`);
    }
sum(numArray);
max(numArray);
min(numArray);