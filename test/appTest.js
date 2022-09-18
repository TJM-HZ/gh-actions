const assert = require('chai').assert;
const { sayHello, addNumbers } = require('../app');
const app = require('../app')

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', function () {

    describe('sayHello()', function () {
        it('sayHello should return hello', function () {
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return type string', function () {
            assert.typeOf(sayHelloResult, 'string')
        });
    })

    describe('addNumbers()', function () {
        it('addNumbers should return a value greater than 5', function () {
            assert.isAbove(addNumbersResult, 5);
        })

        it('addNumbers should return value of type number', function () {
            assert.typeOf(addNumbersResult, 'number')
        });
    })
});