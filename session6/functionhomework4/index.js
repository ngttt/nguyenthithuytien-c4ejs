//4 a converter
let numberC1 = prompt('Enter the number of celsius temperature for changing to fahrenheit temperature')
function celsiusToFahrenheit (number)
{
    let numberF =number*1.8 +32 ;
    return numberF;
}
let numberF1=celsiusToFahrenheit(numberC1);
console.log(`${numberC1}°C is ${numberF1}°F`);
let numberF2 = prompt('Enter the number of fahrenheit temperature for changing to celsius temperature')
function celsiusToFahrenheit (number)
{
    let numberC =number*1.8 +32 ;
    return numberC;
}
let numberC2=celsiusToFahrenheit(numberF2);
console.log(`${numberF1}°F is ${numberC1}°C`);
