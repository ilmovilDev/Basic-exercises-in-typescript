//import { age, name } from './bases/01-types'
//import { charmander } from './bases/03-classes'
//import { charmander } from './bases/04-injection'
//import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorator'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Hello, ${charmander.name}.</h2>
  </div>
`