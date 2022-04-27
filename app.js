// The forecast today is 293 Kelvin
const kelvin = 293;
// Celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;
// When you convert from Celsius to Fahrenheit, you often get a decimal number.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// Convert celsius to the Newton scale
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)