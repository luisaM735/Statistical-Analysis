document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("cal"); 
    var maxElement = document.getElementById("max");
    var minElement = document.getElementById("min");
    var meanElement = document.getElementById("mean");
    var medianElement = document.getElementById("median");
    var rangeElement = document.getElementById("range");

    btn.addEventListener("click", report);

    function report() {
        //User Input Values
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);    
        var num3 = parseFloat(document.getElementById("num3").value);  
        
        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 <= 0 || num2 <= 0 || num3 <= 0) {
        window.alert("Please enter valid positive number values.");
        return;
        }  

        //Calculate Statistics
        var max = Math.max(num1, num2, num3);
        var min = Math.min(num1, num2, num3);
        var mean = (num1 + num2 + num3) / 3;
        var sortedArray = [num1, num2, num3].sort((a, b) => a - b);
        var median = sortedArray[1];
        var range = max - min;
        
        //Display results
        maxElement.textContent = "Maximum: " + max;
        minElement.textContent = "Minimum: " + min;
        meanElement.textContent = "Mean: " + mean.toFixed(2);
        medianElement.textContent = "Median: " + median;
        rangeElement.textContent = "Range: " + range;
    }
});