// console.log("hello",34)
const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>displayCountries(data));

}
loadCountries()
const displayCountries = countries =>{
// console.log(countries[0]);
/*// for of loop
for(const country of countries){
    console.log(country);
}/*/
// forEach are used here
const section = document.getElementById("Section"); 
countries.forEach(country => {
    // console.log(country.name)
    const div = document.createElement('div');
    div.classList.add("styleByClass")
    div.innerHTML = `
    <h1>name :  ${country.name}</h1>
    <h2>capital : ${country.capital}</h2>
    <h3>popultion :  ${country.population}</h3>
    <button onclick="loadCountryByName('${country.name}')">Detail</button>
    `// <button onclick="loadCountryByName('double single comma mandatory ')">Detail</button>
   
    section.appendChild(div);
});
}
const loadCountryByName = (name) =>{
    const url = (`https://restcountries.com/v2/name/${name}`)
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountryDetail(data))
    // console.log(url);
}
const displayCountryDetail = (country) =>{
    console.log(country[0].flags.svg)
    const countryDetails = document.getElementById("country-detail");
    countryDetails.classList.add('countryDetailsCls')
    // countryDetails.
    // const sustainDiv = document.createElement("div");
    countryDetails.innerHTML =  `
    <h1>Name :  ${country[0].name}</h1>
    <h2>numericCode :  ${country[0].numericCode}</h2>
    <h3>capital :  ${country[0].capital}</h3>
    <img width="50%"src="${country[0].flags.svg}" alt="">
    <h4> population : ${country[0].population}</h4>
    `
}