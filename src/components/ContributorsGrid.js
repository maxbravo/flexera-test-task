import React from 'react';
import { ContributorsGridImages } from './ContributorsGridImages';
import { useFetchContributors } from '../hooks/useFetchContributors';
import { Link } from 'react-router-dom';

export const ContributorsGrid = ( { category } ) => {

const {data:images, loading} = useFetchContributors(category);

    return (
        <>
            <h3>Contributors for the repository: "{ category }"</h3> 
            <Link to={`/`}>
                <small>(return to Home)</small>
            </Link>
            {loading && <p className='animate__animated animate__flash'>Loading, please wait...</p>}
            <div className='card-grid'>

                {
                    images.map(img => {
                        return <ContributorsGridImages 
                        key = { img.id } 
                        { ...img } 
                        />
                    })

                }
                
            </div>
        </>
    )
}