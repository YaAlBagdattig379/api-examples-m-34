const searchFood = () =>{
    const serchField = document.getElementById("serch-field");
    const searchText = serchField.value;
    serchField.value = '';
    // websit : link by 'mealBd  by name'
    // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
    // console.log(url)
}