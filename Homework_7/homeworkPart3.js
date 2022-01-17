let car = {
    model: "Jeep Wrangler Sport",
    year: 2007,
    fuelTankCapacity: 80,
    distanceInKilometers: "",
    fuelType: "Gasoline",
    fuelConsumption: function (){
        return this.distanceInKilometers / 10;
    },
    fuelConsumptionTank: function (){
        return this.distanceInKilometers / (this.fuelTankCapacity*10);
    }
}

car.distanceInKilometers = prompt("Enter the distance you want to pass in km");
    if(car.fuelConsumptionTank() < 1){
        alert(`You'll need ${car.fuelConsumption()} liters of fuel or ${car.fuelConsumptionTank()} of your tank for that distance`)
    }
    else if(car.fuelConsumptionTank() == 1){
        alert(`You'll need ${car.fuelConsumption()} liters of fuel or ${car.fuelConsumptionTank()} full tank for that distance`)
    }
    else{
        alert(`You'll need ${car.fuelConsumption()} liters of fuel or ${car.fuelConsumptionTank()} full tanks for that distance`)
}
