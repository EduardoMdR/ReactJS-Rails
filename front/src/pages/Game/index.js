import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'

export const Game = () => {

  const [game, setGame] = useState([])

  useEffect(() => {
    api.get('games')
    .then((response) => {setGame(response.data)})
  }, [])

  return (
    <>
      <Container>
        <h2>Jogos</h2>
        <ul>
          {game.map((jogo) => {return <li key={jogo.id}><Link to={`games/${jogo.id}`}>{jogo.name}</Link></li>})}
        </ul>

        <Link to={'./games/new'}>Novo</Link>
      </Container>
    </>
  );
}