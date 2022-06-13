
let newQuoteButton = document.querySelector('#generate-new-quote');
newQuoteButton.addEventListener('click', fetch)

function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2090aa3778mshd73a3266d4170b0p19f22ajsn4577bc9ef9f5',
		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
	}
};

fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// displayQuote(fetch.response)

// endpoint = ('https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino')

// async function getQuote() {
//     try {
//         const response = await fetch(endpoint, autho);
//         if (!response.ok) {
//             throw Error(response.status);
//         }
//         const json = await response.json();
//         displayQuote(json.message);
//     }   
//         catch (err) {
//         alert('Error encountered.')
//         }
// }

// function displayQuote(quote) {
//     const quoteText = document.querySelector('.quote-text');
//     quoteText.textContent = quote;
// }