
// function calc(input, number1, number2){
// let result = 0;
// if(input == '+')
// {
//     result = number1+number2;
// }
// else 
// if(input == '-')
// {
//     result = number1-number2;
// }
// else 
// if(input == '*')
// {
//     result = number1*number2;
// }
// else 
// if(input == '/')
// {
//     if(Number(number2)==0)
//     {
//         console.log('Khong hop le');
//     }
//     else
//     {
//         result = number1/number2;
//     }
// }
// return result;
// }
// function genaratequiz()
// {
//     let a = Math.random(0,10);
//     let number1  = Math.floor(a*10);
//     let b = Math.random(0,10); 
//     let number2 = Math.floor(b*10);
//     let c = Math.floor((Math.random(0,2))*10);
//     let sum = number1+number2+c;
//     console.log(`${number1} + ${number2} = ${sum}`);
//     let final = plus (number1,number2,sum);
//     return final;
// }
// function plus (number1,number2,sum)
// {
//     if(number1+number2==sum)
//     return 1;
//     else return 2;
// }
// let score = 0;
// function total(){
//     let choose= prompt('1.True or 2.False')    
//     let final=genaratequiz();
//     return final;
// }
// for(let i =0; i<11; i++)
// {
//     let final = total();
//     if(final==choose)
//     {
//         score ++;
//     }
//     else score--;
// }
function filterodd(array)
{
    let newarray = [];
    for(let i=0; i<array.length; i++)
    {
        if(array[i]%2==0)
        {
            newarray.push(array[i]);
        }
    }
    return newarray;
}
let res = filterodd([1,2,3,6,5,9,7]);
console.log(res);