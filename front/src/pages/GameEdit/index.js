import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function GameEdit({match}) {

  const [game, setGame] = useState({})
  const [name, setName] = useState('')
  const [value, setValue] = useState(0.0)

  useEffect(() => {
    api.get(`games/${match.params.id}`)
    .then((response) => {
      setGame(response.data);
      setName(response.data.name);
      setValue(response.data.price);
    })
  }, [])

  const editGame = () => {
    api.put(`games/${match.params.id}`, {
      game: {
        name: name,
        price: value,
      }
    }).catch((err) => {alert(err)})
  }
  
  return (
    <>
      <Container>
      <h2>{game.name}</h2>
      <h2>Editar Jogos</h2>

      <form onSubmit={editGame}>
        <div>
          <span>Nome : </span>
          <input defaultValue={game.name} value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <span>Preço : </span>
          <input type='number' step='0.01' value={value} onChange={(event) => setValue(event.target.value)} />
        </div>
        <button type='submit'>Editar jogo</button>
      </form>
      </Container>
    </>
  );
}