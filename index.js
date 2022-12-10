var express = require('express');
var bodyParser = require('body-parser');
var adder =require('./services/adder');
var app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.get('/suma', function(req, res){
    res.send(handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB));
});
app.listen(3000);
module.exports=app;
function handleCalculatorRequest(func, numberA, numberB){
    var numberA = parseInt(numberA);
    var numberB = parseInt(numberB);
    var result = func(numberA,numberB);

    if(result){
        return result.toString();
    }
    throw "Error de cálculo";
}