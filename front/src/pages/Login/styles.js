import styled from 'styled-components';
import BG from '../../assets/background_login.jpg'

export const Container = styled.section`
  display: flex;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  background: url(${BG}) no-repeat center;
  background-size: cover;
  flex: 3;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 80%;
  margin: 2rem 6rem;
  max-width: 36rem;
  width: 100%;
  background:rgba(0,0,0,0.5);
  border-radius: 10px;
  padding-bottom: 2rem;
  form {
    max-width: 25rem;
    width: 100%;
    padding: 1rem 0rem 1rem;
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