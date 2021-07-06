import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function GameShow({match}) {

  const [genre, setGenre] = useState({})

  useEffect(() => {
    api.get(`games/${match.params.id}`)
    .then((response) => {setGenre(response.data)})
  }, [])
  
  return (
    <>
      <Container>
        <h2>{genre.name}</h2>
      </Container>
    </>
  );
}