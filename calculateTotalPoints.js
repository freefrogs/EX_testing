const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;
//console.log(calculateTotalPoints(90, 'normal', 90, [10, 10, 15, 15, 15], -10, 5));