import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { ContributorsGrid } from './ContributorsGrid';

export const Contributors = () => {

  const category = new URLSearchParams(useLocation().search).get("repositoryName");

  const [categories, setCategories] = useState([category]);

  return (
    <>
  
        <ol>
            {
                categories.map( category => (
                   <ContributorsGrid 
                    key = { category } 
                    category = { category } />
                ))
            }

        </ol>

    </>
)
}
