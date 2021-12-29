function dogYears(x){
    let result = x * 7;
    alert(`Your dog is ${result} years old in dog years.`);
    return result;
}
dogYears(prompt("How old is your dog in human years?"));

function humanYears(y){
    let result2 = y / 7;
    alert(`Hi dog, it's impressive you're using a computer... Anyway your human is ${result2} years old in human years.`);
    return result2;
}
humanYears(prompt("How old is your human in dog years?"));