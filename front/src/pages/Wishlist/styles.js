import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(-45deg, #0c143c, #100c1c);
  justify-content: center;
`;

export const Grid = styled.div`
  width: 1080px;
  background:rgba(0,0,0,0.5);
  margin: 1rem;
  text-align: center;
  color: #ffffff;
`;


export const TopGrid = styled.div`
  /* width: 1080px; */
  /* min-width: 100vh; */
  /* background:rgba(0,0,0,0.5); */
  text-align: center;
  color: #ffffff;
  span {
    font-size: 1.5rem;
    margin-bottom: 3px;
    margin-right: 0.5rem;
    text-align: center;
    justify-content: center;
    font-family: 'Otomanopee One', sans-serif;
  }
  img {
    border-radius: 10px;
    width: 75px;
    border: 2px solid #fff;
    margin-right: 0.5rem;
  }
`;

export const BottomGrid = styled.div`
  padding-top: 2rem;
  text-align: center;
  color: #ffffff;
  h2 {
    font-size: 1.4rem;
  }
`;

export const GameSection = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0.2rem;
  justify-content: space-around;
  background:rgba(0,0,0,0.5);
  .ola {
    background: rgba(0,0,0,0.4);
    border-radius: 10px;
    padding: 0.5rem;
    width: 10rem;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  img {
    width: 175px;
    border-radius: 3px;
  }
  p {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 0.8rem;
    font-family: sans-serif;
  }
  span {
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0.2rem;
    padding: 0.1rem;
    border-radius: 4px;
    color: #FFFFFF;
  }
`;

export const BuySection = styled.div`
margin: 0.5rem;
  span {
    background-color: #232323;
    margin-top: 1rem;
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
  }
`;