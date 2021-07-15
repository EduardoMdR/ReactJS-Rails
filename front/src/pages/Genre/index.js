import { Container, Grid, GenreSection } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi';
import ACTION from '../../assets/genre_action.png'

export function Genre({match}) {

  const [genre, setGenre] = useState([])
  const [game_genre, setGameGenre] = useState([])

  useEffect(() => {
    api.get('genres')
    .then((response) => {setGenre(response.data)})
    api.get(`genres/${match.params.id}`)
    .then((response) => {setGameGenre(response.data)})
  }, [])

  return (
    <>
      <Container>
        <h1>Explore seus gêneros favoritos</h1>
        <Grid>
          {genre.map((genero) => {
            return (
              <Link to={`./genres/${genero.id}`} style={{color: '#fff', textDecoration: 'none' }}>
                <GenreSection>
                  <span>{genero.name}</span>
                  <img src='https://cdn.akamai.steamstatic.com/store/promo/summer2021/genre_tiles/genre_tile_rpg.png?v=1' alt='img' />
                </GenreSection>
              </Link>
            )
          })}
        </Grid>
      </Container>
    </>
  );
}