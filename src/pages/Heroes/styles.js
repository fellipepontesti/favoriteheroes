import styled from 'styled-components';

export const Container = styled.div`

    

`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    list-style: none;
    padding: 20px;
    
    
    li{
        background-color: #191919;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        color: white;
        border-radius: 10px;
        transition-duration: 0.4s;
        
    button a{
        text-decoration: none;
        color: white;
        font-size: 25px;
    }

    button{
        background-color: black;
        padding: 10px;
        color: black;
        margin: 50px ;
        border: 1px solid #FFF;
        border-radius: 5px;
        transition-duration: 0.5s;
    }

    button:hover{
        background-color: #219;
        border: 3px solid #FFF;   
        a{
            color: white;
        }
    }
    }
    
    li:hover{
        padding:30px;
        background-color: #510;

    }

    img{
        max-width: 280px;
        max-height: 220px;
        border-radius: 5px;
    }

    h2{
        padding: 10px;
        line-height: 55px;
    }

`;



