import React from 'react';

export const ContributorsGridImages = ({ avatar, login, id, htmlurl, contributions }) => {

    return (
        <div className="card">
            <img src={avatar} align="center" alt={htmlurl} className="card animate__animated animate__fadeIn"/>
            <p><b>Nickname:</b> {login}</p>
            <p><b>User id:</b> {id}</p>
            <p><b>Contributions:</b> {contributions}</p>
            <a target="_blank" href={htmlurl} >Go to Github profile</a>
        </div>
    )
}
