import React from 'react'
import { HeroList } from '../components'

export const Marvel = () => {
  return (
    <div className='container' >
    <h1>Marvel</h1>
    <hr />
    <HeroList publisher='Marvel Comics' />
    </div>

  )
}
