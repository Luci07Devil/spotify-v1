import React from 'react';
import styled from "styled-components";

const handleClick = () => {
    const clientID = "0a766a36723f4d1e9c614da9e2fd28ff";
    const redirectURL = "http://localhost:3000/";
    const apiURL = "https://accounts.spotify.com/authorize";
    const scopes = ["user-modify-playback-state", "user-read-playback-state", "user-read-currently-playing",
    "user-read-recently-played","user-read-playback-position","user-top-read","playlist-read-collaborative",
    "playlist-modify-public","playlist-read-private","playlist-modify-private","user-read-email",
    "user-read-private","user-library-modify","user-library-read"];
    window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
};
export default function Login() {
  return <Container>
      <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='Spotify' />
      <button onClick={handleClick}>Connect Spotify</button>
  </Container>
  
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    widht: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img {
        height: 20vh;
    }
    button {
            padding: 1rem 5rem;
            border-radius: 5rem;
            border: none;
            background-color: black;
            color: white;
            alignment: center;
            font-size: 1.4rem;
            cursor: pointer;
        }
`;

