import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'

const UserContext = createContext();

const UserProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const userCookie = Cookies.get('gallery.user');
    if(userCookie !== undefined){
      const retrievedUser = JSON.parse(userCookie);
      setUser(retrievedUser);
    }
  }, [])

  const login = async ({email, password}) => {
    try{
      const response = await api.post('sign_in', {
        email,
        password
      });
      if(response.data){
        setUser(response.data)
        Cookies.set('gallery.user', response.data)
        alert('Login efetuado');
        history.push('/wishlist')
      }
    }catch(err){
      alert('Falha no login')
    }
  }
  return ( 
    <UserContext.Provider value={{user, login}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  
  return context;
}

export default UserProvider;