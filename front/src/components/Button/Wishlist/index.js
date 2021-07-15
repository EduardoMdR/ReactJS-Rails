import {Container} from './styles';

const WishlistButton = ({children, style, onClick,props}) => {
    return (
        <Container style={style} onClick={onClick} {...props}>
            {children}
        </Container>
    )
}

export default WishlistButton;