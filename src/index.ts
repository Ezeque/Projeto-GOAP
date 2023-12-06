import {actions} from './actions'
import {Npc} from './npc'
import {State} from './state'

const state: State = {
  arcoDisponivel: true,
  semArco: true,
  possuiAnimal: false,
  machadoDisponivel: true,
  semMachado: true,
  semLenha: true,
  fogueiraAcesa: false,
  alimentado: false,
}

const goal: State = {
  alimentado: true,
}

const personagem = new Npc(state, actions)

console.log(personagem.state)

personagem.goal = goal

while (personagem.plan.length > 0) {
  personagem.execute()
}

console.log(personagem.state)
