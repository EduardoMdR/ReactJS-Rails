import { Container, Grid, GameSection } from './styles.js'
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
        <h1>Explore todos nossos Jogos</h1>
        <Grid>
          {game.map((jogo) => {
            return (
              <Link to={`/games/${jogo.id}`} style={{ textDecoration: 'none' }}>
                <GameSection>
                  <img src={'https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg'} alt='img' />
                  <p>{jogo.name}</p>
                  <span>Rockstar Games</span> {/* {jogo.desenvolvedor} */}
                  <p>R$ {jogo.price},00</p>
                </GameSection>
              </Link>
            )
          })}

        </Grid>
        <Link to={'./games/new'}>Novo</Link>
      </Container>
    </>
  );
}