import * as ApiEpisodios from '../../services/getEpisodios';
import { Link, Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function Episodios() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    ApiEpisodios.getEpisodios()
      .then(data => {
        setEpisodios(data.results)
      })
  }, [])

  return (
    <div className='container'>
      <h1 className='text-center text-muted py-4'>Episodios</h1>
      <section className='d-flex align-items-center justify-content-center'>
        <article className='d-flex flex-wrap justify-content-left w-50'>
          {episodios.map(episodio => (
            <div className='border border-gray rounded p-3 m-2' key={episodio.id}>
              <Link to={`/episodios/${episodio.id}`} className='text-decoration-none text-dark'>
                <p>{episodio.id} {episodio.name}</p>
              </Link>
            </div>
          ))}
        </article>
        <article className='d-flex flex-wrap justify-content-center border border-gray w-50'>
          <Outlet />
        </article>
      </section>
    </div>
  )
}

export default Episodios;