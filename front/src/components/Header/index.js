import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../hooks/useUserContext'
import { FcGallery } from 'react-icons/fc';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {

  const {user} = useUserContext();

  return (
    <Container>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}><FcGallery size={22} strokeWidth={1}/></Link>
        <Link to="/games" style={{ textDecoration: 'none' }}><span>Jogos</span></Link>
        <Link to="/genres" style={{ textDecoration: 'none' }}><span>Gêneros</span></Link>
        <Link to="/wishlist" style={{ textDecoration: 'none' }}><span>Lista de desejo</span></Link>
        <Link  style={{ textDecoration: 'none' }} to={user ? '/wishlist' : '/login'}>
          <span>{user ? (
            <>
              {user.name}
              <span><Link to="./login"><FiLogOut color="#fff" /></Link></span>
            </>
            ) : ('Entrar')}</span>
        </Link>
      </nav>
    </Container>
  );
}

export default Header;