function Vehicle(color, engine) {
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.isDriving = false;
    this.speed = 0;
    this.maxSpeedPerTrip = 0;
    this.isSlowingDown = false;
    this.timerDriveId = null;
    this.timerSlowDownId = null;
};

Vehicle.prototype.upgradeEngine = function(newEngine, maxSpeed) {
        if(this.speed === 0) {
            this.engine = newEngine;
            this.maxSpeed = maxSpeed;
        }
};

Vehicle.prototype.getInfo = function() {
    return {engine: this.engine, color: this.color, maxSpeed: this.maxSpeed, model: this.model };
};

Vehicle.prototype.messageDrive = function() {};
Vehicle.prototype.checkSpeed = function() {};

Vehicle.prototype.drive = function() {
    if(this.isSlowingDown === true) {
        clearInterval(this.timerSlowDownId);
        this.isSlowingDown = false;
    }

    if(this.isDriving === true) {
        return;
    } 
    
    this.isDriving = true;
    this.messageDrive();

    this.timerDriveId = setInterval(() => {
                    this.speed += 20;
                    if(this.speed > this.maxSpeed) {
                        console.log("speed is too high, SLOW DOWN!");
                    }

                    if(this.speed > this.maxSpeedPerTrip) {
                        this.maxSpeedPerTrip = this.speed;
                    }
                    this.checkSpeed();
    }, 2000);
};

Vehicle.prototype.messageStop = function() {
    console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxSpeedPerTrip}`);
};

Vehicle.prototype.stop = function() {
    if(this.speed === 0 && this.isDriving === false) {
        return;
    }

    if(this.isSlowingDown === true) {
        console.log("Already slows down")
        return;
    }

    if(this.isDriving === true) {
        this.isDriving = false;
        clearInterval(this.timerDriveId); 
    }

    if(this.speed === 0) {
        this.isDriving = false;
        return;
    }

    this.isSlowingDown = true;
    
    this.timerSlowDownId = setInterval(() => {
        this.speed -= 20;
        if(this.speed === 0) {
            this.isDriving = false;
            this.isSlowingDown = false;
            clearInterval(this.timerSlowDownId);
            this.messageStop();
            this.maxSpeedPerTrip = 0;
        }
    }, 1500);
};

/*const car = new Vehicle("green", "disel");
car.drive();
console.log("go");
setTimeout(() => {
    car.stop();
}, 7000);

setTimeout(() => {
    car.drive();
}, 9000);

setTimeout(() => {
    car.stop();
}, 13500);*/

function Car(model, color, engine) {
    Vehicle.call(this, color, engine);
    this.model = model;
    this.maxSpeed = 80;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.messageStop = function() {
    console.log(`Car ${this.model} is stopped. Maximum speed during the drive ${this.maxSpeedPerTrip}`);
};

Car.prototype.changeColor = function(newColor) {
    if(newColor !== this.color) {
        this.color = newColor;
    }
};


/*const car = new Car("BMW", "green", "disel");
car.drive();
console.log("go");
setTimeout(() => {
    car.stop();
}, 11000);

setTimeout(() => {
    car.drive();
}, 9000);

setTimeout(() => {
    car.stop();
}, 13500);*/

function Motorcycle(model, color, engine) {
    Vehicle.call(this,color, engine);
    this.model = model;
    this.maxSpeed = 90;
};

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.messageStop = function() {
    console.log(`Motorcycle ${this.model} is stopped. Good drive`);
};

Motorcycle.prototype.messageDrive = function() {
    console.log("Let's drive");
};
Motorcycle.prototype.checkSpeed = function() {
    if(this.speed - this.maxSpeed >= 30) {
       console.log("Engine overheating");
       this.stop();
    }
};

/*const testVehicle = new Vehicle("white", "diesel");

testVehicle.drive();
testVehicle.stop();

setTimeout(() => {
    console.log("speed:", testVehicle.speed);
    console.log("isDriving:", testVehicle.isDriving);
}, 3000);*/

/*console.log("----- VEHICLE -----");

const vehicle = new Vehicle("green", "diesel");

console.log(vehicle.getInfo());

vehicle.upgradeEngine("electric", 100);
console.log(vehicle.getInfo());

vehicle.drive();

setTimeout(() => {
    vehicle.stop();
}, 5000);


setTimeout(() => {
    console.log("----- CAR -----");

    const car = new Car("BMW", "black", "diesel");

    console.log(car.getInfo());

    car.changeColor("red");
    console.log(car.getInfo());

    car.changeColor("red");
    console.log(car.getInfo());

    car.drive();

    setTimeout(() => {
        car.stop();
    }, 5000);
}, 12000);


setTimeout(() => {
    console.log("----- MOTORCYCLE -----");

    const motorcycle = new Motorcycle("Yamaha", "black", "petrol");

    console.log(motorcycle.getInfo());

    motorcycle.drive();
}, 24000);*/