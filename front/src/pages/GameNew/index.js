import { api } from '../../services/api.js';
import { Container } from './styles.js'
import { useState } from 'react'


export const GameNew = () => {

  const [name, setName] = useState('')
  const [value, setValue] = useState(0.0)
  const [description, setDescription] = useState('')
  const [iframe, setIframe] = useState('')
  const [realese_date, setRealese_date] = useState()

  const addGame = () => {
    api.post('games/create', {
      game: {
        name: name,
        price: value,
        description: description,
        trailer: iframe,
        realese_date: realese_date,
      }
    }).catch((err) => {alert(err)})
  }

  return (
    <>
      <Container>
        <h2>Criar Jogos</h2>

        <form onSubmit={addGame}>
          <p>Nome  : <input type='text' value={name} onChange={(event) => {setName(event.target.value)}} /></p>
          <p>Preço : <input type='number' value={value} onChange={(event) => {setValue(event.target.value)}} /></p>
          <p>Descrição : <textarea type='number' value={description} onChange={(event) => {setDescription(event.target.value)}} /></p>
          <p>Link iframe : <input type='text' value={iframe} onChange={(event) => {setIframe(event.target.value)}} /></p>
          <p>data do lançamento : <input type='date' value={realese_date} onChange={(event) => {setRealese_date(event.target.value)}} /></p>
          <button type='submit'>Adicionar</button>
        </form>
      </Container>
    </>
  );
}