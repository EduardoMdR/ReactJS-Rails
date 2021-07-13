import { createContext, useContext, useState } from 'react';
import { api } from '../services/api';
import { useHistory } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = async ({email, password}) => {
    try{
      const response = await api.post('sign_in', {
        email,
        password
      });
      if(response.data){
        setUser(response.data)
        alert('Login efetuado');
        history.push('games/edit/1')
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