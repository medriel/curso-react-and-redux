import './index.css'
import ReactDOM from 'react-dom'
import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

/*
const el = document.getElementById("root")
ReactDOM.render("Ola React!!!", el)

ReactDOM.render(
  "Ola React!!!",
  document.getElementById("root")
  )
*/

// utilizando JSX
/*
ReactDOM.render(
  <div>Ola</div>,
  document.getElementById(`root`)
)

const tag = <div>Ola</div>
ReactDOM.render(
  tag,
  document.getElementById(`root`)
)*/

//utilizando o componente ~primeiro~
ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Segundo Componente"
      aluno="Miguel"
      nota={9.3}
    >
    </ComParametro>
  </div>,
  document.getElementById(`root`)
)

