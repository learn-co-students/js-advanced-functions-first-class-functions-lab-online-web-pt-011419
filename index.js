// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    const firstTwo = []
    firstTwo.push(drivers[0])
    firstTwo.push(drivers[1])
    return firstTwo
}

const returnLastTwoDrivers = function (drivers) {
    const lastTwo = drivers.slice(-2)
    return lastTwo
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function (int) {
    return function (int) {
        return int * int
    }
}

const fareDoubler = function (int) {
    return int * 2
}

const fareTripler = function(int) {
    return int * 3
}

function selectDifferentDrivers(drivers, fxn) {
    return fxn(drivers)
}