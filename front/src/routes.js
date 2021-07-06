import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Homepage/home'
import { Game } from './pages/Game/index.js'
import { GameShow } from './pages/GameShow/index.js'
import { Genre } from './pages/Genre/index.js'
import { GenreShow } from './pages/genre_show'

export const MainRoutes = () => {
  return(
  <Switch>
    <Route path="/games/:id" component={GameShow} />
    <Route path="/games" component={Game} />
    
    <Route path="/genres/:id" component={GenreShow} />
    <Route path="/genres" component={Genre} />
    
    <Route path="/" component={Home} />
  </Switch>
  )
}