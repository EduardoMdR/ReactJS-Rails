import { Container } from './styles.js'
import { api } from '../../services/api.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Wishlist = () => {

  const [ wishlist, setWishlist ] = useState([])

  useEffect(() => {
    api.get('wishlists')
    .then((response) => {setWishlist(response.data)}).catch((error) => {alert(error)})
  }, [])

  return (
    <>
      <Container>
        <h2>Lista de desejo</h2>

        {wishlist.map((desejo) => 
          {return <li key={desejo.id}>
            <Link to={`games/${desejo.game_id}`}>{desejo.game_id}</Link>
          </li>})
        }
      </Container>
    </>
  );
}