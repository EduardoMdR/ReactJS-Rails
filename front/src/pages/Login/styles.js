import styled from 'styled-components';
import BG from '../../assets/background_login.jpg'

export const Container = styled.section`
  display: flex;
  height: 100vh;
  background: url(${BG}) no-repeat center;
  background-size: cover;
  flex: 3;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto 0;
  max-width: 48rem;
  width: 100%;
  background:rgba(0,0,0,0.5);
  form {
    max-width: 25rem;
    width: 100%;
  }
  &:first-child{
    margin-bottom: 0.8rem;
  }
  h1 {
    color: #ffffff;
    font-size: 2.25rem;
    margin-bottom: 3px;
    text-align: center;
  }
  span {
    font-size: 1.125rem;
    color: #DCDCDC;
    max-width: 300px;
    text-align: center;
    margin-bottom: 1rem;
  }
  button + span {
    margin: 1.3rem 0;
  }
`;