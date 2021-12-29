var phonePrice = 119.95;
var phoneQuantity = prompt("Enter number of phones");
var tax = prompt("Enter tax rate in %");

var taxRate = tax / 100
var taxPercentage = phonePrice * phoneQuantity * taxRate;
var priceOfPhonesWithTax = phonePrice * phoneQuantity + taxPercentage;
console.log("The price of the phones with tax is: ");
console.log(priceOfPhonesWithTax)