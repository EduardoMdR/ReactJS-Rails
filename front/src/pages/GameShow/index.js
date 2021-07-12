import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

export function GameShow({match}) {

  const [game, setGame] = useState({})

  const removeGame = () => {
    api.delete(`games/${match.params.id}`)
    .catch((err) => {alert(err)})
  }

  const addWishlist = () => {
    api.post(`games/wishlist/${match.params.id}`).catch((err) => {alert(err)})
  }
  const removeWishlist = () => {
    api.delete(`games/wishlist/${match.params.id}`).catch((err) => {alert(err)})
  }

  useEffect(() => {
    api.get(`games/${match.params.id}`)
    .then((response) => {setGame(response.data)})
  }, [])
  
  return (
    <>
      <Container>
        <h2>{game.name}</h2>
        <p>{game.price}</p>
        <Link to={`./edit/${match.params.id}`}> editar </Link>
        <Link to={`./genre/${match.params.id}`}> adicionar gênero </Link>
        <button type='button' onClick={() => {removeGame()}}>Apagar</button>
        <button type='button' onClick={() => {addWishlist()}}>Lista de desejo</button>
        <button type='button' onClick={() => {removeWishlist()}}>Remover wishlist</button>
      </Container>
    </>
  );
}