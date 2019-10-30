// let movie = {
//     name: 'hotel transylvana',
//     year: 2012,
//     type: 'animation'
// }
// console.log(movie.name, movie.type);
// let key = name;
// console.log(movie[key]);
// //read all
// movie.actor = 'bat';
// let a = prompt('enter the key');
// let a1 = prompt('enter the value');
// movie.a=a1;
// for (let k in movie)
// {
//     console.log(k, movie[k]);
// }
// movie.name = 've nha di con';
// movie.type = 'series';
// console.log(movie);
// //delete
// delete movie.type;
// console.log(movie);

let quiz = [
    {
    question: 'con nhen co may chan?',
    choices: ['1 chan', 
    '2 chan', 
    '3 chan', 
    '6 chan'],
    answer: 3
},
{
    question: 'con ga co may chan?',
    choices: ['1 chan', 
    '2 chan', 
    '3 chan', 
    '6 chan'],
    answer: 1
}
]
for (let i = 0; i< quiz.length ; i++)
{
    console.log(quiz[i].question);
    for (let j = 0 ; j < quiz[i].choices.length; j++ )
    {
        console.log(`${j+1}: ${ quiz[i].choices [j] }`);
    }
    let your = prompt('Your answer 1 or 2 or 3 or 4');
    if (your -1 == quiz[i].answer)
    {
        console.log('yayyyyyyy!');
    }
    else
    console.log('ohno');
}
// console.log(quiz.question);
// for (let i =0; i< quiz.choices.length; i+1)
// {
//     console.log(i+1, quiz.choices[i]);
// }
// let your = prompt('Choose your answer');
// if(your -1  == quiz.answer)
// {
//     console.log('You are right');
// }
// else {
//     console.log('Hope you lucky in another time');
// }
