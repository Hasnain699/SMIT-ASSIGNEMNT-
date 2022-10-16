class automobile{
    constructor(name,model,colour,type){
        this.name=name;
        this.model=model;
        this.colour=colour;
        this.type=type;
    }
    start(name){
        return `${name} is ready for drive!`
    }
    openDoor(name){
        return `Doors Of Your ${name} Has Been Opened!`
    }

}
class Car extends automobile{
    constructor(name,model,colour,type,maxSpeed,company){
        super(name,model,colour,type)
        this.maxSpeed=maxSpeed;
        this.company=company;
    }
    speedTest(){
        return `${this.name} can run at a max Speed of ${this.maxSpeed} Km/h` 
    }
}
class Truck extends automobile{
    constructor(name,model,colour,type,company,capacity){
        super(name,model,colour,type)
        this.capacity=capacity;
        this.company=company;
    }
    cargoDelivery(){
        return `${this.name} has a total capacity of ${this.capacity} kg Of Goods To Deliver`
    }
}
class Bus extends automobile{
    constructor(name,model,colour,type,company,capacityOfPassengers){
        super(name,model,colour,type)
        this.capacityOfPassengers=capacityOfPassengers;
        this.company=company;
    }
    capacityPassenger(){
        return `${this.name} Can Carry Total ${this.capacityOfPassengers} Passengers`
    }
}

let myCar = new Car("Tundra" , 2022 , "White" , "Auto",200, " Toyota ");
let myTruck = new Truck(" Denali" , 2022 , "Black" , "Auto","GMC",500);
let myBus= new Bus("GH21" , 2000 , "Black" , "Manual","GreyHound",750);

console.log( `INFO ABOUT CAR: \nName: ${myCar.name} \nModel: ${myCar.model} \nColour: ${myCar.colour} \nTransmission: ${myCar.type} \n${myCar.start(myCar.name)} \n${myCar.openDoor(myCar.name)} \n${myCar.speedTest()}`)
console.log( `INFO ABOUT TRUCK: \nName: ${myTruck.name} \nModel: ${myTruck.model} \nColour: ${myTruck.colour} \nTransmission: ${myTruck.type} \n${myTruck.start(myTruck.name)} \n${myTruck.openDoor(myTruck.name)} \n${myTruck.cargoDelivery()}`)
console.log( `INFO ABOUT BUS: \nName: ${myBus.name} \nModel: ${myBus.model} \nColour: ${myBus.colour} \nTransmission: ${myBus.type} \n${myBus.start(myBus.name)} \n${myBus.openDoor(myBus.name)} \n${myBus.capacityPassenger()}`)
