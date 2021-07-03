import { useState, useEffect } from 'react'
import { api } from '../services/api.js'

export function GenreShow({match}) {

  const [genre, setGenre] = useState({})

  useEffect(() => {
    api.get(`genres/${match.params.id}`)
    .then((response) => {setGenre(response.data)})
  }, [])
  
  return (
    <h2>{genre.name}</h2>
  );
}