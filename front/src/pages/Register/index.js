import { Container } from './styles';
import { useState } from 'react';
import { api } from '../../services/api.js'

export const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ''){
      alert('Nome deve estar preenchido.');
    }else if(email === ''){
      alert('Email deve estar preenchido.');
    }else if(password === ''){
      alert('Senha deve estar preenchida.')
    }else if(passwordConfirm === ''){
      alert('Confirmação de senha deve estar preenchido.');
    } else if(password !== passwordConfirm){
      alert('Senha e confirmação devem ser iguais');
    }

    api.post('users/create', {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirm
      }
    }).catch((err) => {alert(err)})

  }

  return (
    <Container>
      <h2>Cadastrar!</h2>
      <form onSubmit={handleSubmit}>
        <p>Nome: <input type='text' value={name} onChange={(event) => {setName(event.target.value)}} /></p>
        <p>Email: <input type='text' value={email} onChange={(event) => {setEmail(event.target.value)}} /></p>
        <p>Senha: <input type='password' value={password} onChange={(event) => {setPassword(event.target.value)}} /></p>
        <p>Confirmar senha: <input type='text' value={passwordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} /></p>
        
        <button type='submit'>Criar conta</button>
      </form>
    </Container>
  )
}