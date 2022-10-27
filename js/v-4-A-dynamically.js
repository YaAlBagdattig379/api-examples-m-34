const  loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries =>{

const countriesDiv = document.getElementById("countries");
// forEach loop are used to  over here as a looping 
countries.forEach(country => {
    // console.log(country)
    const div = document.createElement('div');
    div.classList.add('country');
    // dynamically h3 and p set up here 
    div.innerHTML = `
         <h3>${country.name}</h3>
         <p>${country.capital}</p>
         <button onclick="loadCountryByName('${country.name}')">Details</button>
    `
        //  <button onclick="getDetails('details')">details</button>
    countriesDiv.appendChild(div);
});
}

const loadCountryByName = name => {
    // name are dynamically used 
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
    // .then(data => console.log(data[0].name))
    // console.log(url)
}

const displayCountryDetail = country =>{
    const countryDetails = document.getElementById("countrySection");
    countryDetails.classList.add('countryDetails');
    countryDetails.innerHTML = `
    <h4>name :  ${country.name.common}</h4>
    <h5> population : ${country.population}</h5>
    <h5>capital : ${country.capital}</h5>
    <h6>region : ${country.region}</h6>
    <img width= 50% src="${country.flags.png}" alt="">
    `
}