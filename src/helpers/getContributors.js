export const getContributors = async( category ) => {

    const url = `https://api.github.com/repos/${encodeURI( category )}/contributors`;
    const response = await fetch(url);
    const items = await response.json();
    
    const contributors = items.map( contributor =>{
        return {
            login: contributor.login,
            avatar: contributor.avatar_url,
            id: contributor.id,
            htmlurl: contributor.html_url,
            contributions: contributor.contributions,
        };
    });
    return(contributors);

   
}