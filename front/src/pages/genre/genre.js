import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'

export const Genre = () => {

  const [genre, setGenre] = useState([])

  useEffect(() => {
    api.get('genres')
    .then((response) => {setGenre(response.data)})
  }, [])

  return (
    <>
      <h2>Gêneros</h2>
      <ul>
        {genre.map((jogo) => {return <li key={jogo.id}><Link to={`genres/${jogo.id}`}>{jogo.name}</Link></li>})}
      </ul>
    </>
  );
}