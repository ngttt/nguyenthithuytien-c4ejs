let maxage = 100;
function caculateSupply(age,amountperday)
{
    let amount = (maxage - age) * amountperday;
    return amount;
}
for (let i = 0; i< 3; i++)
{
    let age = prompt ('How old are you?');
    let amountperday = prompt('How many snack do you eat for one day?');
    let amount = caculateSupply(age,amountperday);
    console.log(`You will need ${amount} you last to until the ripe old age of ${maxage}`);
}