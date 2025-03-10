document.getElementById('convert-btn').addEventListener('click', function () {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
  
    if (isNaN(temperature)) {
      alert('Please enter a valid number!');
      return;
    }
  
    let result;
  
    // Convert input to Celsius first
    let celsius;
    if (fromUnit === 'celsius') {
      celsius = temperature;
    } else if (fromUnit === 'fahrenheit') {
      celsius = (temperature - 32) * (5 / 9);
    } else if (fromUnit === 'kelvin') {
      celsius = temperature - 273.15;
    }
  
    // Convert Celsius to the desired unit
    if (toUnit === 'celsius') {
      result = celsius;
    } else if (toUnit === 'fahrenheit') {
      result = (celsius * (9 / 5)) + 32;
    } else if (toUnit === 'kelvin') {
      result = celsius + 273.15;
    }
  
    // Display the result
    document.getElementById('result-value').textContent = `${result.toFixed(2)} ${toUnit === 'celsius' ? '°C' : toUnit === 'fahrenheit' ? '°F' : 'K'}`;
  });