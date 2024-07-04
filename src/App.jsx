import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <h1>MyAnimeIceberg</h1>
        <h2 style={{ marginBottom: '2em' }}>How Deep Do Your Anime Preferences Go?</h2>
        <button style={{ marginBottom: '5em'}}>
          Log in with MyAnimeList
        </button>
      </div>
      <Footer/>
    </>
  )
}
