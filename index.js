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
    return blocks * 264;

}

function distanceTravelledInFeet(start, destination) {
    const traveled = start - destination;
    const toFeet = traveled * 264;
    if (toFeet < 0) {
        return toFeet * -1;
    } else {
        return toFeet;
    }
}

function calculatesFarePrice(start, destination) {

    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 401) {
        return 0;
    } else if (distance > 400 && distance < 2001) {
        return (distance - 400) * 2 / 100;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}