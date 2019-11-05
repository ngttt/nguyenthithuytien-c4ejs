//PART 7
//10
let character = {
    name: 'Light',
    age: 17,
    strength: 8,
    defense: 10,
    HP: 100,
    backpack: ['Shield', 'Bread Loaf'],
    gold: 100,
    level: 2 
}
//11
character.gold += 50;
//12
character.backpack += 'FlintStone';
//13
character.pocket = ['MonsterDex', 'Flashlight'];
console.log(character);
//PART 8
//14
let skill = [
    {
        name: 'Tackle',
        minium_level: 1,
        damage: 5,
        hit_rate: 0.3
    },
    {
        name: 'Quick attack',
        minium_level: 2,
        damage: 3,
        hit_rate: 0.5
    },
    {
        name: 'Strong Kick',
        minium_level: 4,
        damage: 9,
        hit_rate: 0.2
    }
]
//15
for (let k in skill)
    {
        console.log(k, skill[k]);
    }
//16
for ( let i = 0; i < skill.length; i++)
{
    console.log(`${i+1}: ${skill[i].name}`);
}
//PART 9
//17,18
let e1 = prompt('Chon skill thu 1');
if ( Number(skill[ Number(e1) - 1 ].minium_level) > Number(character.level))
{
         console.log('khong cho phep');
}
else
{
     let random = Math.random(0,1);
     console.log(random);
     if(random > skill[Number(e1)].hit_rate )
     {
         console.log('skill da khong trung muc tieu');
     }
     else
     {
     console.log(`Damage: ${skill[e1-1].damage}`);
     }
}
let e2 = prompt('Chon skill thu 2');
if ( Number(skill[ Number(e2) - 1 ].minium_level) > Number(character.level))
{
         console.log('khong cho phep');
}
else
{
    let random = Math.random(0,1);
    console.log(random);
    if(random > skill[Number(e2)].hit_rate )
     {
         console.log('skill da khong trung muc tieu');
     }
     else
     {
     console.log(`Damage: ${skill[e2-1].damage}`);
     }
}
let e3 = prompt('Chon skill thu 3');
if ( Number(skill[ Number(e3) - 1 ].minium_level) > Number(character.level))
{
         console.log('khong cho phep');
}
else
{
    let random = Math.random(0,1);
    if(random > skill[Number(e3)].hit_rate )
     {
         console.log('skill da khong trung muc tieu');
     }
     else
     {
     console.log(`Damage: ${skill[e3-1].damage}`);
     }
}



