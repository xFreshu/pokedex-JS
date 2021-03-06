import './styles/reset.scss'
const pokeContainer = document.getElementById('container');
export const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const main_types = Object.keys(colors)


//display pokemon by for loop
const fetchPoke = async () => {
    for (let i = 1; i <= 20; i++) {
        await getPokemon(i)
    }
}
//fetch async URL
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
};

//create a pokemon card
function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemonCard')
    let pokeInnerHTML;
    const pokemonIndex = `#${pokemon.id.toString().padStart(3, '0')}`
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const pokeTypes = pokemon.types.map(type => type.type.name)
    const pokeType = main_types.find(type => pokeTypes.indexOf(type) > -1)
    pokeInnerHTML = `
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" alt="pokemon gif" class="pokemon__img">
    <span class="pokemon__index">${pokemonIndex}</span>
    <span class="pokemon__name">${name}</span>
    <span class="pokemon__type">Type: ${pokeType}</span>
`;
    pokemonEl.style.backgroundColor = colors[pokeType];
    pokemonEl.innerHTML = pokeInnerHTML;
    pokeContainer.appendChild(pokemonEl)
}

fetchPoke();


