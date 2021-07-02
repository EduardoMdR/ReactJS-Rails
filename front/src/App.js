import {GlobalStyle} from './styles/global'
import { api } from './services/api.js'
import { useState, useEffect } from 'react'

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    api.get('games')
    .then((response) => {setGames(response.data)})
  }, [])

  return (
    <>
    <GlobalStyle />
    <h1>Gallery</h1>
    <ul>
      {games.map((jogo) => {return <li key={jogo.id}>{jogo.name}</li>})}
    </ul>
    </>
  );
}

export default App;
