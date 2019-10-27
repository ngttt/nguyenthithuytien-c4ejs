let list1 = [5, 1, 8, 92, 7,30];
console.log('All event numbers: ');
for(let i=0; i<list1.length; i++){
    if (list1[i] % 2==0){
        console.log(list1[i]);
    }
}
let list2 = prompt('nhap so cach nhau boi dau phay');
console.log(`Enter a list of numbers, separated by ',': `, list2);
console.log('All event numbers from entered list: ');
let numberlist = list2.split(',');
for(let i=0; i<numberlist.length; i++){
    if (numberlist[i] % 2==0)
    console.log(numberlist[i]);
}