let distric = ['ST', 'BĐ', 'BTL', 'CG', 'ĐĐ', 'HBT'];
let people = [150.300, 247.100, 333.300, 266.800, 420.900, 318.000];
let min = people[2];
let place1 = 0;
let place2=0;
for( let j=0; j<people.length; j++){
        if(people[j]<min){
            min = people[j];
            place1 = j;
        }
    }
console.log('Quan co chi so dan thap nhat: ')
console.log(min);
console.log(distric[place1]);
let max = people[3];
for (let i =0; i<people.length; i++){
    if(people[i]>max){
        max = people [i];
        place2 = i;
    }
}
console.log('Quan co chi so dan cao nhat');
console.log(max);
console.log(distric[place2]);
let km = [117.43, 9.224, 43.35, 12.04, 9.96, 10.09];
let pd = [];
for (let i=0; i<6; i++){
    let a= people[i]/km[i];
    pd.push(a);
}
console.log('List mat do dan so');
console.log(pd);
let sumpd=0;
for ( let i = 0; i< 6; i++){
    sumpd= sumpd + pd[i];
}
console.log('tong mat do dan so');
console.log(sumpd);
let avgpd = sumpd/distric.length;
console.log('Mat do dan cu trung binh');
console.log(avgpd);
