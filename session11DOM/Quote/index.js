async function getData ()
{
    try {
    const respone = await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json');
    const data = await respone.json();
    return data;
    }
    catch (err)
    {
        console.log(err);
    }
}
async function handleSubmit ()
{
    let dataResult = await getData();
    let number = Math.floor(Math.random() * dataResult.length );
    const container = document.getElementById('container');
    container.innerHTML = `<p> ${dataResult[number].quoteText} </p> 
                            <a> ${dataResult[number].quoteAuthor} </a>`;
}

function click ()
{
    const click = document.getElementById('click');
    click.addEventListener( 'click', handleSubmit);
}
click();