import React from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const ArtistList = (props) => {
    console.log(props.artists);
    console.log('Here we talk, and also walk')
    const artistData = props.artists;
    const artists = props.artists.map(artist => <NavLink key={artist.id} to={`${props.match.path}/${artist.id}`}>{artist.name}</NavLink>)
    return (
        <div>
        <ul>
            {artists}
        </ul>
            <Route path={'/artists/:id'} render={(props) => <Artist {...props} artists={artistData}/> }/>
        </div>
    )
}

const Artist = (props) =>  {

    if(props.artists[0] === undefined) {
        return <h3>ERROR</h3>
    }
    
    const match = props.match;
    const artist = props.artists.filter(artist => artist.id == match.params.id);
    
    const artistData = artist[0].albums.map(album => 
       <li key={album.id}>{album.title}</li> 
    );


    return(
    <div>
        <ul>
            {artistData}
        </ul>
    </div>
    )
}
export default ArtistList;