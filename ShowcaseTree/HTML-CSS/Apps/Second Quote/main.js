let newQuoteButton = document.querySelector('#generate-new-quote');
newQuoteButton.addEventListener('click', fetch)

endpoint = ('https://type.fit/api/quotes')

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.status);
        }
        const json = await response.json();
        displayQuote(json.message);
    }   
        catch (err) {
        alert('Error encountered.')
        }
}

// function displayQuote(quote) {
//     const quoteText = document.querySelector('.quote-text');
//     quoteText.textContent = quote;
// }

// fetch("")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });