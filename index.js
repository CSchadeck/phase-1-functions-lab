// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const difference = 42 - someValue;
    if (difference < 0) {
        return difference * -1;
    } else {
        return difference;
    }
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return blocks * 264;
    // the return value of distanceFromHqInBlocks can then be used to calculate fee
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const traveled = start - destination;
    const toFeet = traveled * 264;
    if (toFeet < 0) {
        return toFeet * -1; 
    } else {
        return toFeet;
    }
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 401) {
        return 0;
    } else if (distance > 400 && distance < 2001) {
        return (distance - 400) * 2 / 100;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}