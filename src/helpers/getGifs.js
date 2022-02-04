export const getGifs = async( category ) => {

    const url = `https://api.github.com/search/repositories?q=${encodeURI( category )}`;
    const respuesta = await fetch(url);
    const {items} = await respuesta.json();

    const gifs = items.map( img =>{
        return {
            id: img.id,
            title: img.full_name,
            url: img.owner.avatar_url,
        }
    });

    return(gifs);
}