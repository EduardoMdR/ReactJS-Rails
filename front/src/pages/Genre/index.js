import { Container } from './styles.js'
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
      <Container>
        <h2>Gêneros</h2>
        <ul>
          {genre.map((genero) => {return <li key={genero.id}><Link to={`genres/${genero.id}`}>{genero.name}</Link></li>})}
        </ul>
      </Container>
    </>
  );
}