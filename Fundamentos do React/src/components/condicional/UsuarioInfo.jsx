import React from 'react';
import If from './If'
//trabalhando com if
export default (props) => {
  const usuario = props.usuario || {}
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja Bem vindo {usuario.nome}
      </If>
    </div>
  )
}