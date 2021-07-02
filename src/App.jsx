import React from "react"

import "./App.css"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card"

export default () => (
  <div className="App">
    <div className="Cards">
      <Card titulo="Primeiro" color="#080">
        <Primeiro></Primeiro>
      </Card>

      <Card titulo="Situação aluno" color="#800">
        <ComParametro
          titulo="Segundo Componente"
          aluno="Miguel"
          nota={9.3}
        >
        </ComParametro>

      </Card>
      <Card titulo="Aleatorio" color="#006">
        <Aleatorio
          max={5}
          min={1}
        />
      </Card>
    </div>

  </div>
);