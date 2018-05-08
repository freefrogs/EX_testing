const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('calculate veryfication', () => {
        it('should return proper result with additional points for gate and wind', () => {
            const actual = calculateTotalPoints(90, 'normal', 90, [10, 10, 15, 15, 15], 10, 10);
    
            const expected = 120;
    
            assert.equal(actual, expected);
        });
        it('should return proper result with negative points for gate and wind', () => {
            const actual = calculateTotalPoints(90, 'normal', 90, [10, 10, 15, 15, 15], -10, -10);
    
            const expected = 80;
    
            assert.equal(actual, expected);
        });
    });
});