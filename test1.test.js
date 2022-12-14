const stringLength = require('./test1');

test('stringLength should give string.length', () => {
    expect(stringLength('')).toBe('Input should be at least 1 character long and not longer than 10 characters');
    expect(stringLength('abc')).toBe(3);
});