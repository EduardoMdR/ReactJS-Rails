import { Container } from './styles';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext} from '../../hooks/useUserContext';

export const Login = (setToken) => {

  const {login} = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email === ''){
      alert('Email deve estar preenchido.');
    }else if(password === ''){
      alert('Senha deve estar preenchida.')
    }
    await login({email, password});
  }
  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <p>Email: <input type='text' value={email} onChange={(event) => {setEmail(event.target.value)}} /></p>
        <p>Senha: <input type='password' value={password} onChange={(event) => {setPassword(event.target.value)}} /></p>
        <button type='submit'>Entrar</button>
      </form>
      <button type='button' onClick={() => history.push('/register')}>CRIAR CONTA</button>
    </Container>
  )
}