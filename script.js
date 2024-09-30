//fetch = Function used for making HTTP requests to fetch resources.
//       (JSON style data, images, files)
//    Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
//    fetch(url, {options})
//fetch("url",{method:"GET or POST"})

// fetch("https://pokeapi.co/api/v2/pokemon/mew")
//   .then((response) => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource");
//     }
//     return response.json()
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     return console.error(err);
//   });



async function fetchData() {
  try {

    const pokemonName = document.getElementById('pokemonName').value.toLowerCase().trim();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite');

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    const pokemonType = data.types[0].type.name;
    // console.log(pokemonType);
    const typeOfPok = document.getElementById('typeOfPokemon');
    typeOfPok.innerHTML =`The type of pokemon is: ${pokemonType}`;
    
  } 
  catch (error) {
    const wrongPokemon = document.getElementById('notThere');
    wrongPokemon.innerHTML = `No, such Pokemon exist`
    console.error(error);
  }
}

document.querySelector('#submit').addEventListener('click',fetchData)