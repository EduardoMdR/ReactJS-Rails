import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../hooks/useUserContext'

const Header = () => {

  const {user} = useUserContext();

  return (
    <Container>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
        <Link to="/games" style={{ textDecoration: 'none' }}><span>Jogos</span></Link>
        <Link to="/genres" style={{ textDecoration: 'none' }}><span>Gêneros</span></Link>
        <Link to="/wishlist" style={{ textDecoration: 'none' }}><span>Lista de desejo</span></Link>
        <Link  style={{ textDecoration: 'none' }} to={user ? '/games' : '/login'}>
          <span>{user ? user.name : 'Entrar'}</span>
        </Link>
      </nav>
    </Container>
  );
}

export default Header;