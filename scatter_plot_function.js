function createScatterPlot(xValues, yValues, title, xLabel, yLabel) {
    const scatterPlot = document.createElement('canvas');
    scatterPlot.id = 'scatterPlot';
    document.body.appendChild(scatterPlot);

    const ctx = scatterPlot.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, scatterPlot.width, scatterPlot.height);

    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.fillText(title, scatterPlot.width / 2 - ctx.measureText(title).width / 2, 20);
    ctx.fillText(xLabel, scatterPlot.width / 2 - ctx.measureText(xLabel).width / 2, scatterPlot.height - 10);
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, -scatterPlot.height / 2 - ctx.measureText(yLabel).width / 2, 10);
    ctx.restore();

    const xScale = scatterPlot.width / (Math.max(...xValues) - Math.min(...xValues));
    const yScale = scatterPlot.height / (Math.max(...yValues) - Math.min(...yValues));

    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'rgba(75, 192, 192, 1)';
    
    for (let i = 0; i < xValues.length; i++) {
        const x = (xValues[i] - Math.min(...xValues)) * xScale;
        const y = scatterPlot.height - (yValues[i] - Math.min(...yValues)) * yScale;

        // Draw a circle for each data point
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}
