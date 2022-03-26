// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

selectingDrivers[0]
selectingDrivers[1]

const createFareMultiplier = function(fareMulti) {
    return function(num){
        return fareMulti * num
    }
}

const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3) 

function selectDifferentDrivers(drivers,diffDrivers) {
    return diffDrivers(drivers)
}