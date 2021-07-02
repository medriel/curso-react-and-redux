import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

import Aleatorio from './components/basicos/Aleatorio'

export default () => (
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Segundo Componente"
      aluno="Miguel"
      nota={9.3}
    >
    </ComParametro>

    <Aleatorio
      max={5}
      min={1}
    />
  </div>
);