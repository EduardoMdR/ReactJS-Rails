import { Container } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function GameEdit({match}) {

  const [game, setGame] = useState({})
  const [name, setName] = useState('')
  const [value, setValue] = useState(0.0)
  const [description, setDescription] = useState('')
  const [iframe, setIframe] = useState('')
  const [realese_date, setRealese_date] = useState()
  const [developer, setDeveloper] = useState('')

  useEffect(() => {
    api.get(`games/${match.params.id}`)
    .then((response) => {
      setGame(response.data);
      setName(response.data.name);
      setValue(response.data.price);
      setDescription(response.data.description);
      setIframe(response.data.trailer);
      setRealese_date(response.data.realese_date);
      setDeveloper(response.data.developer);
      console.log(game);
    })
  }, [])

  const editGame = () => {
    api.put(`games/${match.params.id}`, {
      game: {
        name: name,
        price: value,
        description: description,
        trailer: iframe,
        realese_date: realese_date,
        developer: developer,
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
        <p>Descrição : <textarea type='number' value={description} onChange={(event) => {setDescription(event.target.value)}} /></p>
        <p>Desenvolvedor : <input type='text' value={developer} onChange={(event) => {setDeveloper(event.target.value)}} /></p>
        <p>Link iframe : <input type='text' value={iframe} onChange={(event) => {setIframe(event.target.value)}} /></p>
        <p>data do lançamento : <input type='date' value={realese_date} onChange={(event) => {setRealese_date(event.target.value)}} /></p>
        <button type='submit'>Editar jogo</button>
      </form>
      </Container>
    </>
  );
}