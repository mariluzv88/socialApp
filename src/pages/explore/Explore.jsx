import React from 'react'
import Left from '../../components/Left'
import Right from '../../components/Right'
import Eposts from '../../components/Eposts'

function Explore() {
  return (
    <div className='home'>
      <Left/>
      <Eposts/>
      <Right/>
    </div>
  )
}

export default Explore