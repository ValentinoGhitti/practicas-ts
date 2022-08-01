import { PokeapiAdapter, PokeapiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';
import { Move, PokeapiResponse  } from '../interfaces/pokemonapi-response.interface';

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter
    ) {}
    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }
    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }
    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        return data.moves;
    }
}
const pokeApiAxios = new PokeapiAdapter();
const pokeApiFetch = new PokeapiFetchAdapter();

export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxios );

charmander.getMoves();