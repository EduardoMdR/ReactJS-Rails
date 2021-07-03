import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Game } from './pages/game/game.js'
import { Genre } from './pages/genre/genre.js'
import { GenreShow } from './pages/genre_show'

export const MainRoutes = () => {
  return(
  <Switch>
    <Route path="/genres/:id" component={GenreShow} />
    <Route path="/games">
      <Game />
    </Route>
    
    <Route path="/genres">
      <Genre />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
  )
}