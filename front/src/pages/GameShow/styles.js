import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100%;
  min-height: 93vh;
  background-color: #17202A;
  justify-content: center;
  h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 3px;
    padding-left: 2rem;
    text-align: left;
    /* text-align: center; */
    font-family: 'Otomanopee One', sans-serif;
  }
  button {
    border: none;
    background-color: rgba(255, 255, 255,00)
  }
`;

export const Section = styled.div`
  width: 1080px;
  /* background:rgba(0,0,0,0.5); */
  margin: 1rem;
  text-align: center;
  color: #ffffff;
  .ola {
    margin: 0.2rem;
    padding: 0.1rem;
    border-radius: 4px;
    text-align: left;
    margin-bottom: 1rem;
    color: #FFFFFF;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  justify-content: space-around;
  max-width: 1080px;
  /* background:rgba(0,0,0,0.5); */
  border-radius: 4px;
  p {
    color: #DCDCDC;
  }
  h3 {
    color: #fff;
    font-size: 1.45rem;
    font-family: sans-serif;
  }
  /* flex-direction: column; */
`;

export const SlideShow = styled.div`
  width: 90vh;
  display: flex;
  /* padding: 1rem; */
  /* text-align: justify;
  align-items: center;
  justify-content: center; */
  iframe {
    width: 100%;
  }
`;

export const InfoShow = styled.div`
  width: 40vh;
  color: #fff;
  text-align: justify;
  font-size: 0.8rem;
  font-family: sans-serif;
  margin: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    /* float: right; */
    background-color: #232323;
    margin-top: 1rem;
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
  }
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
