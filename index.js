const returnFirstTwoDrivers = function(driverArr) {
    return driverArr.slice(0, 2)
}

const returnLastTwoDrivers = function(driverArr) {
    return driverArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return int * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArr, driverFn) {
    return driverFn(driverArr)
}