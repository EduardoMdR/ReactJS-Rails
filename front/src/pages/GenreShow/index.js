import { Container, GridMenu, GridGame, GameSection } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi';

export function GenreShow({match}) {

  const [genre, setGenre] = useState([])
  const [game, setGame] = useState([])
  const [game_genre, setGameGenre] = useState([])
  

  useEffect(() => {
    api.get('games')
    .then((response) => {setGame(response.data)})
    api.get('genres')
    .then((response) => {setGenre(response.data)})
    api.get(`genres/${match.params.id}`)
    .then((response) => {setGameGenre(response.data)})
  }, [game_genre])

  return (
    <>
      <Container>
        <GridMenu>
          <h1>Explore seus gêneros favoritos</h1>
          
          {genre.map((genero) => {
            return (
              <p><FiChevronsRight size={14} strokeWidth={1} color="#DCDCDC" /><Link to={`./${genero.id}`} style={{color: '#fff', textDecoration: 'none' }}>{genero.name}</Link></p>
            )
          })}
        </GridMenu>
        <GridGame>
          {game_genre.map((item,index) => 
            <>
              { 
                game.map((jogo, subindex) =>
                <>
                  {
                    (item.game_id === jogo.id) ? (
                      <Link to={`/games/${jogo.id}`} style={{ textDecoration: 'none' }}>
                        <GameSection>
                          <img src={'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg'} alt='img' />
                          <span>{jogo.name}</span>
                        </GameSection>
                      </Link>
                    ) : (
                      <></>
                    )
                  }
                </>
                )
              }
            </>
          )}
        </GridGame>
      </Container>
    </>
  );
}


<>
  if(user)
    <p>Usuário</p>
  else
    <p>Kayran veado</p>
</>