//import { name, age } from './bases/01-types'
//import { pokemonIds, bulbasaur } from './bases/02-objects'
//import { charmander } from './bases/03-class'
import { charmander } from './bases/06-decorators'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>${charmander.name}</h3>
  </div>
`