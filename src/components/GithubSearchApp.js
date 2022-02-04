import React, {useState} from 'react'
import { ChangeCategory } from './ChangeCategory';
import { GifGrid } from './GifGrid';


export const GithubSearchApp = () => {

    const [categories, setCategories] = useState(['facebook/react']);

    return (
        <>
            <ChangeCategory setCategories = { setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => (
                       <GifGrid 
                        key = { category } 
                        category = { category } />
                    ))
                }
            </ol>
        </>
    )
}
