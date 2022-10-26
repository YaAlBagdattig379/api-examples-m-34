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
         <button onclick="loadCountryName('${country.name}')">details</button>
    `
        //  <button onclick="getDetails('details')">details</button>

    // h3.innerText = country.name;
    // div.appendChild(h3);
    // const p = document.createElement('p');
    // p.innerText = country.capital;
    // div.appendChild(p);
    countriesDiv.appendChild(div);
});
}
const loadCountryName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    // fetch(url)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // p.innerText = name
     console.log(url)
}
// console.log('rest countries ')