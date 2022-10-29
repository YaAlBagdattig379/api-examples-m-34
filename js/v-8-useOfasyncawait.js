const searchFood =() =>{
    // debugger;
    const  inputField = document.getElementById("search-field");
    const inputText = inputField.value;
    inputField.value = '';
    const notFoundResults = document.getElementById("notFoundResults");
    notFoundResults.textContent = '';
    if(inputText == 0){
        const divNotFount = document.createElement("div");
        divNotFount.innerHTML = ` 
        <h1 class="text-warning;">sorry, results is not found !</h1>
        `
        notFoundResults.appendChild(divNotFount);
    }

    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}
        `
        fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data.meals))
    }
 
}
const displayResults = meals =>{
    const searchResults = document.getElementById("search-results");
    // clean data 
    searchResults.textContent = '';
    // searchResults.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        // console.log(meal.idMeal)
        // console.log(meal.strMealThumb)
        // console.log(meal.strYoutube)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
          <div onclick="loadMealDetails('${meal.idMeal}')" class="card h-100">
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
// v-7
// show card details by name id 
const loadMealDetails = async idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
    `
    const res = await fetch(url);
    const data = await res.json();
    displaySingleMeal(data.meals[0]);
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displaySingleMeal(data.meals[0]))
    //  console.log(url)
} 
const displaySingleMeal = meal =>{
    // console.log(meal);
    const displayMeal = document.getElementById("show-mealDetails");
    displayMeal.textContent = ''; 
    // displayMeal.innerHTML = ''; 
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img  src="${meal.strMealThumb}" alt="Card image cap">
        <div class="card-body">
           <h3 class="card-title">${meal.strMeal}</h3>
           <h5 class="card-title">${meal.idMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(20,200)}.</p>
           <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    displayMeal.appendChild(div);
} 