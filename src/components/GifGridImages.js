import React from 'react';
import { Link } from 'react-router-dom';

export const GifGridImages = ({ title }) => {

    return (

        <li>
            <Link to={`contributors?repositoryName=${title}`}>
                {title}
            </Link>
         </li>
       
    )
}

