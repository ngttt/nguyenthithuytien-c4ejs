let highscore = [45, 67, 56, 78];
console.log('High scores:');
for (let i = 0; i < highscore.length - 1; i++){
    for (let j = i+1; j<highscore.length; j++){
        if (highscore[j]> highscore[i]){
            let temp = highscore[i];
            highscore[i] = highscore[j];
            highscore[j] = temp;
        }
    }
}
for (let i = 0; i< highscore.length; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}
let newhigh = prompt('Nhap diem cao moi'); 
highscore.push(Number(newhigh));
console.log('Enter your new high score: ', newhigh);
for (let i = 0; i < highscore.length - 1; i++){
    for (let j = i+1; j<highscore.length; j++){
        if (highscore[j]> highscore[i]){
            let temp = highscore[i];
            highscore[i] = highscore[j];
            highscore[j] = temp;
        }
    }
}
console.log('High scores:');
for (let i = 0; i< highscore.length; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}
console.log('High score top 5:')
for (let i = 0; i< 5; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}
let newhigh1 = prompt('Nhap diem cao moi'); 
highscore.push(Number(newhigh1));
console.log('Enter your new high score: ', newhigh1);
for (let i = 0; i < highscore.length - 1; i++){
    for (let j = i+1; j<highscore.length; j++){
        if (highscore[j]> highscore[i]){
            let temp = highscore[i];
            highscore[i] = highscore[j];
            highscore[j] = temp;
        }
    }
}
console.log('High scores:');
for (let i = 0; i< highscore.length; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}
console.log('High score top 5:')
for (let i = 0; i< 5; i++){
    console.log(`${i+1}.${highscore[i]}`); // string formating
}