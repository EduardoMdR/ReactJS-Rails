import styled from 'styled-components';


export const Container = styled.div`
    width: 80%;
    display: flex;
    margin: 50px auto;
    
`;


export const Item = styled.div`
    width: 10rem;
    height: 12rem;
    img {
        position: relative;
        object-fit: cover;
        width: 100%;
    }
`;

export const Arrow = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
`;