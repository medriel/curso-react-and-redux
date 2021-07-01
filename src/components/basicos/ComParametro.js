import React from 'react'

export default function ComParametro(props) {
  console.log(props)
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        <strong>{props.aluno} </strong>
        ficou com a nota de:
        <strong> {props.nota} </strong>
        e foi
        <strong> {status}</strong>
      </h3>
    </div>
  )
}