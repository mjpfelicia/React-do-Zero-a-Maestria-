import React from 'react'

const ExecutarFunction = ({myFunction}) => {
  return (
    <div className='box_executarFunca'>
        <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  )
}

export default ExecutarFunction;