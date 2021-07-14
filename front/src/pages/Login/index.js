import { Container, FormContainer } from './styles';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import { FiMail, FiLock, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Button from '../../components/Button/index.js'
import Input from '../../components/Input/index.js'


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
      <FormContainer>
        <h1>Login</h1>
        <span>Escolha sua conta para entrar</span>
        <p>
        <FiFacebook size={42} strokeWidth={1} color="#fff" />
        <FiTwitter size={42} strokeWidth={1} color="#fff" />
        <FiInstagram size={42} strokeWidth={1} color="#fff" />
        </p>

        <span>Ou por email</span>
        <form onSubmit={handleSubmit}>
          <Input
            Icon={FiMail} 
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input 
            Icon={FiLock} 
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
            type='password'
          />
          <Button type="submit">
            Entrar
        </Button>
        </form>
        <span style={{color: '#DCDCDC'}}>Não tem uma conta da gallery gaming? </span>
        <button type='button' onClick={() => history.push('/register')}>Cadastrar!</button>
      </FormContainer>
    </Container>
  )
}