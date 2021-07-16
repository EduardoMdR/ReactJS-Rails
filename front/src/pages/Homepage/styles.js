import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100%;
  min-height: 93vh;
  background-image: url('https://images4.alphacoders.com/563/563004.jpg');
  background-position: center top;
  background-size:cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  justify-content: center;
  h1 {
    color: #fff;
    font-size: 2rem;
    /* margin-bottom: 3px; */
    padding-left: 2rem;
    text-align:center;
    /* text-align: center; */
    font-family: 'Otomanopee One', sans-serif;
  }
`;

export const Grid = styled.div`
  width: 1080px;
  margin: 1rem;
  text-align: center;
  color: #ffffff;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-evenly;  background:rgba(0,0,0,0.5);
  margin-bottom: 2rem;
  border-radius: 5px;
  .ola {
    margin: 1rem;
    padding: 1rem;
    border-radius: 4px;
    text-align: left;
    margin-bottom: 1rem;
    color: #FFFFFF;
    span {
      font-size: 0.9rem;
      font-family: sans-serif;
    }
  }
`;

export const Carrossel = styled.div`
  
`;