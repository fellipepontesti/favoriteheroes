import React, {useEffect, useState} from 'react';
import {Container, BestHeroes, Button} from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function Home(){

    const [heroes, setHeroes] = useState([]);
    const [review, setReview] = useState([]);
    
    useEffect(() => {
        async function lerApi() {
            let response = await api.get(`heroes`);
            
            setHeroes(response.data.data);

            setReview(response.data.included);
        }

        lerApi();
    }, [])

    return(
        
        <Container>
            <BestHeroes>
                <button>
                    <Link to="/heroes"> Ver heróis </Link>
                </button>
            </BestHeroes>
        </Container>
    )

}