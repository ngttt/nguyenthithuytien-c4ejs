// 1
let store = {
   HP : 20,
    DELL : 50,
    MACBOOK: 12,
    ASUS:30
}
//2
console.log(store.MACBOOK);
//3
let a = prompt('nhap hang');
console.log(store[a]);
//4
store.TOSHIBA =10;
console.log(store['TOSHIBA']);
//5
let your1 = prompt('nhap hang');
let your2 = prompt('nhap so luong');
store[your1] = Number(your2);
console.log(store);
//6
store.DELL +=10; 
store.MACBOOK -= 2;
console.log(store);
//7
for (let k in store)
{
    console.log(k,store[k]);
    console.log(':');
}
//8
let sum = 0;
for (let k in store)
{
    sum += store[k];
}
console.log('tong cong la: ',sum);
//9
store.FUJITSU =15;
store.ALIENWARE=5;
console.log(store);
//10
for (let k in store)
{
    console.log(k,store[k]);
    console.log(':');
}
