// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else if (blockNumber < 42) {
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(blockNumber) {
   return distanceFromHqInBlocks(blockNumber)*264;
}

function distanceTravelledInFeet(start, destination){
    if (destination > start) {
    return ((destination-start) * 264);
    } else if (destination < start) {
        return ((start - destination) * 264);
    }
}
    function  calculatesFarePrice(start, destination) {
        let travelDistance = distanceTravelledInFeet(start, destination)
        if (travelDistance <= 400) {
            return 0;
        } else if (travelDistance > 400 && travelDistance<=2000) {
            return 0.02 * (travelDistance - 400);
        } else if (travelDistance > 2000 && travelDistance <=2500) {
            return 25;
        } else {
            return 'cannot travel that far';
        }
       
}