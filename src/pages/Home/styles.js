import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 100vh;
    background-color: #000;
`;

export const BestHeroes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;       
    padding: 20px;
    
    button a{
        text-decoration: none;
        color: white;
        font-size: 25px;
    }

    button{
        background-color: black;
        padding: 20px;
        color: black;
        margin: 50px ;
        border: 1px solid #FFF;
        border-radius: 5px;
        transition-duration: 0.5s;
    }

    button:hover{
        background-color: white;
        color: black;
        border: 1px solid #000;   
        a{
            color: black;
        }
    }

`;

