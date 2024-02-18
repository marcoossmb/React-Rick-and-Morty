/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import * as ApiActores from '../../services/getActores';

function Actores() {
  const [actores, setActores] = useState([]);

  useEffect(() => {
    ApiActores.getActores()
      .then(data => {
        setActores(data.results)
      })
  }, [])
  

  return (
    <div className='container'>
      <h1 className='text-center text-muted py-4'>Actores</h1>
      <article className='d-flex flex-wrap justify-content-center m-3'>
        {actores.map((actor) =>(
          <div className='border border-gray rounded p-3 m-2' key={actor.id} style={{ width: '15rem' }}>
            <img className='w-100' src={actor.image} alt={actor.name} />
            <p className='py-2'>{actor.name}</p>
            <p className='py-2'>{actor.species}</p>
          </div>
        ))}
      </article>
    </div>
  )
}

export default Actores