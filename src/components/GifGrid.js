import React from 'react';
import { GifGridImages } from './GifGridImages';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>Search results for: "{ category }"</h3>
            {loading && <p className='animate__animated animate__flash'>Loading, please wait...</p>}
                {
                    images.map(img => {
                        return <GifGridImages 
                        key = { img.id } 
                        { ...img } 
                        />
        
                    })

                }
               
        </>
    )
}
