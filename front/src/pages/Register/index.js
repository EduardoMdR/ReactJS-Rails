import { Container, FormContainer } from './styles';
import { useState } from 'react';
import { api } from '../../services/api.js'
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import Button from '../../components/Button/index.js'
import Input from '../../components/Input/index.js'

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
      <FormContainer>
        <h1>Cadastrar!</h1>
        <span>Complete todas informações necessarias e aproveite nosso site!</span>
        <form onSubmit={handleSubmit}>
          <Input
            Icon={FiUser} 
            value={name}
            placeholder="Nome"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            Icon={FiMail} 
            value={email}
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <div>
            <Input
              Icon={FiLock} 
              value={password}
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
              type='password'
            />
            <Input
              Icon={FiLock}  
              value={passwordConfirm}
              placeholder="Confirmar Senha"
              onChange={(event) => setPasswordConfirm(event.target.value)}
              type='password'
            />
          </div>
          <Button type="submit">
            Criar conta
          </Button>       
        </form>
        <span style={{color: '#DCDCDC'}}>ja possui uma conta?</span>
        <Link to='/login' style={{ textDecoration: 'none' }}><span>Entrar!</span></Link>
      </FormContainer>
    </Container>
  )
}