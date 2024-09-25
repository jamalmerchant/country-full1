const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountry(data))
}

loadCountries()

const displaycountry = (countries) => {
    //   console.log(countries);

     const ui = document.getElementById('countries')
      countries.forEach(country => {
        console.log(country);
        
      const div = document.createElement('div')
      div.classList.add('country')
        div.innerHTML = `
        <img class="w-full h-55 border border-2"src="${country.flags.png}" alt="">
        <h3 class="text-2xl mt-2"> name: ${country.name.common}</h3>
        <p class="my-5">capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')"class="btn btn-primary btn-outline w-full">see details</button>

        `
         ui.appendChild(div)
      })
        
    
      
}

const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`
  console.log(url);
  fetch(url)
  .then(res=>res.json())
  .then(data => displaycountrydetails(data[0]))
  
  
}

const displaycountrydetails = (country)=>{
  console.log(country);
  
     const detailsdiv = document.getElementById('country-details')
     detailsdiv.innerHTML = `
     <img class="w-100 h-88 mx-auto border border-2"src="${country.flags.png}" alt="">
        <h3 class="text-2xl mt-2"> name: ${country.name.common}</h3>
        <p class="my-5">capital: ${country.capital}</p>
        <p class="my-5">population: ${country.population}</p>
        <p class="my-5">region: ${country.region}</p>
       
     
    `

    window.scrollTo({
         top: 0,
         behavior: 'smooth'
    });

    

    
}
