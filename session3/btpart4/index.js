let highscore = [45, 67, 56, 78];
function high (array)
{
    console.log('High scores:');
    for (let i = 0; i< array.length; i++){
        console.log(`${i+1}.${array[i]}`); // string formating
}
}
console.log(high(highscore));
let a = Number(prompt('nhap diem cao moi'));
console.log('Enter your new high score: ',a);
highscore.push(a);
console.log(high(highscore));
