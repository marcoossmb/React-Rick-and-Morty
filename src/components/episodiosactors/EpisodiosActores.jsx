import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EpisodeActors.css';
import * as ApiEpisodios from '../../services/getEpisodios';

function EpisodiosActores() {

  const [personajes, setPersonajes] = useState([]);
  const [nombreEpisodio, setNombreEpisodio] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const episodioData = await ApiEpisodios.getPersonajesPorEpisodio(params.id);
      setNombreEpisodio(episodioData.name);

      const charactersData = [];
      for (const characterUrl of episodioData.characters) {
        const response = await fetch(characterUrl);
        const characterData = await response.json();
        charactersData.push(characterData);
      }
      setPersonajes(charactersData);
    };

    fetchData();
  }, [params.id]);

  return (
    <div className='container'>
      <h1 className="mt-4 mb-3 text-center">Capitulo {params.id}</h1>
      <p className="text-center mb-4 text-primary">{nombreEpisodio}</p>
      <div className="d-flex flex-wrap justify-content-center">
        {personajes.map((personaje, index) => (
          <div key={index} className='m-2'>
            <img className='image' src={personaje.image} alt={personaje.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodiosActores;
