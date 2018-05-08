const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('hillSize', () => {
        it('should return kPoint punctation for mamooth', () => {
            const actual = calculateDistancePoints(90, 'mamooth', 90);
    
            const expected = 120;
    
            assert.equal(actual, expected);
        });
        it('should return kPoint punctation for normal', () => {
            const actual = calculateDistancePoints(90, 'normal', 90);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });
        it('should return kPoint punctation for small', () => {
            const actual = calculateDistancePoints(90, 'small', 90);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });
    });

    describe('multiplier', () => {
        it('should use proper multiplier for mamooth', () => {
            const actual = calculateDistancePoints(100, 'mamooth', 90);
    
            const expected = 132;
    
            assert.equal(actual, expected);
        });
        it('should use proper multiplier for normal', () => {
            const actual = calculateDistancePoints(100, 'normal', 90);
    
            const expected = 78;
    
            assert.equal(actual, expected);
        });
        it('should use proper multiplier for small', () => {
            const actual = calculateDistancePoints(100, 'small', 90);
    
            const expected = 80;
    
            assert.equal(actual, expected);
        });
    });

    describe('K distance variation', () => {
        it('should add points over K distance ', () => {
            const actual = calculateDistancePoints(110, 'mamooth', 90);
    
            const expected = 144;
    
            assert.equal(actual, expected);
        });
        it('should add points over K distance ', () => {
            const actual = calculateDistancePoints(90, 'mamooth', 200);
    
            const expected = -12;
    
            assert.equal(actual, expected);
        });  
    });
});