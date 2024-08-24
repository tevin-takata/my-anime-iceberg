import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import Iceberg from './Iceberg';

export default function Home() {
  const [token, setToken] = useState(null);

  const CLIENT_ID = import.meta.env.CLIENT_ID
  const REDIRECT_URI = import.meta.env.REDIRECT_URI
  const CLIENT_SECRET = import.meta.env.CLIENT_SECRET

  function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return text;
  }

  const CODE_CHALLENGE = generateRandomString(128);

  const handleLogin = () => {
    const state = generateRandomString(16);
    const authUrl = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&state=${state}&redirect_uri=${REDIRECT_URI}&code_challenge=${CODE_CHALLENGE}&code_challenge_method=plain`;
    window.location.href = authUrl;
  };

  return (
    <>
      {!token && (
        <div>
          <h1>MyAnimeIceberg</h1>
          <h2 style={{ marginBottom: '2em' }}>How Deep Do Your Anime Preferences Go?</h2>
          <button onClick={handleLogin} style={{ marginBottom: '5em'}}>
            Log in with MyAnimeList
          </button>
        </div>
      )}
      {token && (
        <Iceberg token={token} />
      )}
    </>
  )
}
