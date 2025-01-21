const sumAll = function(n,m) {
    let sum = 0;
    if (!Number.isInteger(n)|| !Number.isInteger(m)|| n < 0 || m < 0){
        return "ERROR";
    }

    if (n>m){
        for (let index = n; index >= m; index--) {
            sum += index;
        }
        return sum;
    } else {
        for (let index = n; index <= m; index++) {
            sum += index;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
