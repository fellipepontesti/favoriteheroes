import styled from 'styled-components';

export const Container = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #510;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 0 30px;
    
    color: white;

`;

export const Carregando = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;

export const List = styled.ul`
    
    
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        color: white;
        
    }

    a{
        line-height: 20px;
    }

    img{
        border-radius: 10px;
        max-width: 300px;
        max-height: 400px;
        box-shadow: 0 0 20px rgba(1, 1, 1, 0.9);
    }

    

    h3{
        line-height: 0px;
        margin-bottom: 10px;
        line-height: 20px;

    }

    h2{
        line-height: 20px;
        margin-bottom: 10px;
    }

`;

export const Comments = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    com{
        border: 1px solid #FFF;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: initial;
        background-color: transparent;
        color: white;
        padding: 20px;
        border-radius: 20px;
    }

    h3{
        line-height: 15px;
        font-size: 15px;
    }

    button{
        background-color: black;
        padding: 10px;
        color: black;
        margin: 50px ;
        border: 1px solid #FFF;
        border-radius: 5px;
        transition-duration: 0.5s;
        text-decoration: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }

    button:hover{
        background-color: #120a8f;
        border: 3px solid #FFF;   
        a{
            color: white;
        }
    }
    }


`; 