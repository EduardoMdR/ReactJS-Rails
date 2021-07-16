import { Container, Grid, Carrossel, Info } from './styles.js'
import MyCarousel from '../../components/Carousel/index.js'
import WishlistButton from '../../components/Button/Wishlist/index'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Container>
      <Grid>
        <h1>Bem Vindo a Gallery Gaming</h1>
        <Info>
          <div class='ola'>
            <h2>Descubra os melhores gêneros</h2>
            <span>e se cadastre para manter um controle de saber o que jogar, sempre atualize sua lista de desejos e</span>
          </div>
          <div class='ola'>
            <WishlistButton to="./genres"><Link to='./genres' style={{ color: '#fff' }}>Descobrir !</Link></WishlistButton>
          </div>
        </Info>
        <Carrossel>
          <MyCarousel />
        </Carrossel>
      </Grid>
        
        
      </Container>
    </>
  )
}