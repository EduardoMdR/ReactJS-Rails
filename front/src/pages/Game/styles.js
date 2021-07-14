import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  background-color: #17202A;
  h1 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 3px;
    text-align: center;
    font-family: 'Otomanopee One', sans-serif;
  }
`;

export const Grid = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
  background:rgba(0,0,0,0.1);
  border-radius: 10px;
  padding-bottom: 2rem;
`;

export const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1rem;
  border-radius: 10px;
  padding: 0.2rem;
  p {
    font-size: 1rem;
    margin: 1rem 0 0.3rem 0;
    color: #fff;
  }
  span {
    font-size: 0.85rem;
    color: #DCDCDC;
    max-width: 300px;
  }
  img {
    width: 175px;
    border-radius: 10px;
  }
`;

