// function generateList(text)
// {
//     let array = text.split(' ');
//     return array;
// }

// let listNumbers = generateList("2 34 64 245 4");
// console.log(listNumbers);



//       PROMISE




// function diCho(tacDuong) {
//     return new Promise ( function (resolve, reject) {
//         console.log('Dang di cho');
//         if(tacDuong==true){
//             reject('khong di duoc');
//         }
//         else {
//         resolve("rau");
//         }
//     })
// }
// let result = diCho(true).then(function(item){
//     console.log(item);
// }).catch(function(reason){
//     console.log(reason);
// });

//C1 get
const res = fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members").then(function(respone){
    respone.json().then(function(data){
        console.log("cach dung promise ",data);
    })
})
console.log(res);
 
//C2 dung async : bat dong bo va await
async function getData()
{
    try 
    {
        const respone = await fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members");
        const data = await respone.json();
        console.log("cach dung await", data);
    }
    catch (err) 
    {
        console.log(err);
    }
}
getData();

//Post Data

async function postData(data)
{
    const url = "http://5dc6a9cb317717001434f796.mockapi.io/api/members"
    await fetch (url, {
        method: "post",
        body: JSON.stringify(data),
        headers: 
        {
            "Content-type": "application/json"
        }
    });
}
const data = {
    name : "thuy tien",
    gender : 2,
    role : "students"
}


//Put

// async function updateData(id,data)
// {
//     const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
//     await fetch (url, {
//         method: "put",
//         body: JSON.stringify(data),
//         headers: 
//         {
//             "Content-type": "application/json"
//         }
//     });
// }
// 

//Delete

async function deleteData(id,data)
{
    const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
    await fetch (url, {
        method: "delete"
    });
}


// muon chay tuan tu

async function main ()
{
    await postData(data);
    await updateData(8,data);
    await deleteData(19,data);
    await getData();
    console.log ("Done");
}