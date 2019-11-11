async function getData ()
{
    try
    {
        const respone = await fetch ("https://sample.mindx.edu.vn/c4e/api/posts");
        const data = await respone.json();
        console.log("đây là data",data);
    }
    catch(err)
    {
        console.log(err);
    }
}
async function postData(data)
{
    const url = "https://sample.mindx.edu.vn/c4e/api/posts";
    await fetch (url,{
        method: "post",
        body: JSON.stringify(data),
        headers: 
        {
            "Content-type": "application/json"
        }
    });
}
const blog = {
    title : "ʕ •ᴥ• ʔ",
    author : "đây là Tiên nè hehe",
    content : "(ノ｀⌒´)ノ┫：・┻┻  muốn lật bàn vì khó nhớ"
}

async function main()
{
    await getData();
    await postData(blog);
}
main();