import React from 'react'

export default function Primeiro() {
  const msg = 'mensagem de teste!!!'
  return (
    <div>
      <h2>primeiro componente</h2>
      <h3>trabalhando com componentes utilizando JSX</h3>
      <div>
        <p>{msg}</p>
      </div>
    </div>

  )
}