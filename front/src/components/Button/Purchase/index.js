import {Container} from './styles';

const PurchaseButton = ({children, style, onClick,props}) => {
    return (
        <Container style={style} onClick={onClick} {...props}>
            {children}
        </Container>
    )
}

export default PurchaseButton;