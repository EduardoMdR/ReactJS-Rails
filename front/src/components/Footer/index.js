import { Container, Grid } from './styles'
import { FiLogOut } from 'react-icons/fi';
import { FiMail, FiLock, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {

  return (
    <Container>
      <Grid>
        <FiFacebook size={18} strokeWidth={1} color="#fff" />
        <FiTwitter size={18} strokeWidth={1} color="#fff" />
        <FiInstagram size={18} strokeWidth={1} color="#fff" />
        <span>suporte@gallery_gaming.com</span>
      </Grid>
      <Grid>
        <span>Copyright © EduardoMdR</span>
      </Grid>
        
    </Container>
  );
}

export default Footer;