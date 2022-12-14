const stringReverse = require("./test2.js")

test('string length check',()=>{
    expect(stringReverse('abcd')).toBe('dcba')
})