import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'

export function GenreShow({match}) {

  const [genre, setGenre] = useState([])

  useEffect(() => {
    api.get(`genres/${match.params.id}`)
    .then((response) => {setGenre(response.data)}).catch((error) => {alert(error)})
  }, [])

  return (
    <>
      <Container>
        <h2>Gênreo</h2>
        {genre.map((gg) => 
          {return <li key={gg.id}>
            <Link to={`games/${gg.game_id}`}>{gg.game_id}</Link>
          </li>})
        }
      </Container>
    </>
  );
}