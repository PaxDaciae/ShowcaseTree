

let newQuoteButton = document.querySelector("#js-new-quote");
newQuoteButton.addEventListener('click', getQuote);

let faceBookButton = document.querySelector('#js-facebook');
function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
  }

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayQuote(json.message);
    }   catch (err) {
        console.log(err)
        alert('Failed to get quote');
    }
    // console.log("quote button was clicked");
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

