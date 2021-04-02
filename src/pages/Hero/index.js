import React, {useState, useEffect} from "react";
import { Container, List, Carregando, Comments} from './styles';
import api from '../../services/api';

//{match.params.slug}
//tentar o promisse all para pegar o review tbm
export default function Hero({match}){

    const [heroes, setHeroes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [review, setReview] = useState([]);

    useEffect(() => {

        async function load(){
            let nomeHero = (match.params.slug);

            let response = await api.get(`/heroes/${nomeHero}`)

            setHeroes(response.data.data);
            setCarregando(false);
            setReview(response.data.included);
            
        }

        load();
        
    }, [(match.params.slug)], heroes)

    if(carregando){
        return(
            <Carregando>
                <h1>Carregando...</h1>
            </Carregando>

        )     
    }

    return(
        <Container>
            <List>
                <li>
                    <h1>{heroes.attributes.name}</h1>
                    <h2>Quantidade de avaliação: {heroes.relationships.reviews.data.length} </h2>
                    <img src={heroes.attributes.image_url}/>
                    <br/>
                    <h4>Comentários...</h4>
                        <Comments>
                            {review.map(rev => (
                                <com key={rev.id}>
                                    <h3>Título: {rev.attributes.title}</h3>
                                    <h3>Descrição: {rev.attributes.description}</h3>
                                    <h3>Nota: {rev.attributes.score}</h3>
                                </com>
                            ))} 
                            <button>Adicionar novo comentário</button>
                        </Comments>
                </li>
            </List>  
        </Container>
        
    );
}