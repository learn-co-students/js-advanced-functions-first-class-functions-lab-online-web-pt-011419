const returnFirstTwoDrivers = function(drivers) {
    let newA= drivers.slice(0, 2);
    return newA;
  };

const returnLastTwoDrivers = function(drivers) {
    let newA= drivers.slice(-2);
    return newA;
  };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
  return function (m) {
    return m * n;
  }
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
