import { Move, PokeapiResponse } from "../interfaces/pokeaoi-response.interface";
import { HttpAdapter, PokeApiAxiosAdapter } from "../api/pokeApi.adapter";

export class Pokemon{

    get imageUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor( 
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
     ){}

     public scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
     }

     async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
     }

}

const pokerApiAxios = new PokeApiAxiosAdapter();
//const pokerApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(1, 'charmander', pokerApiAxios);
//export const charmander = new Pokemon(1, 'charmander', pokerApiFetch);

console.log(charmander.getMoves());