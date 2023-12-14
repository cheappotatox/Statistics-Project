let myChart = null;

function makeGraph() {
    console.log('makeGraph function is called.');

    if (myChart !== null) {
        myChart.destroy();
    }

    // Get user inputs
    const graphType = document.getElementById("graphType").value;
    const graphTitle = document.getElementById("graphTitle").value;
    const xAxisTitle = document.getElementById("xAxisTitle").value;
    const yAxisTitle = document.getElementById("yAxisTitle").value;
    const xValuesInput = document.getElementById("Xvalues").value;
    const yValuesInput = document.getElementById("Yvalues").value;

    // Parse the values as arrays
    const xValues = xValuesInput.split(',').map(val => parseFloat(val.trim()));
    const yValues = yValuesInput.split(',').map(val => parseFloat(val.trim()));

    // Create a new chart based on the selected graphType
    const ctx = document.getElementById('myChart').getContext('2d');
    let datasets;

    if (graphType === 'scatter') {
        // For scatter plot, create an array of objects with x and y properties
        datasets = [{
            label: graphTitle,
            data: xValues.map((x, index) => ({ x, y: yValues[index] })),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }];
    } else {
        // For other graph types, use xValues as labels
        datasets = [{
            label: graphTitle,
            data: yValues,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }];
    }

    myChart = new Chart(ctx, {
        type: graphType,
        data: {
            labels: graphType === 'scatter' ? null : xValues.map((_, index) => `Label ${index + 1}`),
            datasets: datasets
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: xAxisTitle
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: yAxisTitle
                    }
                }
            }
        }
    });
}

function resetGraph() {
    console.log('resetGraph function is called.');

    if (myChart !== null) {
        myChart.destroy();
        myChart = null;
    }

    // Clear user inputs
    document.getElementById("graphType").value = "";
    document.getElementById("graphTitle").value = "";
    document.getElementById("xAxisTitle").value = "";
    document.getElementById("yAxisTitle").value = "";
    document.getElementById("Xvalues").value = "";
    document.getElementById("Yvalues").value = "";
}
