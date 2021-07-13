import styled from 'styled-components';

export const Container = styled.div`
  height: 3.125rem;
  background-color: white;
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 2px solid #66543E;
  border-radius: 5px;
  transition: 0.2s;
  margin-bottom: 0.5rem;
  svg {
    color: gray;
    transition: 0.2s;
  }

  input {
    margin-left: 0.6rem;
    height: 100%;
    width: 90%;
    font-size: 1.1rem;
    outline: none;
    border: none;
    color: #66543E;        
  }
`;