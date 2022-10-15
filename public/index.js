function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let countValue = 0

    async function getUrl(count) {
        let response = await fetch("http://localhost:9001/counter", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "value": count
            }) 
        })
        console.log(response)
        // convert json to javascript objects
        let responseObject = await response.json()
        console.log(responseObject['value'])
        countValue = await responseObject['value']
        countContainer.textContent = await countValue;
    }
        

    getUrl(50)

    

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    // countContainer.textContent = countValue;
}
main()