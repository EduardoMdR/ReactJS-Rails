import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function GameShow({match}) {

  const [game, setGame] = useState({})

  const removeGame = () => {
    api.delete(`games/${match.params.id}`)
    .catch((err) => {alert(err)})
  }

  const addWishlist = () => {
    api.post(`games/wishlist/${match.params.id}`).catch((err) => {alert(err)})
  }

  useEffect(() => {
    api.get(`games/${match.params.id}`)
    .then((response) => {setGame(response.data)})
  }, [])
  
  return (
    <>
      <Container>
        <h2>{game.name}</h2>
        <button type='button' onClick={() => {removeGame()}}>Apagar</button>
        <button type='button' onClick={() => {addWishlist(game)}}>Lista de desejo</button>
      </Container>
    </>
  );
}