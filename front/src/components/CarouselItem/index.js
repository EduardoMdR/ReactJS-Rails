import { Container } from './styles'

const Item = ({produto}) => {
  return (
    <Container>
      <img src={`https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png`} alt='game image' />
      <p>{produto.name}</p>
    </Container>
  )
}

export default Item;