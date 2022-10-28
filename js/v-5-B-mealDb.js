const searchFood = () =>{
    const inputField = document.getElementById("search-field");
    const inputText = inputField.value;
    inputField.value = '';
    // type  load data from this website by name 
    // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    // console.log(url);
}