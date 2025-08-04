const formatMonth = (date: Date): string => {
	return date.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });
};

const getYearsOfExperience = (start: Date, end: Date): string => {
	const differenceInTime = end.getTime() - start.getTime();
	const differenceInYears = differenceInTime / (1000 * 3600 * 24 * 365);
	console.log(differenceInYears);

	return `${differenceInYears.toFixed(1)} years`;
};

export { formatMonth, getYearsOfExperience };
