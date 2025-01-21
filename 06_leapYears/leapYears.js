const leapYears = function(year) {
    console.log(year);
    console.log(year%100);
        if (year % 100 == 0 && year % 400 == 0){
            return true;
        } else if (year % 4 === 0 && !(year % 100 === 0)){
            return true;
        } else {
            return false;
        }
};

// Do not edit below this line
module.exports = leapYears;
