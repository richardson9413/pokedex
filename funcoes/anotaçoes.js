/*const offset = 0
const limit = 10
//const url = `https://pokeapi.co/api/v2/pokemon?offsert=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>

        </ol>

        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}">
      </div>  
    `

}
const pokemonList = document.getElementById(`pokemonList`)
// fetch puxa as informações, .tem e um metodo que diz " quando fetch fucionar chame essa função (function)"
// coloquei na outra pagina: fetch(url)
// função especial "=>" subistituia a function diminuindo a sua sitaxe e otimizando o codigo.
    
// converte o body,readableStream, quem vem no fetch (por padrão) em um json
    // coloquei na outra pagina:   .then((response) =>response.json())
    
    // toma como base o .then anterior
// coloquei na outra pagina: .then((jsonBody) => jsonBody.results)
    
    pokeapi.getPokemons().then((pokemons = [])=>{
        const newList = pokemons.map((pokemon) =>{
            return  convertPokemonToLi(pokemon)
        })
        const newhtml = newList.join ("")
        pokemonList.innerHTML += newhtml
    })
    /* Jeito antigo de fazer a lista (esta com um erro no listItens)
    const listItens= []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItens.push(convertPokemonToLi(pokemon))
        }
    
    // quande der erro utiliza-se .catch 
    //.catch((erro) => console.log(erro))
    
    //finally idependente se de erro ou não retorna alguma coisa. ESTA NO METODO FUNCTION NORMAL
    .finally(function(){
        console.log(`Requisição concluida`)
    })
    */
   /*
    pokeApi.getpokemonDetail = (pokemon) => {
        return fetch(pokemon.url).then((response) => response.json())
        
    }
    function convertPokemonToLi(pokemon){
        return `<li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
    
            </ol>
    
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}">
          </div>  
        `
    
    }*/
    function convertPokemonToLi(pokemon){
        return `<li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
          </div>  
       </li>
        `
      
      }