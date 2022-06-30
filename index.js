function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(price) {
    let farePrice = function() {
        return price * price;
    }
    return farePrice;
}
function fareDoubler(dub = createFareMultiplier()) {
    return dub * 2;
}
function fareTripler(trip = createFareMultiplier()) {
    return trip * 3;
}
function selectDifferentDrivers(drivers = selectingDrivers, fn) {
    return fn(drivers);
}