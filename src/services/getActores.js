export async function getActores() {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const data = await response.json()

    return data;
}

export async function getActoresEpi(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()

    return data;
}