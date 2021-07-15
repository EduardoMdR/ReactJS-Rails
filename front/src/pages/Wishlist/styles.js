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
    justify-content: center;
    font-family: 'Otomanopee One', sans-serif;
  }
  img {
    border-radius: 50%;
    width: 30px;
  }
  
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  
  border-radius: 10px;
  padding-bottom: 2rem;
`;

export const GameSection = styled.div`
  display: flex;
  background:rgba(0,0,0,0.1);
  justify-content: space-between;
  margin: 0.1rem;
  padding: 0.2rem;
  img {
    width: 175px;
    border-radius: 3px;
  }
  h3 {
    font-size: 0.9rem;
    color: #fff;
    float: right;
  }
  div {
    margin: 0.3rem;
    h2 {
      font-size: 1.3rem;
      margin: 1rem 0 0.3rem 0;
      color: #fff;
    }
    p {
      font-size: 0.85rem;
      color: #DCDCDC;
      max-width: 300px;
    }
    span {
      background-color: rgba(255, 255, 255, 0.1);
      margin: 0.2rem;
      padding: 0.1rem;
      border-radius: 4px;
      color: #FFFFFF;
    }
  }
`;