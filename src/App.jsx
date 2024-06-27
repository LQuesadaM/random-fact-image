import { useCatFact } from './hooks/useCatFact.js'
import './App.css'
import { Button } from './components/Button.jsx'
import { useCatRandomImage } from './hooks/useCatRandomImage.js'
import { CatImage } from './components/CatImage.jsx'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatRandomImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <header className='title'>
        <h1>Fetch fact and Image cat</h1>
      </header>
      <main className='main'>
        <Button handleClick={handleClick} />
        <section className='fact-text'>{fact && <p>{fact}</p>}</section>
        <figure className='figure-wrapper'>
          <CatImage imageUrl={imageUrl} />
        </figure>
      </main>
    </>
  )
}
