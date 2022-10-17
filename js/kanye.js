// kanye west 
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayQuotes(data));


}
const displayQuotes = quotes => {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = quotes.quote
    //   console.log(quotes.quote);
}