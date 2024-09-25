document.getElementById("search-button").addEventListener('click',function(){
    // search text get by click on button
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value
    // console.log(searchText);
    
//    api fetch
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => displayFoodsData(data?.meals)) // pass the data to display foods data function
      
    // clear the input
    searchInput.value = ""
    
})
// in foods reciecev the array data + loop in array and get single data from array
   const displayFoodsData = (foods) => {
    if (foods == null) {
      alert("something went wrong")
      return
    }
    
   const ui = document.getElementById('foods-div')
    foods?.map((food) => {
      console.log(food);
      const div = document.createElement('div')
      div.classList.add("card")
      div.classList.add("border-2")
      div.innerHTML = 
        `
          <figure>
          <img
            src="${food?.strMealThumb}"
            alt="food" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${food?.strMeal}</h2>
          <p>${food?.strInstructions?.slice(0, 180)}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-outline w-full">see details</button>
          </div>
        </div>
      
      `
   
    
   ui.appendChild(div)
   
        
   
   
   
   
   
})

    
    
}