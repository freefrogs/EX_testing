const formatDate = (timeInSeconds) => {
	if (!timeInSeconds) {
		return '0s';
	}
	if (timeInSeconds < 60) {
		return `${timeInSeconds}s`;
	} if (timeInSeconds >= 60 && timeInSeconds < 3600) {
		const seconds = Math.floor(timeInSeconds % 60);
		const minutes = Math.floor(timeInSeconds / 60);
		if (seconds === 0) {
			return `${minutes}m`;
		}
		return `${minutes}m ${seconds}s`;
	} else {
		const hours = Math.floor(timeInSeconds / 3600);
		const timeLeft = timeInSeconds - (hours*3600);
		const seconds = Math.floor(timeLeft % 60);
		const minutes = Math.floor(timeLeft / 60);
		if (seconds === 0 && minutes === 0) {
			return `${hours}h`;
		} if (minutes === 0) {
			return `${hours}h ${seconds}s`; 
		} if (seconds === 0) {
			return `${hours}h ${minutes}m`; 
		}
		return `${hours}h ${minutes}m ${seconds}s`;
	}
}

module.exports = formatDate;