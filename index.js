// Code your solution in this file!
function returnFirstTwoDrivers(array){
    const twoDrivers = function(array){
      return array.slice(0, 2)
    };
  return twoDrivers(array);
}

function returnLastTwoDrivers(array){
    const twoDrivers = function(array){
      return array.slice(-2)
    };
  return twoDrivers(array);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare){
  return function(num) {
      return num * fare;
   };
 }

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

 const selectDifferentDrivers = function(arrayOfDrivers, arg){
     return arg(arrayOfDrivers);
     
 }