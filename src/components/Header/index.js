import React from "react";
import { Link } from 'react-router-dom';
import {Head} from './styles';


export default function Header(){

        return(
            <Head>
                <Link to="/"><strong>Heróis</strong></Link>
            </Head>
        )

}

