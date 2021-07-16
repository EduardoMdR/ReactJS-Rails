import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100%;
  min-height: 93vh;
  background-color: #17202A;
`;

export const GridMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem;
  width: 30vh;
  background:rgba(0,0,0,0.1);
  border-radius: 10px;
  h1 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  p {
    color: #ffffff;
    margin: 0.1rem;
    font-size: 0.9rem;
  }
`;

export const GridGame = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
  width: 170vh; /* Why?????? */
  justify-content: center;
  background:rgba(0,0,0,0.3);
  border-radius: 10px;
`;

export const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1rem;
  border-radius: 10px;
  padding: 0.2rem;
  background:rgba(0,0,0,0.1);
  max-height: 130px;
  height: 128px;
  position: relative;
  transition: 0.5s;
  span {
    font-size: 1.125rem;
    color: #fff;
    background:rgba(0,0,0,0.7);
    width: 97%;
    height: 1.7rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    position: absolute;
    bottom: 0;
    transition: 0.5s;
  }  
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    span {
      background-color: #fff;
      color: #000;
      cursor: pointer;
    }
  }

  img {
    width: 200px;
    min-height: 125px;
    border-radius: 10px;
  }
`;
