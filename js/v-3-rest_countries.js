const  loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries =>{
    // 'for of' loop are used
//     for(const country of countries){
// console.log(country.name)
//     }

const countriesDiv = document.getElementById("countries");
// forEach loop are used to  over here as a looping 
countries.forEach(country => {
    // console.log(country)
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    div.classList.add('country');
    h3.innerText = country.name;
    div.appendChild(h3);
    const p = document.createElement('p');
    p.innerText = country.capital;
    div.appendChild(p);
    countriesDiv.appendChild(div);
});
    // console.log(countries)
}
// console.log('rest countries ')