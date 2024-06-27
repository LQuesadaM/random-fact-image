import { useEffect, useState } from 'react'
import { getRandomFact } from '../APIs/getFact.js'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  // fuction with get the first word of fact text
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
