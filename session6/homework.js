// Đoạn code dưới đây mô phỏng 1 chương trình gồm 2 phần:
//  Phần 1:
//  -   Cho người dùng nhập vào một chuỗi các số, ngăn cách nhau bởi dấu cách (space)
//  -   In ra màn hình số lớn nhất trong dãy số người dùng vừa nhập

//  Phần 2:
//  -   Cho người dùng nhập vào một đoạn text có chứa dấu cách
//  -   In ra màn hình đoạn text người dùng vừa nhập, đã được loại bỏ hết dấu cách (space)

//  Yêu cầu:
//  -   Tối ưu đoạn code phía dưới bằng cách tìm ra chức năng chung của 2 phần, gộp lại thành một function,
//  sau đó sử dụng chung function đó cho cả 2 phần

// Lưu ý:
//  -   Đoạn code phía dưới chưa bao gồm việc kiểm tra input của người dùng. Mục đích chính của bài này
//  không phải là kiểm tra input của người dùng, vậy nên bạn hãy tạm công nhận input của người dùng luôn đúng.

// Part 1
let listNumbers = [];
let number = "";

let inputNumbers = prompt("Enter your list number, separated by space:");
let bbb = add(listNumbers);
console.log(bbb);
// for (let index = 0; index < inputNumbers.length; index++) {
    
//     if (inputNumbers[index] !== " ") {
//         number += inputNumbers[index];
//     } else {
//         number = "";
//     }

//     if (number !== "") {
//         listNumbers.push(parseInt(number));
//     }        
// }

// Phần code tìm giá trị lớn nhất
let maxNumber = -999999;
for (let index = 0; index < listNumbers.length; index++) {
    if (listNumbers[index] > maxNumber) {
        maxNumber = listNumbers[index];
    }
}

console.log(maxNumber);


// Part 2
let sentence = prompt("Enter your sentence, separated by space:");
let sentenceNoSpace = "";
let aaa = add(sentence);
console.log(aaa);
function add(array)
{
    let newarray = [];
    for(let index=0; index<array.length; index++)
    {
        if(array[index]!==" ")
        {
            newarray += array[index];
        }
    }
    return newarray;
}

// Gợi ý:
//  -   Viết một function nhận vào một parameter là một string bất kỳ
//  -   Return ra một string không chứa dấu cách