define([
    'calc',
    'app'  
], function (_calc, _app) {
    var calc = new _calc();
    var app = _app;

    console.log(calc.sum(1, 2));
    console.log(app.GetName());
});