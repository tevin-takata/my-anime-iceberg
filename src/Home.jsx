import { useState, useEffect } from 'react';
import './App.css'
import Iceberg from './Iceberg';

export default function Home() {
  const [token, setToken] = useState(null);

  const CLIENT_ID = import.meta.env.CLIENT_ID
  const REDIRECT_URI = import.meta.env.REDIRECT_URI
  const AUTH_ENDPOINT = "https://myanimelist.net/v1/oauth2/authorize"
  const CLIENT_SECRET = import.meta.env.CLIENT_SECRET

  return (
    <>
      {!token && (
        <div>
          <h1>MyAnimeIceberg</h1>
          <h2 style={{ marginBottom: '2em' }}>How Deep Do Your Anime Preferences Go?</h2>
          <button style={{ marginBottom: '5em'}}>
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
