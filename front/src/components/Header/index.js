import {Container } from './styles'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../hooks/useUserContext'

const Header = () => {

  const {user} = useUserContext();

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
          <li>
            <Link to={user ? '/games' : '/login'}>
              <span>{user ? user.name : 'Entrar'}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;