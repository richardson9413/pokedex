
const pokemonList = document.getElementById(`pokemonList`)
const loadMoreButon = document.getElementById(`loadMoreButton`)
const limit = 10
let offset = 0
const maxRecord = 151

// .map= mapeia uma lista tipo un "FOR"  de "LI"(CONVERTpOKEMONtOlI)= converte a lista para uma lista, .JOIN: Junta a lista e não coloca nada para fazer a separação ""
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{       
    const newhtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
         <div class="detail">
            <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>  
      </li> 
        ` ).join("")
    pokemonList.innerHTML += newhtml
})
} 
loadPokemonItens(offset, limit)
loadMoreButon.addEventListener(`click`, () => {
  offset += limit

  const qtdRecordNextPage = offset + limit

  if(qtdRecordNextPage >= maxRecord){
    const newLimit =  maxRecord - offset
    loadPokemonItens(offset, newLimit)
    loadMoreButon.parentElement.remove(loadMoreButon)
  }else{
    loadPokemonItens(offset, limit)
  }
})  
    
    
    
    
    