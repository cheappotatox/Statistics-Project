function calculateCorrelation() {
    const xValuesInput = document.getElementById("xValues").value;
    const yValuesInput = document.getElementById("yValues").value;

    // Convert comma-separated values to arrays
    const xValues = xValuesInput.split(',').map(Number);
    const yValues = yValuesInput.split(',').map(Number);

    // Calculate correlation coefficient (you need to implement this part)
    const correlationCoefficient = calculateCorrelationCoefficient(xValues, yValues);

    // Update the HTML element with the correlation coefficient
    const correlationResultElement = document.getElementById("correlationResult");
    correlationResultElement.textContent = correlationCoefficient.toFixed(4);

    // Determine the correlation category and update the corresponding span element
    const categoryResultElement = document.getElementById("categoryResult");
    categoryResultElement.textContent = determineCorrelationCategory(correlationCoefficient);
}

function determineCorrelationCategory(correlationCoefficient) {
    if (correlationCoefficient === 1.0) {
        return "Perfect positive association";
    } else if (correlationCoefficient >= 0.8) {
        return "Very strong positive association";
    } else if (correlationCoefficient >= 0.6) {
        return "Strong positive association";
    } else if (correlationCoefficient >= 0.4) {
        return "Moderate positive association";
    } else if (correlationCoefficient >= 0.2) {
        return "Weak positive association";
    } else if (correlationCoefficient > 0) {
        return "Very weak positive or no association";
    } else if (correlationCoefficient === 0) {
        return "No association";
    } else if (correlationCoefficient >= -0.2) {
        return "Very weak negative or no association";
    } else if (correlationCoefficient >= -0.4) {
        return "Weak negative association";
    } else if (correlationCoefficient >= -0.6) {
        return "Moderate negative association";
    } else if (correlationCoefficient >= -0.8) {
        return "Strong negative association";
    } else if (correlationCoefficient === -1.0) {
        return "Perfect negative association";
    } else {
        return "Invalid correlation coefficient";
    }
}

// You also need to implement the calculateCorrelationCoefficient function
// This function should return the calculated correlation coefficient for the given data.
// It might involve additional calculations or using a library for statistical analysis.
// Here's a simple example (you may need to replace it with a more accurate calculation):
function calculateCorrelationCoefficient(xValues, yValues) {
    // Example: Simple correlation coefficient calculation
    const n = xValues.length;
    const sumX = xValues.reduce((acc, val) => acc + val, 0);
    const sumY = yValues.reduce((acc, val) => acc + val, 0);
    const sumXY = xValues.reduce((acc, val, index) => acc + val * yValues[index], 0);
    const sumX2 = xValues.reduce((acc, val) => acc + val ** 2, 0);
    const sumY2 = yValues.reduce((acc, val) => acc + val ** 2, 0);

    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2));

    return numerator / denominator;
}
