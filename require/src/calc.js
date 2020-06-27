define([  
], function () {
    "use strict";
    var calc = function() {

    }

    calc.prototype.sum = function(prev, curr) {
        return prev + curr;
    };

    return calc;
});