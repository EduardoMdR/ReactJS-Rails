import { Container, Grid, GameSection } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../hooks/useUserContext'

export const Game = () => {

  const {user} = useUserContext();
  const [game, setGame] = useState([])

  useEffect(() => {
    api.get('games')
    .then((response) => {setGame(response.data)})
  }, [])

  return (
    <>
      <Container>
      <h1>Explore todos nossos Jogos</h1>
        <Grid>
          {game.map((jogo) => {
            return (
              <Link to={`/games/${jogo.id}`} style={{ textDecoration: 'none' }}>
                <GameSection>
                  <img src={'https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg'} alt='img' />
                  <p>{jogo.name}</p>
                  <span>{jogo.developer}</span>
                  <p>R$ {jogo.price}</p>
                </GameSection>
              </Link>
            )
          })}
        </Grid>
        {user && user.id === 1 ? (
          <h1><Link to={'./games/new'}>Criar novo jogo</Link></h1>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}