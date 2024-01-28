import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='boxCol items-center text-white text-xl'>
      <h1 className='text-9xl font-semibold'>404</h1>
      <p>Página no encontrada</p>

      <Link className='border-b-2 px-7' href='/'>Regresar</Link>
    </div>
  )
}

export default NotFound
