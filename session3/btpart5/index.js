let highscore = [45, 67, 56, 78];
console.log('High scores:');
function abc (array)
{
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i+1; j<array.length; j++){
            if (array[j]> array[i]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log (abc(highscore));
// for (let i = 0; i< highscore.length; i++){
//     console.log(`${i+1}.${highscore[i]}`); // string formating
// }
let newhigh = prompt('Nhap diem cao moi'); 
highscore.push(Number(newhigh));
console.log('Enter your new high score: ', newhigh);
console.log('High scores:');
console.log(abc(highscore));
// for (let i = 0; i< highscore.length; i++){
//     console.log(`${i+1}.${highscore[i]}`); // string formating
// }
console.log('High score top 5:')
for (let i = 0; i< 5; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}
let newhigh1 = prompt('Nhap diem cao moi'); 
highscore.push(Number(newhigh1));
console.log('Enter your new high score: ', newhigh1);
console.log('High scores:');
console.log(abc(highscore));
// for (let i = 0; i< highscore.length; i++){
//     console.log(`${i+1}.${highscore[i]}`); // string formating
// }
console.log('High score top 5:')
for (let i = 0; i< 5; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}