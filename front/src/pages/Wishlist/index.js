import { api } from '../../services/api.js'
import { useState, useEffect } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { Container, Grid, TopGrid, BottomGrid, GameSection, InfoSection, BuySection } from './styles.js'
import { FiEdit } from 'react-icons/fi';
import PurchaseButton from '../../components/Button/Purchase/index'
import { Link } from 'react-router-dom'

export const Wishlist = () => {

  const {user} = useUserContext();
  const [ wishlist, setWishlist ] = useState([])
  const [game, setGame] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    api.get('games')
    .then((response) => {setGame(response.data)})
    api.get('genres')
    .then((response) => {setGenre(response.data)})
    api.get(`wishlists/${user.id}`)
    .then((response) => {setWishlist(response.data)}).catch((error) => {alert(error)})
  }, [])

  return (
    <>
      <Container>
        <Grid>
          <TopGrid>
            <h1>
              <img src='https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fb/fb51ba66a6cf26b8db8f63d48167ce0a6882bbba_full.jpg' alt='img perfil'/>
              <span>{user.name}</span>
              <FiEdit size={22} strokeWidth={1} color="#fff" />
            </h1>
          </TopGrid>
          <BottomGrid>
            <GameSection style={{background: 'none'}}>
              <div class='ola'>
                <h4>Na Lisa de Desejo</h4>
                <p>2</p>
              </div>
              <div class='ola'>
                <h4>Comprados</h4>
                <p>0</p>
              </div>
              <div class='ola'>
                <h4>Amigos</h4>
                <p>0</p>
              </div>
            </GameSection>
          </BottomGrid>
          <BottomGrid>
            <h2>Lista de Desejo!</h2> 
            {wishlist.map((item,index) => 
              <>
                { 
                  game.map((jogo, subindex) =>
                  <>
                    {
                      (item.game_id === jogo.id) ? (
                        <GameSection>
                          <InfoSection>
                            <img src={'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg'} alt='img' />
                            <div>
                              <p>{jogo.name}</p>
                              <h5>Desenvolvedora: {jogo.developer}</h5>
                              <span>Ação</span><span>Mundo Aberto</span><span>Multijogador</span>
                            </div>
                            </InfoSection>
                          <BuySection>
                          <span>R$ {jogo.price} <Link to={`./games/${jogo.id}`}><PurchaseButton>Comprar</PurchaseButton></Link></span>
                          </BuySection>
                        </GameSection>
                      ) : (
                        <></>
                      )
                    }
                  </>
                  )
                }
              </>
            )}
          </BottomGrid>
        </Grid>
      </Container>
    </>
  );
}