import React from 'react';
//trabalhando com ternario 
export default (props) => {

  const isPar = props.numero % 2 === 0

  return (
    <div>
      {isPar ? <span>Par</span> : <span>Impar</span>}
    </div>
  )
}