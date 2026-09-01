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

Vehicle.prototype.drive = function() {
    if(this.isSlowingDown === true) {
        clearInterval(this.timerSlowDownId);
        this.isSlowingDown = false;
    }

    if(this.isDriving === true) {
        return;
    } 
    
    this.isDriving = true;

    this.timerDriveId = setInterval(() => {
                    this.speed += 20;
                      if(this.speed > this.maxSpeed) {
                        console.log("speed is too high, SLOW DOWN!");
                    }

                    if(this.speed > this.maxSpeedPerTrip) {
                        this.maxSpeedPerTrip = this.speed;
                    }
    }, 2000);
};

Vehicle.prototype.message = function() {
    console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxSpeedPerTrip}`);
};

Vehicle.prototype.stop = function() {
    if(this.speed === 0) {
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

    this.isSlowingDown = true;
    
    this.timerSlowDownId = setInterval(() => {
        this.speed -= 20;
        if(this.speed === 0) {
            this.isDriving = false;
            this.isSlowingDown = false;
            clearInterval(this.timerSlowDownId);
            this.message();
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

Car.prototype.message = function() {
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
