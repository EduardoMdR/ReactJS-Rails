import {Container } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Jogos</Link>
          </li>
          <li>
            <Link to="/genres">Gêneros</Link>
          </li>
          <li>
            <Link to="/wishlist">Lista de desejo</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;