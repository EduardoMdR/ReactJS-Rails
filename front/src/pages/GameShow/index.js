import { Container, Section, Grid, SlideShow, InfoShow, GameSection } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { FiPlus, FiGlobe, FiCalendar, FiCpu, FiEdit, FiMinus, FiTrash2 } from 'react-icons/fi';

import { useUserContext } from '../../hooks/useUserContext'
import PurchaseButton from '../../components/Button/Purchase/index'
import WishlistButton from '../../components/Button/Wishlist/index'

export function GameShow({match}) {

  const {user} = useUserContext();
  const [game, setGame] = useState({})
  const [ wishlist, setWishlist ] = useState([])
  var aux = 1;

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
    api.delete(`games/wishlist/${match.params.id}/${user.id}`).catch((err) => {alert(err)})
  }

  useEffect(() => {
    api.get(`games/${match.params.id}`)
    .then((response) => {setGame(response.data)})
    api.get(`wishlists/${user.id}`)
    .then((response) => {setWishlist(response.data)}).catch((error) => {alert(error)})
  }, [game])
  
  return (
    <>
      <Container>
        <Section>
          {user && user.id == 1 ? (
            <>
              <h1>{game.name} <Link to={`./edit/${match.params.id}`}><FiEdit size={22} strokeWidth={1} color="#fff" /></Link> <button type='button' onClick={() => {removeWishlist()}}><FiTrash2 size={22} strokeWidth={1} color="#cc0000"/></button></h1>
              <hr />
              <div class='ola'>
                <span>|| ação ||</span>
                <span><Link to={`./genre/${match.params.id}`}><FiPlus size={22} strokeWidth={1} color="#fff" /></Link></span>
              </div>
            </>
          ) : (
            <h1>{game.name}</h1>
          )}
          <Grid style={{background: 'rgba(256,256,256,0.1)'}}>
            <SlideShow>
              <iframe height="320" src={game.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </SlideShow>
            <InfoShow>
              <img src={'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg'} alt='img' />
              <p>{game.description}</p>
              <span>R$ {game.price} <PurchaseButton type='button' onClick={() => {}}>Comprar</PurchaseButton></span>
            </InfoShow>
          </Grid>
          <Grid>
            {wishlist.map((jogo) => {
              return (
                <>
                  {(game.id === jogo.game_id) ? (
                    <button type='button' onClick={() => {removeWishlist()}}>
                      <WishlistButton>Remover da lista <FiMinus strokeWidth={3} color="#DCDCDC" /></WishlistButton>
                      {aux = null}
                    </button>

                  ) : (
                    <></>
                  )}
                </>
              )
            })}
            {(aux) ? (
              <button type='button' onClick={() => {addWishlist()}}>
                <WishlistButton>Lista de Desejo <FiPlus strokeWidth={3} color="#DCDCDC" /></WishlistButton>
              </button>
            ): (<></>)}

            <p><FiCpu size={14} strokeWidth={2} color="#DCDCDC"/> Desenvolvedora: {game.developer}</p>
            <p><FiCalendar size={14} strokeWidth={2} color="#DCDCDC"/> Data de lançamento: {game.realese_date}</p>
            <p><FiGlobe strokeWidth={3} color="#DCDCDC"/></p>
          </Grid>
          <hr />
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
        </Section>
      </Container>
    </>
  );
}