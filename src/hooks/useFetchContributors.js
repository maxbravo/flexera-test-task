import { useEffect, useState } from 'react'
import { getContributors } from "../helpers/getContributors";

export const useFetchContributors = ( category ) =>{

    const [state, setState] = useState({
        data:[],
        loading:true,
    });

    useEffect(() => {
        getContributors(category).then((contributors) => {
                setState({
                    data: contributors,
                    loading: false});
        });
    }, [category])

    return state;

}