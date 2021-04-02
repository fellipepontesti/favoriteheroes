import React, {useState, useEffect} from "react";
import { List, Container } from './styles.js';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Home(){

    const [heroes, setHeroes] = useState([]);
    const [review, setReview] = useState([]);
    
    useEffect(() => {
        async function buscarApi() {
            let response = await api.get(`heroes`);
            
            setHeroes(response.data.data);

            setReview(response.data.included);
        }
        
        buscarApi();
    }, [])
    
    return(
        <Container>
            
           <List>
               {heroes.map(hero => (
                   <li key={hero.id}>
                       <img src={hero.attributes.image_url}/>
                       <h2>{hero.attributes.name}</h2>
                       <h3>Quantidade de avaliações: {hero.relationships.reviews.data.length} </h3>
                       <h3>Avaliação do herói: {hero.attributes.hero_score}</h3>
                       <button>
                           <Link to={`/hero/${hero.attributes.slug}`}>
                             Ver herói
                           </Link>
                       </button>
                   </li>
                ))}
           </List>
            <h3>{JSON.stringify(heroes)}</h3>
            <br/>
            <h3>{JSON.stringify(review)}</h3>
        </Container>
    );
}