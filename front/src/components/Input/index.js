import {Container} from './styles';

const Input = ({Icon, ...props}) => {
  return (
    <Container>
      <Icon size={18} />
      <input {...props} />
    </Container>
  )
}

export default Input;