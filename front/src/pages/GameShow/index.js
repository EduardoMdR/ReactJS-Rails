import { Container, Grid, SlideShow, InfoShow, GameSection } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { FiPlus, FiGlobe, FiCalendar, FiCpu, FiEdit } from 'react-icons/fi';

import { useUserContext } from '../../hooks/useUserContext'
import PurchaseButton from '../../components/Button/Purchase/index'
import WishlistButton from '../../components/Button/Wishlist/index'

export function GameShow({match}) {

  const {user} = useUserContext();
  const [game, setGame] = useState({})

  const removeGame = () => {
    api.delete(`games/${match.params.id}`)
    .catch((err) => {alert(err)})
  }

  const addWishlist = () => {
    console.log(user.id)
    api.post(`games/wishlist/${match.params.id}`, {
      wishlist: {
        user_id: user.id
      }
    }).catch((err) => {alert(err)})
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
        <h1>{game.name} <Link to={`./edit/${match.params.id}`}><FiEdit size={22} strokeWidth={1} color="#fff" /></Link></h1>
        {/* <p>{game.price}</p>
        <Link to={`./edit/${match.params.id}`}> editar </Link>
        <Link to={`./genre/${match.params.id}`}> adicionar gênero </Link>
        <button type='button' onClick={() => {removeGame()}}>Apagar</button>
        <button type='button' onClick={() => {addWishlist()}}>Lista de desejo</button>
        <button type='button' onClick={() => {removeWishlist()}}>Remover wishlist</button> */}
        <Grid>
          <SlideShow>
          </SlideShow>
          <InfoShow>
            <img src={'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg'} alt='img' />
            <p>Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração
              de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.</p>
            <span>R$ 29,99 <PurchaseButton>Comprar</PurchaseButton></span>
          </InfoShow>
        </Grid>
        <Grid>
          <WishlistButton>Lista de Desejo <FiPlus strokeWidth={3} color="#DCDCDC" /></WishlistButton>
          <p><FiCpu size={14} strokeWidth={2} color="#DCDCDC"/> Desenvolvedora: RockStar</p>
          <p><FiCalendar size={14} strokeWidth={2} color="#DCDCDC"/> Data de lançamento: 20/03/2018</p>
          <p><FiGlobe strokeWidth={3} color="#DCDCDC"/></p>
        </Grid>
        <Grid><h3>Jogos Relacionados</h3></Grid>
        
        <Grid style={{ background: 'rgba(0,0,0,0.2)' }}>
          <Link to={`/games/1`} style={{ textDecoration: 'none' }}>
            <GameSection>
              <img src={'https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg'} alt='img' />
              <p>League of legednds</p>
              <span>Rockstar Games</span> {/* {jogo.desenvolvedor} */}
              <p>R$ 50,00</p>
            </GameSection>
          </Link>
          <Link to={`/games/1`} style={{ textDecoration: 'none' }}>
            <GameSection>
              <img src={'https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg'} alt='img' />
              <p>League of legednds</p>
              <span>Rockstar Games</span> {/* {jogo.desenvolvedor} */}
              <p>R$ 50,00</p>
            </GameSection>
          </Link>
          <Link to={`/games/1`} style={{ textDecoration: 'none' }}>
            <GameSection>
              <img src={'https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg'} alt='img' />
              <p>League of legednds</p>
              <span>Rockstar Games</span> {/* {jogo.desenvolvedor} */}
              <p>R$ 50,00</p>
            </GameSection>
          </Link>
          <Link to={`/games/1`} style={{ textDecoration: 'none' }}>
            <GameSection>
              <img src={'https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg'} alt='img' />
              <p>League of legednds</p>
              <span>Rockstar Games</span> {/* {jogo.desenvolvedor} */}
              <p>R$ 50,00</p>
            </GameSection>
          </Link>
        </Grid>
      </Container>
    </>
  );
}