import React from 'react'
import FamiliaMembro from './FamiliaMembo'

export default props => {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Fernanda" {...props} />
      <FamiliaMembro nome="Alonso" {...props} />
    </div>
  )
}