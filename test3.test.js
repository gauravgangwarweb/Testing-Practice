const calculator = require('./test3.js');

describe ('calculator', () => {
    test('add 1 + 2 = 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    })

    test('sub 5 - 2 = 3', () => {
        expect(calculator.sub(5, 2)).toBe(3);
    })

    test('multiply 5 * 3 = 15', () => {
        expect(calculator.mul(5, 3)).toBe(15);
    })

    test('divide 25 / 5 = 5', () => {
        expect(calculator.div(25, 5)).toBe(5);
    })
})