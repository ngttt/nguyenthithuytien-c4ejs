//1 dog years
function caculateDogAge(age)
{
    age = age *7;
    return age;
} 
for (let i=0; i<3; i++) { 
    let dogage = prompt('Your age of dog?');
    let age = caculateDogAge(dogage);
    console.log(`Your doggie is ${age} years old in dog years`);
}
