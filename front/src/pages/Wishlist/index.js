import { Container, Grid, GameSection, InfoGameSection } from './styles.js'
import { api } from '../../services/api.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PurchaseButton from '../../components/Button/Purchase/index'

export const Wishlist = () => {

  const [ wishlist, setWishlist ] = useState([])

  useEffect(() => {
    api.get('wishlists')
    .then((response) => {setWishlist(response.data)}).catch((error) => {alert(error)})
  }, [])

  return (
    <>
      <Container>
        <h1><img src='https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fb/fb51ba66a6cf26b8db8f63d48167ce0a6882bbba_full.jpg' alt='img perfil'/>Sua Lista de dejeso</h1>

        <Grid>
        {/* {wishlist.map((desejo) => 
          {return <li key={desejo.id}>
            <GameSection>
              <Link to={`games/${desejo.game_id}`}>{desejo.game_id}</Link>
            </GameSection>
          </li>})
        } */}
          <GameSection>
            <img src={'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg'} alt='img' />
            <div>
              <h2>RdR 2</h2>
              <p>Desenvolvedora: RockStars</p>
              <span>Ação</span><span>Mundo Aberto</span><span>Multijogador</span>
            </div>
            <h3>R$ 29,99 </h3>
            <PurchaseButton>
              + Carrinho
            </PurchaseButton>
          </GameSection>
          <GameSection>
            <img src={'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg'} alt='img' />
            <div>
              <h2>RdR 2</h2>
              <p>Desenvolvedora: RockStars</p>
              <span>Ação</span><span>Mundo Aberto</span><span>Multijogador</span>
            </div>
            <h3>R$ 29,99 </h3>
            <PurchaseButton>
              + Carrinho
            </PurchaseButton>
          </GameSection>
        </Grid>
      </Container>
    </>
  );
}