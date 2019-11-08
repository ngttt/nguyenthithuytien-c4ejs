//3  calculate properties of a circle
let r1 = prompt('Enter a radius');
function calcCircumfrence (radius)
{
    let circumfrence = 2 * radius * 3.14;
    return circumfrence;
}
let circumfrence = calcCircumfrence(r1);
console.log('The circumference is',circumfrence);
let r2 = prompt('Enter a radius');
function calcArea (radius)
{
    let area = (radius**2)*3.14;
    return area;
}
let area = calcArea(r2);
console.log('The area is ', area);