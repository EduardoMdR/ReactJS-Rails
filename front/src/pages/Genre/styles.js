import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding-top: 1rem;
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

export const GenreSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
  border-radius: 10px;
  padding: 0.2rem;
  transition: 0.3s;
  span {
    color: #ffffff;
    font-size: 1.35rem;
    margin-bottom: 3px;
    text-align: center;
    font-family: 'Orbitron', sans-serif;  }
    transition: 0.2s;
  img {
    width: 175px;
    border-radius: 10px;
  }
  &:hover {
    background: #fff;
    /* -webkit-text-stroke: 1px black; */
    span {
      color: #000;
    }
  }
`;
