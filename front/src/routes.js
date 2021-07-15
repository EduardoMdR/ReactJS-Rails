import { useUserContext} from './hooks/useUserContext';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/Homepage/home'
import { Game } from './pages/Game/index.js'
import { GameShow } from './pages/GameShow/index.js'
import { GameNew } from './pages/GameNew/index.js'
import { GameEdit } from './pages/GameEdit/index.js'
import { GameGenre } from './pages/GameGenre/index.js'
import { Genre } from './pages/Genre/index.js'
import { GenreShow } from './pages/GenreShow/index.js'
import { Wishlist } from './pages/Wishlist/index.js'
import { Login } from './pages/Login/index.js'
import { Register } from './pages/Register/index.js'

export const MainRoutes = () => {

  const {user} = useUserContext();
  console.log(user)
  const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
      (user) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/login', state: { from: props.location } }} />
      )
    )} />
  )

  const AdminRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
      (user && user.id === 1) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/home', state: { from: props.location } }} />
      )
    )} />
  )

  return(
  <Switch>
    <AdminRoute path="/games/new" component={GameNew} />
    <AdminRoute path="/games/edit/:id" component={GameEdit} />
    <AdminRoute path="/games/genre/:id" component={GameGenre} />
    <Route path="/games/:id" component={GameShow} />
    <Route path="/games" component={Game} />
    
    <Route path="/genres/:id" component={GenreShow} />
    <Route path="/genres" component={Genre} />

    <PrivateRoute path="/wishlist" component={Wishlist} />

    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    
    <Route exact path="/" component={Home} />
  </Switch>
  )
}