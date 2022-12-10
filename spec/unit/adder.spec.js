const sumador =  require('../../services/adder');

describe("Test de suma", function(){
    let _numberA;
    let _numberB;

    it("debería devolver la suma de numA y numB", function(){
        _numberA=6;
        _numberB=7;

        const result = sumador.add(_numberA, _numberB);
        expect(result).toEqual(13);
    });
});