import { Container, Grid } from './styles.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import Button from '../../components/Button/index.js'
import Input from '../../components/Input/index.js'
import { FiBook, FiDollarSign, FiAlignCenter, FiCpu, FiCalendar, FiGlobe } from 'react-icons/fi';

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
      <h1>Editar Jogo</h1>
      <Grid>
        <form onSubmit={editGame}>
          <Input
            Icon={FiBook} 
            value={name}
            placeholder="Nome do jogo"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            Icon={FiDollarSign} 
            value={value}
            type="number"
            step="0.01"
            onChange={(event) => setValue(event.target.value)}
          />
          <Input
            Icon={FiAlignCenter} 
            value={description}
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
          />
          <Input
            Icon={FiCpu} 
            value={developer}
            placeholder="Desenvolvedor"
            onChange={(event) => setDeveloper(event.target.value)}
          />
          <Input
            Icon={FiGlobe} 
            value={iframe}
            placeholder="Iframe"
            onChange={(event) => setIframe(event.target.value)}
          />
          <Input
            Icon={FiCalendar} 
            value={realese_date}
            type="date"
            onChange={(event) => setRealese_date(event.target.value)}
          />
          <Button type="submit">
            Adicionar
          </Button>
        </form>
      </Grid>
      </Container>
    </>
  );
}