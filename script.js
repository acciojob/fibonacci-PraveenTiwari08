function fibonacci(num) {
// your code here
	var fibSeries = [0, 1]; // Initialize the series with the first two terms
    for (var i = 2; i < num; i++) {
        var nextTerm = fibSeries[i - 1] + fibSeries[i - 2]; // Calculate the next term
        fibSeries.push(nextTerm); // Add the next term to the series
    }
    return fibSeries;
}

module.exports = fibonacci;
