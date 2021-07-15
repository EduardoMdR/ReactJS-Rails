import { Container, GridMenu, GridGame, GameSection } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi';

export function GenreShow({match}) {

  const [genre, setGenre] = useState([])
  const [game_genre, setGameGenre] = useState([])

  useEffect(() => {
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
        <Link to={`/games/1`} style={{ textDecoration: 'none' }}>
          <GameSection>
              <img src={'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg'} alt='img' />
              <span>RDR II</span>
          </GameSection>
          </Link>
          <GameSection>
            <img src={'https://s2.glbimg.com/I9MFCGPOKeCJbvS7qVFsVupgUiE=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/n/q/Wqwk8kQueGABmPSAfawA/maxresdefault.jpg'} alt='img' />
            <span>GTA IV</span>
          </GameSection>
          <GameSection>
            <img src={'https://s2.glbimg.com/I9MFCGPOKeCJbvS7qVFsVupgUiE=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/n/q/Wqwk8kQueGABmPSAfawA/maxresdefault.jpg'} alt='img' />
            <span>GTA IV</span>
          </GameSection>
        </GridGame>
      </Container>
      {game_genre.map((gg) => 
          {return <p>{gg.game_id}</p>})
        }
    </>
  );
}