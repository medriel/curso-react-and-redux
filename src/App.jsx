import React from "react"

import "./App.css"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembo"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

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

      <Card titulo="Componente com filhos" color="#546">
        <Familia sobrenome="Medeiros" >
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Fernanda" />
          <FamiliaMembro nome="Alonso" />

        </Familia>
      </Card>

      <Card titulo="Repeticao" color="#FF4c65">
        <ListaAlunos />
      </Card>

      <Card titulo="Desafio repetição" color="#ff432e">
        <TabelaProdutos />
      </Card>

      <Card titulo="Renderizacao condicional" color="#982395">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        <UsuarioInfo usuario={{ sobrenome: 'Martins' }} />
      </Card>

      <Card titulo="Comunicacao direta" color="#985554">
        <DiretaPai />
      </Card>

      <Card titulo="Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>
    </div>

  </div>
);