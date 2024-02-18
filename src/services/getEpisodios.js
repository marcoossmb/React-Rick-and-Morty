export async function getEpisodios() {
    const response = await fetch(`https://rickandmortyapi.com/api/episode`);
    const data = await response.json();
    
    return data;
}

export async function getPersonajesPorEpisodio(episodioId) {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodioId}`);
    const data = await response.json();
    
    return data;
}