import Carousel from 'react-elastic-carousel'
import Item from '../CarouselItem/index.js'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

const myBreakpoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 850, itemsToShow: 4},
  {width: 1024, itemsToShow: 5}
]

const MyCarousel = () => {

  const [games, setGames] = useState({})

  const loadGame = async () => {
    const respose = await api.get('games')
    setGames(respose.data)
  }

  useEffect(() => {
    loadGame();
  }, []);

  return (
    <Carousel pagination={false} breakPoints={myBreakpoints}>
      {/* {games.map(game => <Item key={game.id} produto={game} />)} */}
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
      <Item produto={1} />
    </Carousel>
  )
}

export default MyCarousel;