interface IPokemon{
    id: number,
    name: string,
    age?: number
}

export const bulbasaur: IPokemon = {
    id: 1,
    name: 'Bulbasaur'
}

const charmander: IPokemon = {
    id: 1,
    name: 'charmander',
    age: 8
}

export const pokemons: IPokemon[] = []

pokemons.push( bulbasaur, charmander);

console.log(pokemons)
