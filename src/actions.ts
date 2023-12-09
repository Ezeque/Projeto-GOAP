import {State} from './state'

export interface Action {
  name: string
  precond: State
  effects: State
  cost: number
}

const pegarArco: Action = {
  name: 'Pegar Arco',
  precond: {
    arcoDisponivel: true,
    semArco: true,
  },
  effects: {
    semArco: false,
  },
  cost: 2,
}

const cacarArco: Action = {
  name: 'Caçar com Arco',
  precond: {
    semArco: false,
    possuiAnimal: false
  },
  effects: {
    possuiAnimal: true,
  },
  cost: 5,
}

const cacarSemArco: Action = {
  name: 'Caçar Sem Arco',
  precond: {
    semArco: true,
    possuiAnimal: false
  },
  effects: {
    possuiAnimal: true
  },
  cost: 10,
}

const pegarMachado: Action = {
  name: 'Pegar Machado',
  precond: {
    machadoDisponive: true,
    semMachado: true
  },
  effects: {
    semMachado: false
  },
  cost: 3,
}

const cortarMachado: Action = {
  name: 'Cortar Lenha Com Machado',
  precond: {
    semMachado: false,
    semLenha: true
  },
  effects: {
    semLenha: false,
  },
  cost: 4,
}

const apanharGravetos: Action = {
  name: 'Apanhar Gravetos',
  precond: {
    semMachado: true,
    semLenha: true,
  },
  effects: {
    semLenha: false,
  },
  cost: 9,
}

const acenderFogueira: Action = {
  name: 'Acender Fogueira',
  precond: {
    semLenha: false,
    fogueiraAcesa: false
  },
  effects: {
    fogueiraAcesa: true
  },
  cost: 5,
}

const assarAnimal: Action = {
  name: 'Assar Animal',
  precond: {
    possuiAnimal: true,
    fogueiraAcesa: true,
    alimentado: false
  },
  effects: {
    alimentado: true,
  },
  cost: 4,
}

export const actions = [
  pegarArco,
  cacarArco,
  cacarSemArco,
  pegarMachado,
  cortarMachado,
  apanharGravetos,
  acenderFogueira,
  assarAnimal
]
