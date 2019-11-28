// const title = document.getElementById('title');
// console.dir(title); // trả về object
// title.innerText = 'DOM'; // update 1 cai key trong object => treen trang web chỉ hiện chữ DOM nhưng bên phần cosole vẫn là dom intro
// // const contentElement = document.getElementsByClassName('content'); //luôn trả về 1 array vì class có thể xuất hiện nhiều lần
// // console.log(contentElement);
// // for (let i=0; i<contentElement.length; i++)
// // {
// //     contentElement[i].innerText = 'DOM content';
// // }
// // const tagname = document.getElementsByTagName('p');
// // console.log (tagname); // trả về 1 object
// // đổi màu qua lại mỗi lần click vào thì dùng DOM click, moúeover là rê chuột qua
// title.addEventListener('mouseover',function(){
//     // title.style.color = 'red'; //viết css trên javascrip
//     if (title.style.color === 'red')
//     {
//             title.style.color = 'green';
//     }
//     else {
//         title.style.color = 'red';
//     }
// })

// key: nextElementSibling sẽ trỏ tới thằng tiếp thep của nó trong html, mún in ra thì là key: innerText
function action (event) 
{
    const number = Number(event.target.innerText);
    event.target.innerText = number +1;
}
const numberElement = document.getElementsByClassName('content');
for (let i=0; i<numberElement.length; i++)
{
    numberElement[i].addEventListener('click',action);
}



//tạo ra thẻ html
// khi bấm nút sẽ hiện ra những con số theo lần nhấn chuột
let count = 0;
const button = document.getElementById('button');
button.addEventListener('click',function(event)
{
    const container = document.getElementById('container');
    container.innerHTML += `<p>` + count +`</p>`;
    count +=1;
});