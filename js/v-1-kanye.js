//******** normal ** ****
// kanye west 
/*
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayQuotes(data));


}
const displayQuotes = quotes => {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = quotes.quote
      
    console.log(quotes.quote);

}


 */



// example : 1 **********

const loadQuotes2 = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data2 => displayQuotes2(data2))
}
const displayQuotes2 = data2 =>{
    const quoteElement2 = document.getElementById("quote2");
    quoteElement2.innerText = data2.quote;
    // // console.log(abc)
}
