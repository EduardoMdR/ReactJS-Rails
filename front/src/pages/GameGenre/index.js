import { Container, Grid, GenreSection} from './styles.js'
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
  }, [gg])

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
        <h1>Adicione gêneros ao {game.name}</h1>
        <p>Gêneros presente</p>
        <Grid>
          {gg.map((item,index) => 
            <>
              { 
                genre.map((genero, subindex) =>
                <>
                  {
                    (item.genre_id === genero.id) ? (
                      <GenreSection>
                        <span>{genero.name}</span>
                        
                        <button type='button' onClick={() => {deleteGG(item.id)}}>
                          <img src='https://cdn.akamai.steamstatic.com/store/promo/summer2021/genre_tiles/genre_tile_rpg.png?v=1' alt='img' />
                        </button>
                      </GenreSection>
                    ) : (
                      <></>
                    )
                  }
                </>
                )
              }
            </>
          )}
        </Grid>

        <p>Adicionar novo</p>
        <Grid>
          {genre.map((genero) => {
            return (
              <>
                <GenreSection>
                  <span>{genero.name}</span>
                  <button type='button' onClick={() => {addGG(genero.id)}}>
                    <img src='https://cdn.akamai.steamstatic.com/store/promo/summer2021/genre_tiles/genre_tile_rpg.png?v=1' alt='img' />
                  </button>
                </GenreSection>
              </>
            )
          })}
        </Grid>
      </Container>
    </>
  );
}