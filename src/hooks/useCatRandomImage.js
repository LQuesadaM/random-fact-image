import { useEffect, useState } from 'react'

const CAT_RANDOM_URL_IMAGE = 'https://cataas.com'

export const useCatRandomImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1).join()

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        const { _id } = data
        const url = `${CAT_RANDOM_URL_IMAGE}/cat/${_id}/says/${firstWord}?fontSize=80&fontColor=red`
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl }
}
