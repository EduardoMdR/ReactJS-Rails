import styled from 'styled-components';

export const Container = styled.button`
  background-color: #66543E;
  height: 3.125rem;
  outline: none;
  border: none;
  color: #FFF;
  font-weight: bold;
  font-size: 1.1rem;
  width: 100%;
  max-width: 200px;
  transition: 0.2s;
  border-radius: 5px;
  &:hover {
    background-color: #56493A;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;