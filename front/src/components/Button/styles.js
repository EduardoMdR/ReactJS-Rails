import styled from 'styled-components';

export const Container = styled.button`
  background-color: #232323;
  height: 3.125rem;
  outline: none;
  border: none;
  color: #FFF;
  font-weight: bold;
  font-size: 1.1rem;
  width: 97%;
  /* max-width: 200px; */
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    background-color: #363636;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;