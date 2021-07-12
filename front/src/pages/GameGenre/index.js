import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'

export function GameGenre({match}) {

  const [genre, setGenre] = useState([])
  const [game, setGame] = useState([])
  const [gg, setGG] = useState([])

  useEffect(() => {
    api.get('genres')
    .then((response) => {setGenre(response.data)})
    api.get(`games/${match.params.id}`)
    .then((response) => {setGame(response.data)})
    api.get(`games/genre/${match.params.id}`)
    .then((response) => {setGG(response.data)}).catch((error) => {alert(error)})
  }, [])

  const addGG = (genero_id) => {
    api.post(`game_genres/${match.params.id}`, {
      game_genre: {
        genre_id: genero_id,
      }
    }).catch((err) => {alert(err)})
  }

  const deleteGG = (genero_id) => {
    api.delete(`game_genres/${genero_id}`).catch(() => {alert('Impossivel retirar está categoria')})
  }

  return (
    <>
      <Container>
        <h2>{game.name}</h2>
        <ul>
          {genre.map((genero) => {return ( <li key={genero.id}>
            {genero.name}
            <button type='button' onClick={() => {addGG(genero.id)}}>+</button>
            
          </li>)})}
        </ul>
        {gg.map((game_genre) => {return <li key={game_genre.id}>
          {game_genre.genre_id} <button type='button' onClick={() => {deleteGG(game_genre.id)}}>-</button>
        </li>})}
      </Container>
    </>
  );
}