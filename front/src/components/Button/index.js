import {Container} from './styles';

const Button = ({children, style, onClick,props}) => {
    return (
        <Container style={style} onClick={onClick} {...props}>
            {children}
        </Container>
    )
}

export default Button;