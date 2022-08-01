import axios from 'axios'
import { Move ,PokeapiResponse  } from '../interfaces/pokemonapi-response.interface';
export class Pokemon {
    get imageUrl():string {
        return `https://pokemon.com/${this.id}`;
    }
    constructor( 
        public readonly id: number, 
        public name: string,
        //public imageUrl: string
        ) {}
    
    public scream() {
        console.log(`${this.name.toUpperCase()}!!`);
    }
    public speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    public async getMoves(): Promise<Move[]> {
        const {data} = await axios.get<PokeapiResponse >('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }
}

export const charmander = new Pokemon(2, 'charmander');

//console.log(charmander);
//charmander.scream();
//charmander.speak();

console.log(charmander.getMoves());