import React from 'react'



function Square({id,onSquareClick,value}) {

  return (
    <button key={id} onClick={onSquareClick} className='square'>{value}</button>   
  )

  }


export default Square