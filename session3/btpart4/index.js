let highscore = [45, 67, 56, 78];
console.log('High scores:');
for (let i = 0; i< highscore.length; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}
let a = prompt('nhap diem cao moi');
console.log('Enter your new high score: ',a);
highscore.push(a);
console.log('High scores:');
for (let i = 0; i< highscore.length; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}
