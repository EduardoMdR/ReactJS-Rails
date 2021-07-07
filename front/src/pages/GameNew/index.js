import { api } from '../../services/api.js';
import { Container } from './styles.js'
import { useState } from 'react'

export const GameNew = () => {

  const [name, setName] = useState('')
  const [value, setValue] = useState()

  const addGame = () => {
    api.post('games/create', {
      game: {
        name: name,
        price: 20,
      }
    }).catch((err) => {alert(err)})
  }

  return (
    <>
      <Container>
        <h2>Criar Jogos</h2>

        <form onSubmit={addGame}>
          <p>Nome  : <input type='text' value={name} onChange={(event) => {setName(event.target.value)}} /></p>
          <p>Preço : <input type='number' step='0.01' value={value} onChange={(event) => {setValue(event.target.value)}} /></p>
          <button type='submit'>Adicionar</button>
        </form>
      </Container>
    </>
  );
}