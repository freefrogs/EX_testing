const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('proper array decrease', () => {
        it('should return proper result', () => {
            const actual = calculateStylePoints([15, 16, 17, 18, 19]);
    
            const expected = 51;
    
            assert.equal(actual, expected);
        });
        it('should properly decrease array of scores', () => {
            const actual = calculateStylePoints([15, 15, 16, 17, 17]);
    
            const expected = 48;
    
            assert.equal(actual, expected);
        });
    });
});