const addBody = (chassisObject) => {
    // Use dot notation to add a new property
    chassisObject.body = "Fever"

    // Return the chassis that now has a body property on it
    return chassisObject
}

// No parameters defined because function needs nothing to do its job
const createChassis = () => {
    // Create a new object. No properties yet.
    const newChassisObject = {}

    return newChassisObject
}

const addWheels = () => {

    chassisObj.wheels = 4;
    return chassisObj;
}


const addEngine = () => {
    chassisObj.engine = "4.8L";
    return chassisObj;
}

const addSteeringWheel = () => {
    chassisObj.steeringWheel = "Tilting";
    return chassisObj;
}

const addDriveTrain = () => {
    chassisObj.driveTrain = "Tow Wheel Drive";
    return chassisObj;
}

/*
let myChas = createChassis();
myChas = addBody(myChas);
myChas = addWheels(myChas);
myChas = addEngine(myChas);
myChas = addSteeringWheel(myChas);
myChas = addDriveTrain(myChas);
*/
let myChas = createChassis();
addBody(myChas);
addWheels(myChas);
addEngine(myChas);
addSteeringWheel(myChas);
addDriveTrain(myChas);

console.log(myChas)

/*
The addWheels() function should have a parameter for the incoming chassis object. 
It should add a new property to that object named wheels with a value of 4. 
The function should return the chassis object.

The addEngine() function should have a parameter for the incoming chassis object.
 It should add a new property to that object named engine with a value of "4.8L".
The function should return the chassis object.

The addSteeringWheel() function should have a parameter for the incoming chassis object. 
It should add a new property to that object named steeringWheel with a value of "Tilting". 
The function should return the chassis object.

The addDriveTrain() function should have a parameter for the incoming chassis object. 
It should add a new property to that object named driveTrain with a value of "Two wheel drive". The function should return the chassis object.
*/