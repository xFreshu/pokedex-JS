import './styles/reset.scss'
const pokeContainer = document.getElementById('container')

const getPokemon = (id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(res => createPokemonCard(res))

}

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    let pokeInnerHTML;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    pokeInnerHTML = `${pokemon.id + '. ' + name}`;

    pokemonEl.innerHTML = pokeInnerHTML;

    pokeContainer.appendChild(pokemonEl)
}

function fetchPoke() {
    for (let i = 1; i <= 20; i++) {
        getPokemon(i)
    }
}

fetchPoke();
