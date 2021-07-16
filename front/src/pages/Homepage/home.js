import { Container, Grid, Carrossel } from './styles.js'
import MyCarousel from '../../components/Carousel/index.js'

export const Home = () => {
  return (
    <>
      <Container>
      <Grid>
        <h1>Bem Vindo a Gallery Gaming</h1>
        <Carrossel>
          <MyCarousel />
        </Carrossel>
      </Grid>
        
        
      </Container>
    </>
  )
}