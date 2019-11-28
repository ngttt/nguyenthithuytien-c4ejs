// get data qua api
async function getIdolData(numberOfIdol) {
    const respone = await fetch (`https://kpop-idol.mindx.edu.vn/api/v1/idols?_end=${numberOfIdol}`);
    const data = await respone.json();
    return data;
}

async function handleSubmit() 
{
    const container = document.getElementById('container');
    container.innerHTML=""; // xóa đi làm mới lại dữ trang đó
    const numberIdol = document.getElementById('number-idol').value;
    const dataname = await getIdolData(numberIdol);
    for(let i=0 ; i< dataname.data.length; i++)
    {
        const idol = dataname.data[i];
        container.innerHTML += `<p>stage name: ${dataname.data[i].stageName}</p>`;
    }

}

function main()
{
    // lấy số từ ô button
    const button = document.getElementById('submit');
    button.addEventListener('click', handleSubmit)
}

main();