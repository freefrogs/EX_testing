const calculateDistancePoints = (distance, hillSize, kPoint) => {

	const startPoints = (hillSize) => {
		if (hillSize !== 'small' && hillSize !== 'normal' && hillSize !== 'mamooth') {
			return "Error"
		}
		if (hillSize === 'mamooth') {
			return 120
		}
		return 60
	}

	const multiplier = (hillSize) => {
		if (hillSize === 'mamooth') {
			return 1.2;
		}
		if (hillSize === 'normal') {
			return 1.8;
		}
		if (hillSize === 'small') {
			return 2;
		}
	}

	if (startPoints(hillSize) === 'Error') {
		return 'Hill size Error, please check data input';
	}

	return startPoints(hillSize) + (distance - kPoint)*multiplier(hillSize);
};

module.exports = calculateDistancePoints;
//console.log(calculateDistancePoints(90, 'normal', 90));