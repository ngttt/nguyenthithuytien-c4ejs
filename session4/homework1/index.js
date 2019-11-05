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
let a = prompt('nhap hang can tim');
console.log(store[a]);
//4
store.TOSHIBA =10;
console.log(store['TOSHIBA']);
//5
let your1 = prompt('nhap hang can them');
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
//PART 4
//1
let price = {
    HP: 600,
    DELL: 650,
    MACBOOK: 12000,
    ASUS: 400,
    ACER: 350,
    TOSHIBA: 600,
    FUJITSU: 900,
    ALIENWARE: 1000
}
    price[your1] = 100; // them gia cua hang duoc nguoi dung nhap
//2
console.log('gia cua 1 may ASUS: ',price.ASUS);
//3
console.log(price);
let n = prompt('Nhap hang can tra gia')
console.log(n,' gia tien: ', price[n]);
//PART 5
//4
let math = price.ASUS * 5;
console.log('tong gia tri don hang cua 5 may asus: ', math );
//5
let cus = prompt('Nhap hang can mua');
let num = prompt('Nhap so luong may can mua');
let math1 = price[cus] * Number(num);
console.log('tong gia tri don hang ',cus, ' voi so luong la ', num, ' la: ',math1);
//6
console.log('ton kho');
store.ASUS -= 5;
store[cus] -= num ;
//7
for (let k in store)
{
    console.log(k, store[k]);
    console.log(':');
}
//PART 6
//8
for ( let k in store)
{
        console.log('tong gia tri cua may ', k, price[k]*store[k]);
}
//9
let sumstore = 0;
for (let k in store)
{
    sumstore = sumstore + (price[k]*store[k]);
}
console.log('tong gia tri cua kho', sumstore);