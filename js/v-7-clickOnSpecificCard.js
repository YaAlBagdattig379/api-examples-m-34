const searchFood =() =>{
    const  inputField = document.getElementById("search-field");
    const inputText = inputField.value;
    inputField.value = '';
    // type  load data from this website by name 
    //insert 'inputText' instead of'Arrabiata' by dynamically to get specific data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayResults(data.meals))
}
const displayResults = meals =>{
    const searchResults = document.getElementById("search-results");
    meals.forEach(meal => {
        // console.log(meal.idMeal)
        // console.log(meal.strMealThumb)
        // console.log(meal.strYoutube)
        // console.log(meal.strYoutube)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
          <div onclick="showCardDetails('${meal}')" class="card h-100">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}.</p>
                <button style="color:white;border-radius:7px;border:2px solid;background-color:green;"> buy now </button>
             </div>
           </div
        `;
        searchResults.appendChild(div);
        // console.log(meal)
    });
}

// show card details 
const showCardDetails = cardDetail =>{
    console.log(cardDetail.idMeal)
}