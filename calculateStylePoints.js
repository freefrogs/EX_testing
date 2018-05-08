const calculateStylePoints = (styleNotes) => {
	function add (a, b) {
		return a + b
	}
  	const sum = styleNotes.reduce(add, 0);
  	const min = Math.min(...styleNotes);
  	const max = Math.max(...styleNotes);
  	return sum - min - max
};

module.exports = calculateStylePoints;

//testArr = [10, 10, 15, 15, 15];
//console.log(calculateStylePoints(testArr));